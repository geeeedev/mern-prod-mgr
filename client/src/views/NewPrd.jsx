import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const NewPrd = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPrd = {
      title: title,
      price,
      description: desc,
    };

    //posting to DB thru axios instead of setting Prd obj (non-DB)
    axios
      .post("http://localhost:8000/api/prds/new", newPrd)
      .then((res) => {
        console.log(`NewPrd Response: ,`, res); //check console log data
        navigate("/prds");
      })
      .catch((err) => {
        console.log(`NewPrd Err: `, err);
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-5 mx-auto w-50">
      <h4>Product Manager</h4>
      <div>
        <label className="mt-3">Title: </label>
        <input
          type="text"
          value={title}
          className="form-control"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        {errors.title ? (
          <span className="text-danger">{errors.title.message}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label className="mt-2">Price: </label>
        <input
          type="number"
          value={price}
          className="form-control"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div>
        {errors.price ? (
          <span className="text-danger">{errors.price.message}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label className="mt-2">Description: </label>
        <input
          type="text"
          value={desc}
          className="form-control"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <div>
        {errors.description ? (
          <span className="text-danger">{errors.description.message}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <button
          type="submit"
          className="mt-5 form-control btn btn-outline-dark"
        >
          Submit New Product
        </button>
      </div>
    </form>
  );
};

export default NewPrd;
