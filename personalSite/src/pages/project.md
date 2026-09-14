# Final-Year Computer Science Project Proposal

## Project Title

**Design and Implementation of a Web-Based Barcode Inventory Management and Tracking System**

---

## 1. Project Overview

This project proposes the design and development of a web-based inventory management system that uses webcam-based barcode scanning to identify and track physical inventory. The system will allow organisations to create inventory records, generate unique barcodes for items, monitor stock levels, and record the movement of items through check-out and return transactions.

The proposed system will consist of two primary interfaces: an inventory management interface for administrators and a simplified scanning interface for general users. Administrators will be able to create and modify inventory records, manage users and categories, monitor stock levels, and review inventory activity. General users will be able to scan an item's barcode using a webcam and perform permitted actions such as checking an item out or returning it.

Each inventory item will be assigned a unique identifier which is represented by a generated barcode. The barcode will contain only the identifier required to locate the item within the system. When the barcode is scanned, the application will use the identifier to retrieve the corresponding item from the database.

The system will also maintain a history of inventory transactions. This will allow the application to show who checked an item out, when it was checked out, when it was returned, and how the item's stock level has changed over time.

The project therefore combines several areas of computer science and software engineering, including web application development, database design, barcode recognition, API development, authentication, authorisation, data modelling, testing, and user-interface design.

---

# 2. Background and Motivation

Managing physical inventory manually can be inefficient and error-prone, particularly when an organisation has a large number of items that are regularly borrowed, returned, moved, or replaced.

Traditional approaches may rely on spreadsheets, paper records, or manually entered identification numbers. These approaches can make it difficult to determine the current location or availability of an item and can provide limited information about its historical usage.

Barcode technology provides a relatively inexpensive method of uniquely identifying physical objects. Dedicated barcode scanners can be used for this purpose, but modern webcams also provide a potentially accessible alternative. A web-based application can therefore combine barcode recognition with an inventory database to provide an integrated system without requiring specialised scanning hardware.

The proposed project is motivated by the opportunity to investigate how webcam-based barcode recognition can be integrated into a practical inventory-management workflow.

Rather than developing a barcode scanner as an isolated application, the project will investigate how barcode identification can be used as an interface to a larger inventory system.

The core workflow will be:

**Scan → Identify → Display → Perform Action → Record Transaction**

For example, a user could scan a barcode attached to a laptop. The system would identify the associated inventory record, display the laptop's details and current stock, and allow the user to check the item out. The system would then update the stock level and record the transaction.

---

# 3. Aim

The primary aim of this project is to design and implement a web-based inventory management system that uses webcam-based barcode scanning to provide efficient identification, tracking, and management of physical inventory.

The system will provide administrators with tools for managing inventory and users, while providing authorised users with a simple barcode-based interface for checking items in and out.

---

# 4. Objectives

The project will have the following objectives:

### Objective 1 — Barcode Generation

Develop functionality allowing authorised users to generate unique barcodes associated with inventory items.

The system should allow generated barcodes to be displayed and downloaded or printed so that they can be physically attached to inventory.

### Objective 2 — Webcam Barcode Scanning

Implement webcam-based barcode recognition within the web application.

The scanner should be capable of detecting a supported barcode and extracting its unique identifier without requiring a dedicated barcode scanner.

### Objective 3 — Inventory Database

Design and implement a relational database capable of storing:

* Inventory items
* Barcode identifiers
* Categories
* Users
* Stock levels
* Locations
* Transactions
* Check-out records
* Item attributes

### Objective 4 — Inventory Management

Provide administrators with the ability to:

* Create inventory items
* Edit inventory items
* Remove inventory items
* Categorise inventory
* Assign locations
* Set stock levels
* Set minimum stock thresholds
* View inventory information

### Objective 5 — Check-Out and Return System

Implement functionality allowing authorised users to check inventory items out and return them.

Each transaction should record information such as:

* Item
* User
* Transaction type
* Quantity
* Date and time
* Expected return date, where applicable

