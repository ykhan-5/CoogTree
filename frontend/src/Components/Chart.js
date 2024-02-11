import React from "react";

class HTMLFileRenderer extends React.Component {
  render() {
    // HTML content to be rendered
    const htmlContent = `
    <body>
    <script type="module">
      import define from "./mapindex.js";
      import { Runtime, Library, Inspector } from "./MapData/mapFiles/runtime.js";
  
      const runtime = new Runtime();
      const main = runtime.module(define, Inspector.into(document.body));
    </script>
  </body>
  
    `;

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }
}

export default HTMLFileRenderer;
