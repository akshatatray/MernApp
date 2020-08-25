import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => (
     <tr>
       <td>{props.exercise.username}</td>
       <td>{props.exercise.description}</td>
       <td>{props.exercise.duration}</td>
       <td>{props.exercise.date.substring(0,10)}</td>
       <td>
         <Link to={"/edit/"+props.exercise._id}>edit</Link> | <p onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</p>
       </td>
     </tr>
)

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteExercise = (id) => {
     axios.delete('http://localhost:5000/exercises/'+id)
     .then(response => { console.log(response.data)});
    setExercises(exercises.filter((el) => el._id !== id));
  };

  const exerciseList = () => {
       return exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id}/>
       })
  }

  return (
    <div>
      <h3>Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ exerciseList() }</tbody>
      </table>
    </div>
  );
};

export default ExerciseList;