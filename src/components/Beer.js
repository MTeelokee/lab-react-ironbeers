import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Beer() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const callData = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(callData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        beers.map((e) => (
          <div key={e._id}>
          
            <img src={e.image_url} width={"80px"} alt={e.name} />
            <NavLink to={`/navbar/beer/${e._id}`}>
              {" "}
              <h2>{e.name}</h2>
            </NavLink>

            <p style={{ color: "grey" }}>{e.tagline}</p>
            <p>{e.contributed_by}</p>
          </div>
        ))
      ) : (
        <>
          <p> Loading </p>
        </>
      )}
    </>
  );
}
