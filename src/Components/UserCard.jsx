import React from 'react'
const UserCard = (props) => {
  const username = {
    color: 'blue',
    fontWeight: 600
  };
  // console.log(props.isOnline);
  return (
    <>
      {props.age < 12 ? 
        <div className="Usercard">
          <div className="card-body">
            <p className="card-text-denied">Access Denied</p>
          </div>
        </div>
       :
        <div className="Usercard">
          <div className="card-body">
            <h3 style={username}>Name : {props.name}</h3>
            <p className="card-text">Age: {props.age}</p>
            <p>{props.isOnline ? '🟢 Online' : '🔴 Offline'}</p>
          </div>
        </div>
      }

    </>




  )
}
export default UserCard 