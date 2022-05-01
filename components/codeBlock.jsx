import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ children }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={coldarkDark}
      showLineNumbers={true}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
