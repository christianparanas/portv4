import { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


const fetchURLContent = async (url) => {
    const res = await fetch(`${url}`)
    const data = await res.json()

    return data.files['app.html'].content
  }

export default function Code({ props }) {
  const [code, setCode] = useState("")


  useEffect(() => {
    fetchURLContent(props)
    .then((res) => {
      setCode(res)
    })

  }, [])

  return (
    <SyntaxHighlighter language="javascript" style={solarizedDark}>
      {code}
    </SyntaxHighlighter>
  );
}