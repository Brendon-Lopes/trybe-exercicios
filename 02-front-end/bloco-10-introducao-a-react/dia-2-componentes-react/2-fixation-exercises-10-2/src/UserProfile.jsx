import React from "react";
import Image from "./Image";

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Image source={this.props.user.avatar} alternativeText={this.props.user.name}/>
        <p>Name: {this.props.user.name}</p>
        <p>Email: {this.props.user.email}</p>
      </div>
    )
  }
}

export default UserProfile;
