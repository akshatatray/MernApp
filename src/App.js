import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import ExerciseList from './Components/ExerciseList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="App">
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id' exact component={EditExercise} />
        <Route path='/create' exact component={CreateExercise} />
        <Route path='/user' exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;