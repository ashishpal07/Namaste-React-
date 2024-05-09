import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./data";

const allRestaturants = restaurantList;

/***
 * Plan for how our food app page will look like High Level Design
 *
 * Header
 *  - Logo
 *  - NavItems
 *
 * Body
 *  - Search Bar
 *  - Restaturant Container
 *      - Restaurent card
 *        - Image
 *        - name of restaurent, start rating, cusine
 *
 * Footer
 *  - Copyrights
 *  - Contacts
 *  - Links
 *  - Address
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
          alt="App-Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaturantCard = (props) => {
  console.log("props = ", props);
  const { 
    name, 
    cloudinaryImageId, 
    costForTwo, 
    avgRating, 
    cuisines, 
    deliveryTime 
  } = props.restaurantData;

  return (
    <div className="restaurent-card">
      <img
        className="restaurent-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
          + cloudinaryImageId
        }
        alt="restaurent-image"
      />
      
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>Delivery Time {deliveryTime}</p>
      <span>
        <p><i class="fa-solid fa-star"></i>{avgRating}</p>
        <p>Cost For Two {costForTwo/100}</p>
      </span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {allRestaturants.map((restaurant) => {
          console.log(restaurant.data);
          
          return (<RestaturantCard key={restaurant.data.uuid} restaurantData={restaurant.data} />);
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/ashish-pal-5784a51a6" target="_blank">
        Ashish Pal
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
