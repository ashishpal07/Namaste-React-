import React from "react";

class UserClass extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			count2: 1,
		}
		console.log("child  constructor");
	}

	componentDidMount() {
		console.log("child compnent did mount");
	}

  render() {
		console.log("child render");
		const {count, count2} = this.state;
		const {name, location, contact} = this.props;
    return (
      <div>
				<p>count = {count} - count2 = {count2}</p>

				<button onClick={() => {
					this.setState({
						count: this.state.count+1,
					});
				}}> increase count </button>

				<button onClick={() => {
					this.setState({
						count: this.state.count-1,
					});
				}}> decrease count </button>

        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
};

export default UserClass;
