import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const PrdList = (props) => {
  const [prds, setPrds] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/prds")
      .then((res) => {
        console.log(res);
        setPrds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/prds/${id}`)
      .then((res) => {
        console.log(res);
        const listWithoutDeleted = prds.filter((prd, idx) => {
          return prd._id !== res.data._id; //or id
        });
        setPrds(listWithoutDeleted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (prds === null) {
    return <p className="mt-5">Loading...</p>;
  }

  return (
    <div className="mt-5 mb-5 mx-auto w-50">
      <h3>All Products: </h3>
      {/* <form onSubmit={handleDelete}>   --vs. onClick - which on when */}
      {prds.map((prd, idx) => {
        return (
          <div key={prd._id}>
            <h5 className="mt-5">
              <Link to={`/prds/${prd._id}`}>{prd.title}</Link>
            </h5>
            <button
              onClick={(e) => {
                handleDelete(prd._id);
              }}
              type="submit"
              className="btn btn-outline-primary"
            >
              Delete
            </button>
          </div>
        );
      })}
      {/* </form> */}
    </div>
  );
};

export default PrdList;
