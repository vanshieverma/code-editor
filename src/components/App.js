import Editor from "./Editor";
import React, { useState, useEffect } from "react";
import useLocalSrorage from "../hooks/useLocalSrorage";
function App() {
  const [html, setHtml] = useLocalSrorage('html', '')
  const [css, setCss] = useLocalSrorage('css', '')
  const [js, setJs] = useLocalSrorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      < html > 
        <body>${html}</body> 
        <style>${css}</style> 
        <script>${js}</script>
      </html >
         `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])



  return (
    <>
      <div className="pane top-panel">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml} />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss} />
        <Editor
          language="jacascript"
          displayName="JS"
          value={js}
          onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}
export default App;
