import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="title"> 
        Title of jsx component
    </h1>
);

// Component composition
const Heading =  () => (
    <div id="container">
        <Title />
        <h1>Heading of jsx component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
