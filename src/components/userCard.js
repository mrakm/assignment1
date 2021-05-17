import React from 'react'

export default function UserCard(props) {
    return (
        <div className="user-card">
         <img
            
            src={props.avatarUrl}
            alt=""
          />
          <p className="name">{props.firstname + " " + props.lastname}</p>
          <p className="bidnumber">No. of biddings {props.numberofbid}</p>
        </div>
    )
}
