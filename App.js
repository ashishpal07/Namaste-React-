import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const child = React.createElement("div", {id: "child"}, [heading1, heading2])
const parent = React.createElement("div", {id: "parent"}, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
