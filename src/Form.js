import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [Image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, description, price };
    axios.post('http://localhost:4000/items', item)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  }

  return (
    <div className="centered">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Image:</label>
        <input type="file" className="form-control" value={Image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">List Item</button>
    </form>
    </div>
  );
};

export default Form;