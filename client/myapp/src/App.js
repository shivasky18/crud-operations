import React, { useState } from "react";
import "./App.css";
import Axios from 'axios';

function App() {
  const [sname, setStudentName] = useState("");
  const [tech, setTechnology] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const submitReview = () => {
    Axios.post('http://localhost:9000/connections', {
      name: sname,
      tech: tech,
      sub: status
    }).then(() => {
      alert("success");
    });
  };

  const retrieveData = () => {
    Axios.get('mongodb://localhost:27017/student')
      .then((response) => {
        setData(response.data);
      });
  };

  const updateData = () => {
    Axios.patch(`mongodb://localhost:27017/student/${id}`, {
      sub: status
    }).then(() => {
      alert("Update success");
    });
  };

  const deleteData = () => {
    Axios.delete(`mongodb://localhost:27017/student/${id}`)
      .then(() => {
        alert("Delete success");
      });
  };

  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label><b>Student Name</b></label>
        <input
          type="text"
          name="sname"
          onChange={(e) => { setStudentName(e.target.value); }} required />
        <label><b>Technology</b></label>
        <input
          type="text"
          name="tech"
          onChange={(e) => { setTechnology(e.target.value); }} required />
        <label><b>Status</b></label>
        <input
          type="text"
          name="status"
          onChange={(e) => { setStatus(e.target.value); }} required />
        <button onClick={submitReview}><b>Submit</b></button>
      </div>
      <div className="actions">
        <label><b>ID (for update/delete)</b></label>
        <input
          type="text"
          name="id"
          onChange={(e) => { setId(e.target.value); }} required />
        <button onClick={retrieveData}><b>Retrieve</b></button>
        <button onClick={updateData}><b>Update</b></button>
        <button onClick={deleteData}><b>Delete</b></button>
      </div>
      <div className="data-display">
        {data && data.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Tech: {item.tech}</p>
            <p>Sub: {item.sub.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

