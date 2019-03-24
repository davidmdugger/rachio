import React, { Component } from "react";

class App extends Component {
  state = {
    tacos: 10,
    users: []
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(res => res.json())
      .then(users =>
        this.setState({
          users
        })
      )
      .catch(err => console.log(err));
  }

  usersDisplay = () => {
    const { users } = this.state;

    return users.map(user => (
      <div key={user.id}>
        <h1>{user.name}</h1>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h1>App Componenent, yo...!</h1>
        <h5>{this.state.tacos}</h5>
        <div className="users-container">{this.usersDisplay()}</div>
      </div>
    );
  }
}

export default App;
