import React from "react";
import PropTypes from "prop-types";

const UserCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
    </div>
  );
};
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

UserCard.defaultProps = {
  name: "UserName",
  age: 18,
};

export default UserCard;
