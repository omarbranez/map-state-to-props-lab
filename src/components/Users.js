import React, { Component } from 'react';
import { connect } from 'react-redux';

// add any needed imports here

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map((user, index) => 
            <li key={index}>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users)
