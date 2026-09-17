import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import handgesture from "./handgestureProject.md?raw";

export default function Project() {
    return (
        <main>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {handgesture}
            </ReactMarkdown>
        </main>
    );
}