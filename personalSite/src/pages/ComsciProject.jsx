import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import projectMarkdown from "./project.md?raw";

export default function Project() {
    return (
        <main>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {projectMarkdown}
            </ReactMarkdown>
        </main>
    );
}