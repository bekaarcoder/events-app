import React, { Component } from 'react'

class EventListAttendee extends Component {
  render() {
    const {photoUrl} = this.props
    return (
      <img src={photoUrl} alt='user' className="mr-3 rounded-circle" style={{width: '30px'}} />
    )
  }
}

export default EventListAttendee;
