import React, { useEffect, useReducer, useState } from "react";
import axios from 'axios'
import { Checkbox } from 'pretty-checkbox-react';
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const[Todos , setTodos] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        loadTodos();
    },[]);

    const loadTodos=async()=>{
        const result =await axios.get("http://localhost:8080/todos");
        setTodos(result.data);
    }

    const deleteTodo=async(id)=>{
      await axios.delete(`http://localhost:8080/todos/${id}`);
      loadTodos();
    }
    const updateTodo=async(id)=>{
      await axios.put(`http://localhost:8080/todos/mark/${id}`);
      loadTodos();
    }
    const mystyle = {
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      color:"green"

    };
    const table1 = {
      marginTop :"20px"
    };
    const stl = {
      borderBottom : "2px solid",
    };
  return (
    <div className="container" >
      <div className="py-4">
        <table style={table1} className="table table-striped shadow bg-light">
          <thead style={stl}>
            <tr>
              <th scope="col" className="text-info">S.No</th>
              <th scope="col" className="text-primary">Title</th>
              <th scope="col" className="text-secondary">Description</th>
              <th scope="col" className="text-primary">Important⭐</th>
              <th scope="col" className="text-success">Status</th>
              <th scope="col" className="text-success">Action</th>
            </tr>
          </thead>
          <tbody>

          {
            Todos.map((todo,index)=>(
                <tr>
              <th scope="row" key={index} >{index+1}</th>
              <td>{todo.title}</td>
              <td className="text-secondary">{todo.description}</td>
              <td> <Checkbox checked={todo.important}></Checkbox></td>
              <td>{todo.completed ? <b style={{color: "green"}} className="font-weight-bold" >Completed😍</b> : <b style={{color: "#993333"}} className="font-weight-bold">Incomplete..</b> }</td>
              <td>
                <button className="btn shadow btn-success mx-2" onClick={()=>updateTodo(todo.id)}>
                completed
                </button>
                <Link className="btn btn-warning mx-1" to={`/editTodo/${todo.id}`}>Edit</Link>
                <button className="btn btn-danger mx-2" onClick={()=>deleteTodo(todo.id)} >Delete</button>
           </td>
            </tr>
            ))
          }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
