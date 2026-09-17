# Touchless Gesture Control Interface
### Final Year Project Proposal

---

## 1. Overview

A real-time, camera-based system that lets users control software (e.g. a presentation tool, media player, or the OS cursor/keyboard) using hand gestures, with no physical input device. The system uses MediaPipe Hands for landmark detection and supports both a fixed set of built-in gestures and **user-defined custom gestures**, which a user can record and assign to actions themselves.

The custom-gesture capability is the project's core contribution: rather than a fixed gesture-to-action mapping, the system learns a new gesture from a small number of user-provided samples (few-shot learning), making the interface personalizable and extensible without retraining a full model from scratch.

---

## 2. Motivation

- Touchless interfaces have practical value in contexts where physical input is inconvenient or unhygienic (e.g. kitchens, labs, presentations) or where users have motor impairments that make a mouse/keyboard difficult.
- Most hobbyist gesture-control demos hardcode a fixed gesture set. Letting the user define and teach their own gestures is a more interesting technical problem and a genuinely more useful product.
- MediaPipe provides high-quality, real-time hand landmark detection out of the box, which removes the hardest part of the CV pipeline and lets the project focus on the classification and interaction design layers — the parts with actual room for a contribution.

---

## 3. Research Question / Objectives

**Primary research question:** How few labeled samples are needed to reliably teach the system a new user-defined gesture, and how does a learned (few-shot) approach compare to a rule-based baseline in accuracy, latency, and generalization across users and conditions?

**Objectives:**
1. Build a real-time hand-tracking pipeline using MediaPipe Hands.
2. Implement a rule-based baseline gesture classifier (geometric thresholds on landmarks).
3. Implement a learned classifier that can be extended with new gestures from a small number of samples (few-shot / online learning).
4. Map recognized gestures to real system/application actions.
5. Evaluate both approaches on accuracy, latency, robustness (lighting, hand size/shape, background), and ease of adding new gestures.
6. (Optional/stretch) Build a lightweight web dashboard for configuring gesture-action mappings and visualizing recognition confidence live.

---

## 4. System Architecture

```
 ┌─────────────┐     ┌──────────────────┐     ┌────────────────────┐     ┌───────────────┐
 │  Webcam feed │ --> │  MediaPipe Hands  │ --> │ Gesture Classifier │ --> │ Action Mapper │
 │  (OpenCV)    │     │ (21 landmarks/hand)│     │ (rule-based / ML) │     │ (pyautogui /  │
 └─────────────┘     └──────────────────┘     └────────────────────┘     │  app hooks)   │
                                                        │                  └───────────────┘
                                                        v
                                              ┌────────────────────┐
                                              │ Gesture Recorder /  │
                                              │ Few-shot Trainer    │
                                              │ (add new gestures)  │
                                              └────────────────────┘
```

### Components

| Component | Responsibility | Tech |
|---|---|---|
| Capture layer | Grab webcam frames | OpenCV |
| Landmark extraction | Detect 21 hand landmarks per hand, per frame | MediaPipe Hands |
| Feature normalization | Convert raw landmarks into a scale/rotation-invariant feature vector | NumPy |
| Rule-based classifier | Baseline gesture detection via geometric rules (finger curl angles, pinch distance, etc.) | Python |
| Learned classifier | Few-shot gesture recognition from recorded samples | scikit-learn (k-NN or small MLP) or a lightweight PyTorch model |
| Gesture recorder | UI/flow for a user to record N samples of a new gesture and name it | Python (OpenCV window or React frontend) |
| Action mapper | Executes the mapped action for a recognized gesture | `pyautogui`, OS APIs, or app-specific integration (e.g. python-pptx-controlled presentation, media player hooks) |
| (Optional) Web dashboard | Configure mappings, view live confidence/landmarks | React + TypeScript, WebSocket to Python backend |

---

## 5. Technical Approach

### 5.1 Landmark Feature Representation
Each hand yields 21 (x, y, z) landmarks. Raw coordinates are not directly comparable across users/hand sizes/positions, so features are normalized:
- Translate so the wrist landmark is the origin
- Scale by a reference distance (e.g. wrist-to-middle-finger-MCP) to normalize for hand size and camera distance
- Optionally represent as inter-joint angles rather than raw coordinates, which is more robust to rotation

