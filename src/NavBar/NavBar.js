import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
return(
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
       <div className="container-fluid">
         <a className="navbar-brand" href="/">Full Stack Todo Application</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="btn btn-outline-light" to="/addtask">Add a task</Link>
        </div>
      </nav>
 </div>
)
}