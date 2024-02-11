// import React, { useEffect } from "react";

// const MapComponent = () => {
//   useEffect(() => {
//     // Import styles
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.type = "text/css";
//     link.href = "./mapFiles/inspector.css";
//     document.head.appendChild(link);

//     // Import JavaScript modules
//     import("./mapFiles/mapindex.js").then(({ default: define }) => {
//       import("./mapFiles/runtime.js").then(({ Runtime, Inspector }) => {
//         const runtime = new Runtime();
//         const main = runtime.module(define, Inspector.into(document.body));
//       });
//     });

//     // Cleanup function
//     return () => {
//       document.head.removeChild(link);
//     };
//   }, []);

//   return <div id="map-container" />;
// };

// export default MapComponent;