### 5.2 Rule-Based Baseline
Detects a small fixed gesture set (e.g. fist, open palm, pinch, point, thumbs up, swipe) using thresholds on:
- Finger curl (angle between joints per finger)
- Inter-fingertip distances (for pinch detection)
- Frame-to-frame palm centroid movement (for swipe/motion gestures)

This baseline requires no training data and serves as the accuracy/latency benchmark for the learned approach.

### 5.3 Few-Shot Learned Classifier
1. User records ~5–15 samples of a new gesture (varying hand angle/position slightly for robustness)
2. Each sample is converted to the normalized feature vector
3. A lightweight classifier (k-NN over stored feature vectors, or an incrementally-trainable small MLP) is updated to include the new class
4. At inference time, live landmark features are classified against all known gestures with a confidence threshold to reject "no gesture" frames

k-NN is a strong first choice — it requires no retraining step when a class is added (just append to the reference set) and is simple to reason about for the report. An MLP can be explored as a stretch comparison if time allows.

### 5.4 Temporal Smoothing
To avoid flickering/false triggers, apply a simple majority-vote or debounce window over the last N frames before firing an action.

### 5.5 Action Mapping
- Generic OS-level actions (cursor move, click, keyboard shortcuts) via `pyautogui`
- Or scope to a specific target app for a cleaner demo narrative — e.g. gesture-controlled slide navigation for presentations, or play/pause/volume for a media player

---

## 6. Milestones & Timeline (suggested — adjust to your semester structure)

| Phase | Weeks | Deliverable |
|---|---|---|
| 1. Setup & literature review | 1–2 | MediaPipe pipeline running, webcam + landmark visualization working; review of existing gesture-recognition literature/approaches for the report |
| 2. Rule-based baseline | 3–4 | Fixed gesture set (5–8 gestures) detected reliably; mapped to basic test actions |
| 3. Feature pipeline & dataset tooling | 5–6 | Normalized feature extraction; gesture recording tool (record + label a new gesture) |
| 4. Learned classifier | 7–9 | k-NN (and/or MLP) classifier working; can add a new gesture from a handful of samples and use it live |
| 5. Action integration & use-case polish | 10–11 | Pick a concrete use case (e.g. presentation control) and polish the end-to-end demo |
| 6. Evaluation | 12–13 | Accuracy/latency/robustness testing across multiple users, lighting conditions; confusion matrix analysis |
| 7. (Optional) Web dashboard | if time allows | React/TS config UI, live confidence visualization |
| 8. Write-up | final weeks | Report, evaluation write-up, demo video/prep |

---

## 7. Evaluation Plan

- **Accuracy:** per-gesture precision/recall for both rule-based and learned classifiers, on a held-out test set and on unseen users (not just the developers)
- **Sample efficiency:** accuracy of the learned classifier as a function of number of training samples per gesture (this directly answers the core research question)
- **Latency:** end-to-end time from frame capture to action trigger; target real-time performance (ideally comfortably under 100ms)
- **Robustness:** performance across varied lighting, backgrounds, and hand sizes/skin tones — important both for validity and to flag limitations honestly in the report
- **Usability (optional but strong addition):** a small user study — have a few people try recording and using a custom gesture, gather qualitative feedback on ease of use

---

## 8. Tech Stack Summary

- **Core:** Python, OpenCV, MediaPipe Hands
- **ML:** scikit-learn (k-NN, baseline MLP) — PyTorch only if you want a stretch comparison
- **Action layer:** `pyautogui`, or app-specific Python APIs depending on chosen use case
- **Optional web layer:** React + TypeScript frontend, WebSocket or REST bridge to the Python backend (e.g. via FastAPI or Flask-SocketIO)

---

## 9. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Learned classifier overfits to developers' hands | Test with external users, not just team members, before final evaluation |
| Lighting/background sensitivity | Normalize features aggressively; test across varied conditions early, not just at the end |
| Scope creep (web dashboard, multi-hand, etc.) | Treat the dashboard and any stretch features as optional — lock the core pipeline + evaluation first |
| Latency issues with heavier ML model | Keep classifier lightweight (k-NN/small MLP); MediaPipe itself is already optimized for real-time use |

---

## 10. Potential Extensions (if ahead of schedule)
- Two-hand gestures
- Dynamic (motion-based) gestures, not just static hand shapes
- On-device deployment (e.g. Raspberry Pi) for a fully embedded touchless kiosk demo
- Accessibility-focused use case (cursor control for users with limited mobility) as the flagship demo