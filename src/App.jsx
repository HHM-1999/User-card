import React from 'react'
import './App.css'
import UserCard from './Components/UserCard'

const App = () => {
  const userList = [
    { id:1, name: "Alex", age: 50 ,isOnline : true},
    { id:2, name: "Mickle", age: 10, isOnline: false},
    { id:3,  name: "Huma", age: 15 ,isOnline : false},
  ]
  return (
    <div className='container'>
      <div className='row'>
        {userList.map((user) => {
          return (
            <div className="col-lg-4 col-sm-12">
              <div className="team-area pb-3 mt-5">
                <UserCard key={user.id} name={user.name} age={user.age} isOnline={user.isOnline}  />
              </div>
            </div>

          )
        }

        )}
      </div>
    </div>

  )
}

export default App
