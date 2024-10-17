/**
 * Lesson 9: Forms
 * To handle forms in React, we need to use state to store the form data, and event handlers to update the state when the form is changed or submitted.
 * In this lesson, we will create a contact form with various input types, including text, email, phone, select, checkbox, and radio.
 * We will also add validation (if time allows) to the form, and reset the form data when the form is submitted.
 */

import { useState } from "react";
import Button from "../components/Button/Button";

const ContactForm = () => {
  // Task 1 [x]: add state to store form data
  const [formData, setFormData] = useState({
    gender: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    favoriteColors: [],
    preferredContact: "",
    newName: "",
  });

  // Task 2 [x]: Add function to handle form changes
  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Task 3 [ ]: Add function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(formData);
  };

  // Task 4 [ ]: Add function to reset form data

  // console.log(name);

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Contact Form</legend>

        <div className="input-group">
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="name">First name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="name">New name:</label>
          <input
            type="text"
            name="newName"
            id="newName"
            value={formData.newName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="checkbox-group">
          <label>Favorite Colors:</label>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="color-red"
              name="favoriteColors"
              value="red"
            />
            <label htmlFor="color-red">Red</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="color-green"
              name="favoriteColors"
              value="green"
            />
            <label htmlFor="color-green">Green</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="color-blue"
              name="favoriteColors"
              value="blue"
            />
            <label htmlFor="color-blue">Blue</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="color-yellow"
              name="favoriteColors"
              value="yellow"
            />
            <label htmlFor="color-yellow">Yellow</label>
          </div>
        </div>

        <div className="radio-group">
          <label>Preferred Contact Method:</label>
          <div className="radio-wrapper">
            <input
              type="radio"
              id="contact-email"
              name="preferredContact"
              value="email"
            />
            <label htmlFor="contact-email">Email</label>
          </div>
          <div className="radio-wrapper">
            <input
              type="radio"
              id="contact-phone"
              name="preferredContact"
              value="phone"
            />
            <label htmlFor="contact-phone">Phone</label>
          </div>
        </div>

        <Button buttonType={"reset"}>Submit</Button>
        <button type="reset">Reset</button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