### Objective 6 — Stock Tracking

The system should automatically maintain the current quantity of available inventory.

For example:

```text
Initial stock:    10

Check out:        -1

Current stock:     9

Return:           +1

Current stock:    10
```

The system should also identify items that are low in stock or completely out of stock.

### Objective 7 — User Authentication and Authorisation

Implement authentication and role-based access control.

At minimum, the system will support:

* Administrator
* Standard user

Administrators will have access to inventory and user management functionality, while standard users will have restricted permissions.

### Objective 8 — Administrative Dashboard

Develop a dashboard allowing administrators to view an overview of the inventory system.

The dashboard should display information such as:

* Total inventory
* Available stock
* Checked-out items
* Low-stock items
* Out-of-stock items
* Recent transactions

### Objective 9 — Transaction History

Maintain a permanent history of inventory transactions.

Administrators should be able to view historical activity and determine who performed an action and when it occurred.

### Objective 10 — Testing and Evaluation

Develop an appropriate testing strategy covering:

* Unit testing
* Integration testing
* System testing
* User acceptance testing
* Barcode scanning reliability

The system will be evaluated against the defined functional and non-functional requirements.

---

# 5. Proposed System

The proposed system will consist of several interconnected components.

```text
                  ┌─────────────────────────┐
                  │       Web Browser       │
                  │                         │
                  │  Admin Dashboard        │
                  │  Inventory Interface    │
                  │  Barcode Scanner        │
                  └────────────┬────────────┘
                               │
                               │ HTTPS / REST API
                               │
                  ┌────────────▼────────────┐
                  │        Backend          │
                  │                         │
                  │ Authentication          │
                  │ Inventory Logic         │
                  │ Stock Management        │
                  │ Transaction Management  │
                  │ Authorisation           │
                  └────────────┬────────────┘
                               │
                               │
                  ┌────────────▼────────────┐
                  │       Database          │
                  │                         │
                  │ Users                   │
                  │ Items                   │
                  │ Categories              │
                  │ Transactions            │
                  │ Checkouts               │
                  │ Attributes              │
                  └─────────────────────────┘
```

The barcode scanner will use the device's webcam to capture barcode information. Once a barcode is decoded, the resulting identifier will be sent to the backend API, which will retrieve the corresponding inventory record from the database.

---

# 6. Core User Workflow

The primary user workflow will be based around barcode scanning.

### Step 1 — Scan

The user opens the barcode scanner and grants webcam access.

### Step 2 — Identify

The webcam detects a barcode and extracts its unique identifier.

For example:

```text
INV-000123
```

### Step 3 — Retrieve

The application sends the identifier to the backend.

```text
Webcam
   ↓
Barcode Decoder
   ↓
INV-000123
   ↓
Backend API
   ↓
Database
```

### Step 4 — Display

The system displays the associated inventory record.

```text
Dell Latitude 5540

Category: Laptop
Location: Computer Lab 2

Available Stock: 8

Status: Available
```

### Step 5 — Perform Action

Depending on the user's permissions, the user can:

```text
[ TAKE OUT ]

[ RETURN ]

[ VIEW HISTORY ]
```

### Step 6 — Record

The selected action is recorded as a transaction and the stock level is updated.

---

# 7. Functional Requirements

The system will provide the following functional requirements.

## FR1 — User Authentication

The system shall allow users to securely authenticate.

## FR2 — Role Management

The system shall restrict functionality based on a user's role.

## FR3 — Create Inventory Items

Administrators shall be able to create new inventory records.

## FR4 — Generate Barcodes

The system shall generate a unique barcode for each inventory record.

## FR5 — Scan Barcodes

Users shall be able to scan supported barcodes using a webcam.

## FR6 — Retrieve Inventory

The system shall retrieve an inventory record using its barcode identifier.

## FR7 — Edit Inventory

Administrators shall be able to modify inventory information.

## FR8 — Delete Inventory

