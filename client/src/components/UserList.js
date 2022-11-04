import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/action'
import UserCard from './UserCard'
import Spinner from 'react-bootstrap/Spinner';


const UserList = () => {

    const {users,loading} = useSelector(state => state)
    console.log(users)
    const dispatch = useDispatch()
    
    
    useEffect(() => {
      dispatch(getUsers())
    }, [])
   
  return (
    <div className='list'>
        {
            loading?<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>:
            React.Children.toArray(users.map(el=><UserCard user={el}/>))
        }
    </div>
  )
}

export default UserList