import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      //count: 0,
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log("Child Constructor");
  }
  async componentDidMount() {
    console.log("Child Mounted");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("child did update");
  }
  componentWillUnmount() {
    console.log("Child will unmount");
  }
  render() {
    console.log("Child Render");
    // const { name, location } = this.props;

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button> */}
        {/* <h3>Count:{this.state.count}</h3> */}
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@Akshaytwitter</h4>
      </div>
    );
  }
}

export default UserClass;
