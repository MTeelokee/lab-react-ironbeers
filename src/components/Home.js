import React from "react";
import Beers from "../assets/beers.png";
import newBeerPic from "../assets/new-beer.png";
import randombeer from "../assets/random-beer.png";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <NavLink className="homeSections" to="/navbar/beer">
        {" "}
        <img src={Beers} alt="" />
        <div className="descriptionHome">
          <h3>All Beers</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus aspernatur voluptate ad laudantium eos quam recusandae
            necessitatibus iusto ipsum nesciunt odio consequuntur, ullam quos
            aliquam temporibus ipsam alias blanditiis nobis!
          </p>
        </div>
      </NavLink>
      <NavLink className="homeSections" to="/navbar/random-beer" >
        <img src={randombeer} alt="" />
        <div className="descriptionHome" style={{textDecoration: "none"}}>
          <h3>Random Beer</h3>
          <p style={{textDecoration: "none"}} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            quod dolorem accusamus laudantium! Voluptas recusandae hic minima
            quaerat deserunt impedit odio, voluptatem fugiat, eaque tenetur
            veritatis consequatur quidem omnis. Qui!
          </p>
        </div>{" "}
      </NavLink>
      <NavLink className="homeSections" to="/navbar/new-beer">
        <img src={newBeerPic} alt="" />
        <div className="descriptionHome">
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            placeat, illum excepturi autem eveniet cum? Enim, nemo. Inventore ad
            iste saepe et, quo fuga, pariatur, tempore non eius iure quia!
          </p>
        </div>
      </NavLink>
    </>
  );
}
