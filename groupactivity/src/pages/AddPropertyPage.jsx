import Navbar from "../components/Navbar";
import React, { useState } from 'react';
import './addProperty.css'
import house2 from "../assets/New York House.png"

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to backend)
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      description: '',
      location: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      image: null,
    });
  };

  return (
    <div>
       <Navbar />
      <div className="container py-5">
        <h2>Add A New Property</h2>
        <p>Add a new property to YourHome, remember to add all the necessary information.</p>
    <div className="row">
      <div className="col-6">
      <form onSubmit={handleSubmit} className="form py-3">
          <ul>
            <li>
              <label>
                Name: 
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
              </label>
            </li>
            <li>
              <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange} required/>
              </label>
            </li>
            <li>
              <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} required/>
              </label>
            </li>
            <li>
              <label>
                Price:
                <input type="text" name="price" value={formData.price} onChange={handleChange} required/>
              </label>
            </li>
            <li>
              <label>
                Bedrooms:
                <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required/>
              </label>
            </li>
            <li>
              <label>
                Bathrooms:
                <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required/>
              </label>
            </li>
            <li>
              <label>
                Upload Image:
                <input type="file" accept="image/*" onChange={handleImageChange} required/>
              </label>
            </li>
          
          </ul>
          <button type="submit" className="btn btn-primary btn-lg px-4 me-md-2">
              Add Property
          </button>
        </form>
      </div>
      <div className="col-6">
            <img
              src={house2}
              alt="house"
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
            />
      </div>
      </div>
       
      </div>
    </div>
  );
};

export default AddPropertyForm;

