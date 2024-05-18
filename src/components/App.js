import Editor from "./Editor";
import React, { useState } from "react";
function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  return (
    <>
      <div className="pane top-panel">
        <Editor
          language="xml"
          displayName="HTML"
          value={ html}
          onChange={setHtml} />
        <Editor
          language="css"
          displayName="CSS"
          value={ css}
          onChange={setCss} />
        <Editor
          language="jacascript"
          displayName="JS"
          value={ js}
          onChange={setJs} />
      </div>
      <div className="pane">
        <iframe title="output"
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