Administrators shall be able to remove inventory records where appropriate.

## FR9 — Stock Management

The system shall maintain the current quantity of available inventory.

## FR10 — Check-Out

Authorised users shall be able to check inventory items out.

## FR11 — Return

Authorised users shall be able to return checked-out inventory.

## FR12 — Transaction Recording

The system shall record inventory transactions with the relevant user, item, action, quantity, and timestamp.

## FR13 — Search

Users shall be able to search the inventory database.

## FR14 — Filtering

Users shall be able to filter inventory by properties such as category, location, and availability.

## FR15 — Low-Stock Detection

The system shall identify inventory that falls below its configured minimum stock level.

## FR16 — Dashboard

Administrators shall be provided with an overview of current inventory activity.

## FR17 — Transaction History

Administrators shall be able to review historical inventory transactions.

## FR18 — User Management

Administrators shall be able to manage system users and their roles.

---

# 8. Non-Functional Requirements

The following non-functional requirements will be considered.

### Performance

Normal inventory operations should return results within a reasonable response time under the expected project workload.

### Usability

The barcode scanning process should require minimal user interaction.

The intended workflow should be:

**Open scanner → Scan → Select action**

### Security

The system should:

* Hash user passwords securely
* Authenticate users before accessing protected functionality
* Enforce role-based permissions
* Validate user input
* Protect sensitive API endpoints

### Reliability

Inventory quantities should remain consistent following check-out and return operations.

The system should prevent invalid operations such as returning more items than have been checked out.

### Maintainability

The application should use a modular architecture with clear separation between frontend, backend, database, and barcode functionality.

### Compatibility

The application should operate on modern web browsers that provide webcam access.

### Scalability

Although the project will initially target a relatively small inventory, the database and application architecture should be capable of supporting substantially more inventory records and users without requiring major architectural changes.

---

# 9. Database Design

A relational database will be used to maintain persistent application data.

A simplified database structure is proposed below.

```text
USER
 |
 | 1
 |
 | *
TRANSACTION
 |
 | *
 |
 | 1
ITEM
 |
 | *
 |
 | 1
CATEGORY
```

Additional relationships will exist for locations, checkouts, and custom attributes.

### User

```text
User
----
id
name
email
password_hash
role
created_at
```

### Item

```text
Item
----
id
barcode
name
description
category_id
location_id
quantity
minimum_quantity
created_at
updated_at
```

### Category

```text
Category
--------
id
name
description
```

### Transaction

```text
Transaction
-----------
id
item_id
user_id
type
quantity
timestamp
notes
```

### Checkout

```text
Checkout
--------
id
item_id
user_id
quantity
checkout_date
expected_return_date
actual_return_date
status
```

### Location

```text
Location
--------
id
name
description
```

The final database design will be developed following normalisation principles to reduce unnecessary duplication and maintain data integrity.

---

# 10. Dynamic Item Attributes

An optional feature of the proposed design is support for custom attributes.

Different types of inventory may require different information.

For example, a laptop may have:

```text
Processor
RAM
Storage
Operating System
Serial Number
```

while a camera might have:

```text
Sensor
Resolution
Lens Mount
Serial Number
```

Rather than creating a separate database column for every possible attribute, the system may implement an attribute-definition model.

```text
CATEGORY
   │
   ├── Attribute: RAM
   ├── Attribute: Storage
   ├── Attribute: Processor
   │
   ▼
ITEM
   │
   ├── RAM = 16GB
   ├── Storage = 512GB
   └── Processor = Intel i7
```

This feature will be considered a higher-level requirement if time permits.

---

# 11. Barcode Design

The barcode itself will represent a unique inventory identifier rather than storing the complete item information.

For example:

```text
Barcode
   ↓
INV-000123
```

The database will then associate this identifier with the relevant item.

This approach means that information about an item can be changed without requiring the barcode to be regenerated.

For example, if:

```text
Location:
Computer Lab 2
```

changes to:

