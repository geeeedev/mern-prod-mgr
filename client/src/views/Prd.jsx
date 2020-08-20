import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

// const City = ({ id }) => {
// const {id} = props;
const Prd = (props) => {
  const [prd, setPrd] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/prds/${props.id}`)
      .then((res) => {
        console.log(res);
        setPrd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (prd === null) {
    return <p className="mt-5">Loading...</p>;
  }

  return (
    <div className="mt-5 mx-auto w-50">
      <h3>Product: </h3>
      <h5 className="mt-3">
        {/* <Link to={`/prds/${prd._id}`}> */}
        {prd.title}
        {/* </Link> */}
      </h5>
      <h6>Price: {prd.price}</h6>
      <h6>Description: {prd.description}</h6>
      <div className="mt-5">
        <Link to={`/prds/${prd._id}/Edit`}>Edit</Link>
      </div>
    </div>
  );
};

export default Prd;
