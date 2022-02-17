import React from "react";
import Image from "./Image";
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.user;

    return (
      <div>
        <Image source={ avatar } alternativeText={ name }/>
        <p>Name: { name }</p>
        <p>Email: { email }</p>
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })
}

export default UserProfile;
