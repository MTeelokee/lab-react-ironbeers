import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RandomBeer() {

  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDataBeer = async () => {
    try {
      const callData = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(callData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataBeer();
  }, []);

  return (
    <>
      {loading ? (
        <div >
          <img src={beer.image_url} width={"80px"} alt={beer.name} />

          <h2>{beer.name}</h2>

          <p style={{ color: "grey" }}>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.food_pairing.contributed_by}</p>
        </div>
      ) : (
        <>
          <p> Loading </p>
        </>
      )}
    </>
  );
}
