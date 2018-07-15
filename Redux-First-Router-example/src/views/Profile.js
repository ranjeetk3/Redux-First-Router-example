import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    username: state.location.payload.username,
    user: state.user
  }
}

function Profile({ username, user }) {
  return (
    <div>
      <h2>{username}'s profile</h2>
      <img src={user.avatar} style={{ width: '5rem', height: '5rem'}} />
    </div>
  )
}

export default connect(mapStateToProps)(Profile);