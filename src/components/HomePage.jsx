import React from "react";
import { NavLink } from "react-router-dom";
import beersImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="HomePage">
      <h1>Welcome to homepage</h1>
      <NavLink to="/beers">
        <img src={beersImage} alt="Beers" />
        <h2>All Beers</h2>
        <p>
          This is All Beers description. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit
        </p>
      </NavLink>

      <NavLink to="/random-beer">
        <img src={randomBeerImage} alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>
          This is Random Beer description. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>
      </NavLink>

      <NavLink to="/new-beer">
        <img src={newBeerImage} alt="New Beer" />
        <h2>New Beer</h2>
        <p>
          This is New Beer description.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit
        </p>
      </NavLink>
    </div>
  );
}

export default HomePage;
