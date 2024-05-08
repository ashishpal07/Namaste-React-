/**
 * 
 * <div id="parent">
    <div id="child">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </div>
 * </div>
 * 
 * 
 * How to create above structure using pure react seen below
 ****/
 

const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const child = React.createElement("div", {id: "child"}, [heading1, heading2])
const parent = React.createElement("div", {id: "parent"}, child);

// const heading = React.createElement("h1", {id: "heading", abc: "xyz"}, "Hellow World From React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
