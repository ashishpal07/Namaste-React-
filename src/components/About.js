import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        {/* <User name={"Ashish Pal"} location={"Mumbai"} contact={"8779041055"} /> */}
        <UserClass
          name={"Ashish Pal"}
          location={"Mumbai"}
          contact={"8779041055"}
        />
      </div>
    );
  }
}

export default About;
