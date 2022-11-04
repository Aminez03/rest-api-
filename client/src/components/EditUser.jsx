import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';
import { editUser, getUsers } from '../redux/action';
const EditUser = ({user}) => {
        const [fullName, setFullName] = useState(user.fullName);
        const [email, setEmail] = useState(user.email);
        const [number, setNumber] = useState(user.number);
        const dispatch = useDispatch()
        let handelSubmit=(e)=>{
            e.preventDefault()
            const edit={fullName,email,number,_id:user._id}
            dispatch(editUser(edit))
            dispatch(getUsers())
            closeModal()
        }
        const customStyles = {
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
          };Modal.setAppElement('#root');
          const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
    
    
      function closeModal() {
        setIsOpen(false);
      }
    
  return (

        <div>
            <button id='mybutton' onClick={openModal}> EDIT</button>
      <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

          <form onSubmit={handelSubmit}>
              <label > fullName</label>
              <input type="text" onChange={e=>setFullName(e.target.value)} value={fullName} />
              <label > email</label>
              <input type="text"onChange={e=>setEmail(e.target.value)} value={email} />
              <label > number</label>
              <input type="text" onChange={e=>setNumber(e.target.value)}  value={number}/>
              <button type='submit'>add</button>
              <button onClick={closeModal}>Cancel</button>
          </form>
      </Modal>
        </div>
  )
}
export default EditUser






