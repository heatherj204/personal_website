import ReactMarkdown from "react-markdown";
import handgesture from "./handgestureProject.md?raw";

export default function Project() {
    return (
        <main>
            <ReactMarkdown>
                {handgesture}
            </ReactMarkdown>
        </main>
    );
}