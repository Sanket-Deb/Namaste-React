import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("ParentConstructor");
  }

  componentDidMount() {
    //console.log("Parent Did Mount");
  }

  render() {
    //console.log("ParentRender");
    return (
      <div>
        <h1>About Class Compnent</h1>
        <h2>This is Sanket following the namaste react series</h2>

        <UserClass name={"First"} location={"Jaipur (Class)"} />
      </div>
    );
  }
}

export default About;
