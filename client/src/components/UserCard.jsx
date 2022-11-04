import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteUser,getUsers} from '../redux/action';
import EditUser from './EditUser';
import { Link } from 'react-router-dom'



const UserCard = ({user}) => {
    const dispatch=useDispatch()
  return (
    <div classname='card'>
         <Card>
      <Card.Header>{user.fullName}</Card.Header>
      <Card.Body>
        <Card.Title>{user.email}</Card.Title>
        <Card.Text>
          {user.number}
        </Card.Text>
        <button id='mybutton'onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUsers())}}>Delete</button>
        <Link to={`user/${user._id}`}>
       <button id='mybutton'>info</button>
       </Link>

        <EditUser  user={user}/>

      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
