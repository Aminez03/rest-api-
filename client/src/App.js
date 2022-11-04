import './App.css';
import UserList from "./components/UserList"
import AddNewUser from './components/AddNewUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App" >
        <Router>
          <Routes>
        <Route path="/"
          element={<div>
                  <AddNewUser/>
                  <UserList/></div>}></Route>
      
        <Route path="/user/:id" element={<Details/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
