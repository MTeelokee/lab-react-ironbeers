import React, { useState } from "react";
import axios from "axios";

export default function New_beer() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      {" "}
      <label>
        <p className="lab">Name</p>
        {<br></br>}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p className="lab">tagline</p>
        {<br></br>}
        <input
          type="text"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p className="lab">description</p>
        {<br></br>}
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p className="lab">first_brewed</p>
        {<br></br>}
        <input
          type="text"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p className="lab">brewers_tips</p>
        {<br></br>}
        <input
          type="text"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p className="lab">attenuation_level</p>
        {<br></br>}
        <input
          type="text"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p className="lab">contributed_by</p>
        {<br></br>}
        <input
          type="text"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p className="lab"></p>
        {<br></br>}
        <input
          type="submit"
          name="submit"
          value={formData.submit}
          onClick={handleSubmit}
          required
        />
      </label>
    </form>
  );
}
