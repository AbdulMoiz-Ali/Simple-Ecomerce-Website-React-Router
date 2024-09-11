import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {data ? (
            <div className="card mb-3">
              <img
                src={data.images[0]}
                className="card-img-top"
                alt={data.title}
              />
              <div className="card-body">
                <h1 className="card-title">{data.title}</h1>
                <p className="card-text">{data.description}</p>
                <p className="card-text">Price: {data.price}</p>
                <button className="btn btn-primary">Buy</button>
                {/* Add more properties as needed */}
              </div>
            </div>
          ) : (
            <h1 className="text-center">Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
