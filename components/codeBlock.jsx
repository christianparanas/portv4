import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ children }) {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
