import axios from "axios";
import {  ADD, GET,DELETE, EDITE, GETUSER } from "./actionTypes";



export const getUsers = () => async (dispatch) => {
    try {
      let res = await axios.get("/user/get");
      dispatch({
        type: GET,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addUser=(fullName,email,number)=>async(dispatch)=>{
    try {
        let newUser={fullName,email,number}
        let res = await axios.post("/user/post",newUser);
        dispatch({
          type: ADD,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
}


  export const deleteUser = (_id) => async (dispatch) => {
    try {
      let res = await axios.delete(`/user/delete/${_id}`);
      dispatch({
        type: DELETE,
        payload: res.data,
      });
    } catch (error) {
        console.log(error);
    }
  };

  export const editUser = (editedUser) => async (dispatch) => {
    try {
      let res = await axios.put(`/user/put/${editedUser._id}`,editedUser);
      dispatch({
        type: EDITE,
        payload: res.data,
      });
    } catch (error) {
        console.log(error);
    }
  };