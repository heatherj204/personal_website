import ReactMarkdown from "react-markdown";
import projectMarkdown from "./project.md?raw";

export default function Project() {
    return (
        <main>
            <ReactMarkdown>
                {projectMarkdown}
            </ReactMarkdown>
        </main>
    );
}