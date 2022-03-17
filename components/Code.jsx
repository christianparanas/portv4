import { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


const fetchURLContent = async (url) => {
    const res = await fetch(`${url}`)
    const data = await res.json()
    console.log(data)

    return data.files[Object.keys(data.files)[0]].content
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
    <SyntaxHighlighter language="javascript" wrapLines={true} style={solarizedDark}>
      {code}
    </SyntaxHighlighter>
  );
}