```text
Location:
Computer Lab 3
```

the item's barcode remains unchanged.

The initial implementation will target a standard linear barcode format such as Code 128. Additional barcode formats may be investigated as an extension.

---

# 12. Administrative Dashboard

The administrative dashboard will provide an overview of the inventory system.

A possible dashboard design is:

```text
-------------------------------------------------------
                    INVENTORY DASHBOARD
-------------------------------------------------------

Total Items       Available       Checked Out
    247              215              32

Low Stock           Out of Stock
    8                   3

-------------------------------------------------------

Recent Activity

15:32  Sarah checked out INV-000123
15:28  John returned INV-000052
15:17  Admin updated INV-000091
15:03  Admin created INV-000201

-------------------------------------------------------

Low Stock Items

Dell Laptop       2 remaining
USB-C Cable       3 remaining
Camera            1 remaining
-------------------------------------------------------
```

This will provide administrators with an immediate overview of the current state of the inventory.

---

# 13. Technology Stack

The exact technology stack will depend on the team's familiarity with available technologies, but the proposed stack is:

### Frontend

**React + TypeScript**

React will be used to create the web application's user interface, while TypeScript will provide static typing and help maintain the codebase as the application grows.

### Backend

**Node.js + Express + TypeScript**

The backend will expose a REST API responsible for authentication, inventory operations, stock management, and transaction processing.

### Database

**PostgreSQL**

PostgreSQL will provide a relational database suitable for modelling users, inventory, transactions, categories, locations, and other related entities.

### Barcode Recognition

A browser-compatible barcode decoding library will be investigated and integrated with the webcam interface.

### Barcode Generation

A suitable barcode-generation library will be used to create supported barcode formats from the system's inventory identifiers.

### Development Tools

Potential tools include:

* Git
* GitHub
* Visual Studio Code
* Postman/Insomnia
* Browser developer tools
* Automated testing frameworks

The final selection of libraries will be documented and justified during implementation.

---

# 14. System Architecture

The application will follow a client-server architecture.

```text
┌──────────────────────────────────────────┐
│                FRONTEND                  │
│                                          │
│ React / TypeScript                       │
│                                          │
│ • Dashboard                              │
│ • Inventory                              │
│ • Scanner                                │
│ • Barcode Generator                      │
│ • Authentication                         │
└──────────────────┬───────────────────────┘
                   │
                   │ REST API
                   │
┌──────────────────▼───────────────────────┐
│                 BACKEND                  │
│                                          │
│ Node.js / Express / TypeScript           │
│                                          │
│ • Authentication                         │
│ • Authorisation                          │
│ • Inventory Service                      │
│ • Stock Service                          │
│ • Transaction Service                    │
│ • User Management                        │
└──────────────────┬───────────────────────┘
                   │
                   │ SQL
                   │
┌──────────────────▼───────────────────────┐
│               PostgreSQL                 │
│                                          │
│ • Users                                  │
│ • Items                                  │
│ • Categories                             │
│ • Locations                              │
│ • Transactions                            │
│ • Checkouts                              │
└──────────────────────────────────────────┘
```

---

# 15. Security Considerations

Security will be considered throughout the design rather than added at the end of development.

The system will implement:

* Password hashing
* Authenticated API endpoints
* Role-based authorisation
* Server-side validation
* Input sanitisation
* Protection against unauthorised inventory modification
* Secure session/token management
* Appropriate database constraints

For example, a standard user should not be able to send a direct API request to an administrative endpoint and modify inventory.

Therefore, security will be enforced on the backend rather than relying solely on hiding functionality in the frontend.

---

# 16. Testing Strategy

Testing will be incorporated throughout development.

## Unit Testing

Individual functions and services will be tested in isolation.

Examples include:

* Stock calculation
* Barcode validation
* Authentication functions
* Permission checks
* Transaction creation

## Integration Testing

Integration tests will verify interactions between components.

For example:

