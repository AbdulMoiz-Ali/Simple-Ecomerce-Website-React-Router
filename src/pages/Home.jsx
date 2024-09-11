import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const singleUser = (item) => {
    navigate(`singleProduct/${item.id}`);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Hello Customer</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error: {error}</h1>
        ) : data ? (
          <div className="row">
            {data.products.map((item) => {
              return (
                <div key={item.id} className="col-md-4 col-lg-3 col-xl-2">
                  <div className="card m-3">
                    <img
                      src={item.thumbnail}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">{item.description}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => singleUser(item)}
                      >
                        Show more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </>
  );
};

export default Home;
