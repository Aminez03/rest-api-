import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';
import { addUser, getUsers } from '../redux/action';
const AddNewUser = () => {

        const [fullName, setFullName] = useState("");
        const [email, setEmail] = useState("");
        const [number, setNumber] = useState("");
        const dispatch = useDispatch()
        let handelSubmit=(e)=>{
            e.preventDefault()
            dispatch(addUser(fullName,email,number))
            dispatch(getUsers())
            closeModal()
            setFullName('')
            setEmail('')
            setNumber('')

       
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
            <button id='add'onClick={openModal}> Add</button>
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
              <button type={'submit'}>Confirme</button>
              <button onClick={closeModal}>Cancel</button>
          </form>
      </Modal>
        </div>
  )
}
export default AddNewUser