```text
API request
    ↓
Inventory service
    ↓
Database
    ↓
Updated inventory
```

## System Testing

The complete application will be tested as a user would interact with it.

For example:

```text
Create item
    ↓
Generate barcode
    ↓
Print/display barcode
    ↓
Scan barcode
    ↓
Retrieve item
    ↓
Check out item
    ↓
Verify stock decreases
    ↓
Return item
    ↓
Verify stock increases
```

## Barcode Testing

The scanning functionality will be evaluated under different conditions, such as:

* Different distances from webcam
* Different lighting conditions
* Different barcode sizes
* Different screen/display orientations
* Printed versus digital barcodes
* Different supported barcode formats

This will allow the reliability of the barcode component to be measured rather than simply demonstrating that it works once.

---

# 17. Evaluation

The final system will be evaluated against the original objectives and requirements.

Potential evaluation criteria include:

### Barcode Recognition

* Percentage of successful scans
* Average time to recognise a barcode
* Performance under different lighting conditions

### System Performance

* API response times
* Database query performance
* Application responsiveness

### Usability

User testing could be conducted to determine:

* How easily a new user can complete a check-out
* How quickly an item can be located
* Whether the scanning workflow is intuitive
* Whether administrators can effectively manage inventory

### Reliability

Tests will verify that:

* Stock quantities remain accurate
* Transactions are not lost
* Invalid check-outs are prevented
* Returns correctly update stock
* Concurrent operations do not result in inconsistent inventory

---

# 18. Project Scope

To ensure that the project remains achievable within the available development period, the project will be divided into a core scope and optional extensions.

## Core Scope

The minimum completed system will include:

* User authentication
* Administrator and standard-user roles
* Inventory management
* Barcode generation
* Webcam barcode scanning
* Inventory lookup
* Stock management
* Check-out functionality
* Return functionality
* Transaction history
* Search/filtering
* Administrative dashboard
* Relational database
* Automated testing

## Extended Scope

Subject to development time, the following features may be implemented:

* Custom item attributes
* Item locations
* Low-stock notifications
* Overdue item detection
* Analytics
* CSV export
* Printable barcode labels
* Multiple barcode formats
* Audit logging
* Inventory import
* Progressive Web App/mobile optimisation

The extended features will not be allowed to compromise completion of the core system.

---

# 19. Project Risks

| Risk                                               | Impact | Likelihood | Mitigation                                                           |
| -------------------------------------------------- | ------ | ---------- | -------------------------------------------------------------------- |
| Barcode recognition is unreliable                  | High   | Medium     | Test different libraries and scanning conditions early               |
| Project scope becomes too large                    | High   | High       | Define MVP and prioritise core requirements                          |
| Database design becomes overly complex             | Medium | Medium     | Develop ER diagram before implementation                             |
| Team members work in isolation                     | Medium | Medium     | Use Git, code reviews and regular integration                        |
| Authentication introduces security issues          | High   | Low/Medium | Use established authentication libraries and security practices      |
| Webcam permissions differ between browsers         | Medium | Medium     | Test on multiple browsers                                            |
| Integration between frontend/backend causes delays | Medium | Medium     | Define API contract early                                            |
| Insufficient time for testing                      | High   | Medium     | Implement tests throughout development                               |
| Hardware availability affects testing              | Medium | Low        | Support both webcam and manually entered barcode IDs for development |

---

# 20. Proposed Division of Work

The project will be developed collaboratively, with each team member taking primary responsibility for different areas.

## Team Member 1 — Frontend and Barcode Systems

Primary responsibilities:

* React frontend
* User interface
* Webcam integration
* Barcode scanning
* Barcode generation
* Inventory interface
* Dashboard interface
* Frontend testing

## Team Member 2 — Backend and Database Systems

Primary responsibilities:

* REST API
* PostgreSQL database
* Authentication
* Authorisation
* Inventory business logic
* Stock management
* Transactions
* User management
* Backend testing

## Shared Responsibilities

Both members will contribute to:

