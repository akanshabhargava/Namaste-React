import React from "react";
import User from "../components/User";
import UserClass from "../components/UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Mounted");
  }
  componentDidUpdate() {
    console.log("hi");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste REact Web Series</h2>
        <User name="Akashay (functional)" />
        {/* <UserClass name="First" location="delhi" />
        <UserClass name="Second" location="UK" /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste REact Web Series</h2>
//       {/* <User name="Akashay (functional)" /> */}
//       <UserClass name="Akashay (class)" location="delhi" />
//     </div>
//   );
// };

export default About;

/**
 * Life cycle :
 * -Parent Cosntructor
 *  -Parent REnder
 *   -(USerClass(Child(Akshay)) life cycle method will be called)
 *      -Child Constructor
 *      -Child Render
 *      -Child Component Did Mount
 *  -(UserClass(Child(EloMusk))) life cycle method will be called
 *     -Child Constructor
 *      -Child Render
 *      -Child Component Did Mount
 *
 *  Parent Component Did Mount Will be called
 *  ****** /the sequence is not right ***/
