import NavBar from './NavBar/NavBar';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import AddTodos from './Todos/AddTodos';
import EditTodo from './Todos/EditTodo';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path="/addtask" element={<AddTodos/>}/>
      <Route exact path='editTodo/:id' element={<EditTodo/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
