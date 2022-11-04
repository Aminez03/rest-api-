import React from 'react'
import { useSelector } from 'react-redux'
import  { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/esm/Spinner'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'







const Details = () => {
    const {id}=useParams();
    const {users,loading} = useSelector(state => state)
    console.log(users)
    
    const user=users.find(el=>el._id==id);
    useEffect(()=>{
console.log(user)
    },[id])

   
  return (
    <div>{loading?<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner>:
    <div>
 <br/>
      <Link to="/">
       <button id='mybutton'>home</button>
       </Link>
       <br/>
       <br/>
      
      
      <Card className="carddetails" style={{ width: '30rem' }}>
    
      <Card.Header>{user._id}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{user.fullName}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.number}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  
  
  
  
  }
  </div>
  )
}

export default Details