* System architecture
* Requirements analysis
* Database design
* API design
* Integration
* System testing
* Documentation
* Evaluation
* Final presentation

Both team members will also use version control and conduct code reviews to ensure that both have familiarity with the overall system.

---

# 21. Proposed Development Schedule

The following schedule is intended as an example and can be adapted to the actual academic calendar.

### Weeks 1–2 — Requirements and Research

* Define requirements
* Investigate barcode technologies
* Research existing inventory systems
* Select technology stack
* Identify risks
* Create initial system architecture

### Weeks 3–4 — Design

* Database design
* ER diagram
* API design
* UI wireframes
* Authentication design
* Project repository and development environment

### Weeks 5–6 — Barcode Proof of Concept

* Implement barcode generation
* Implement webcam access
* Implement barcode decoding
* Test supported barcode formats
* Establish barcode → identifier workflow

### Weeks 7–8 — Backend and Database

* Implement PostgreSQL database
* Create database models
* Implement REST API
* Implement inventory CRUD operations
* Implement authentication

### Weeks 9–10 — Inventory and Transactions

* Implement stock management
* Implement check-out
* Implement return
* Implement transaction history
* Connect frontend to backend

### Weeks 11–12 — Administration

* Implement administrator dashboard
* User management
* Category management
* Inventory search/filtering
* Low-stock detection

### Weeks 13–14 — Testing and Improvements

* Unit tests
* Integration tests
* System testing
* Barcode reliability testing
* User testing
* Security testing
* Bug fixing

### Weeks 15–16 — Finalisation

* Performance improvements
* UI improvements
* Documentation
* Final evaluation
* Project demonstration
* Presentation preparation

---

# 22. Expected Deliverables

At the completion of the project, the following deliverables are expected:

### Software

A functional web-based inventory management application incorporating:

* Barcode generation
* Webcam barcode scanning
* Inventory management
* Stock tracking
* Check-out/return functionality
* User authentication
* Administrative dashboard
* Transaction history

### Database

A fully implemented relational database containing the required inventory, user, and transaction information.

### Documentation

Documentation will include:

* Requirements specification
* System architecture
* Database/ER diagram
* API documentation
* Testing documentation
* Security considerations
* Evaluation
* User guide

### Source Code

The complete source code will be maintained using a version-control system.

### Final Demonstration

A demonstration will show the complete workflow from barcode creation to scanning, inventory lookup, check-out, return, and transaction history.

---

# 23. Expected Outcome

The expected outcome is a functional and tested web-based inventory management system that demonstrates how webcam-based barcode recognition can be integrated into a practical inventory tracking application.

A successful implementation will allow an administrator to create an inventory item, automatically generate a unique barcode, and associate information with that item. A user will then be able to scan the barcode using a webcam and immediately retrieve the associated inventory record.

The user will be able to check the item out or return it, with the system automatically updating the available stock and recording the transaction.

Administrators will have access to a dashboard through which they can manage inventory, users, categories, and transactions.

The project will demonstrate the application of multiple computer science concepts in a single integrated system, particularly database design, web development, computer vision/barcode recognition, API design, authentication, software architecture, and software testing.

---

# 24. Conclusion

This project proposes the development of a web-based barcode inventory management and tracking system designed to provide a simple and efficient method of managing physical inventory.

The use of webcam-based barcode scanning will provide a convenient mechanism for identifying inventory without requiring specialised scanning hardware. By combining this functionality with a relational database and transaction-management system, the proposed application will provide more functionality than a standalone barcode scanner.

The project is sufficiently complex to demonstrate a broad range of Computer Science skills while remaining achievable for a two-person development team. The core system provides a clear minimum viable product, while additional functionality such as dynamic attributes, analytics, notifications, audit logging, and advanced reporting can be developed if sufficient time is available.

The final system will provide a practical demonstration of how barcode technology, database systems, web technologies, and secure software engineering practices can be combined to solve a real-world inventory management problem.
