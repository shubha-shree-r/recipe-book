import React, { useEffect, useState } from "react";
import "../css/home.css";
import choosingImage from "../assets/choosing.jfif";
import cookingImage from "../assets/cooking.jfif";
import deliveryImage from "../assets/delivery.jfif";
// import { Link } from 'react-router-dom'; // If using React Router
function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to make the menu visible after 2 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); // 2 seconds delay

    // Cleanup the timer if component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-6 menu-card p-0"
          style={{ animation: visible ? "slideUp 1s forwards" : "none" }}
        >
          <div className="menu-sub-div1">
            <div className="menu1-content">
              <h3>Learn All Types Of Cooking with FoodMakers.</h3>
              <p>
                FoodMakers offers a comprehensive culinary education, guiding
                aspiring chefs and home cooks alike through a diverse range of
                cooking techniques and cuisines. From the fundamentals of knife
                skills and basic sauces to the intricacies of international
                delicacies and advanced pastry making, FoodMakers provides a
                well-rounded learning experience. Whether you dream of opening
                your own restaurant or simply want to impress your friends and
                family with delicious meals, FoodMakers has something to offer
                every aspiring cook.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 menu-card p-0 mt-3"
          style={{ animation: visible ? "slideUp 1s forwards 0.5s" : "none" }}
        >
          <div className="menu-sub-div2">
            <div className="menu1-content">
              <h3>A Symphony of Flavors: Indian Spices.</h3>
              <p>
                Indian cuisine is renowned worldwide for its vibrant and complex
                flavors, a testament to the incredible diversity of spices that
                grace the Indian culinary landscape. From the fiery heat of
                chili peppers to the warm embrace of turmeric, these spices are
                more than just flavor enhancers; they are the soul of Indian
                cooking.This intricate tapestry of flavors is woven through
                generations, passed down through countless recipes and cherished
                traditions. Each spice, with its unique aroma and taste,
                contributes to the symphony of flavors that defines Indian
                cuisine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="underline-text p-4">
        <h1>Watch It Works</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4 footer-card">
            <div>
              <img src={choosingImage} alt="Description of the image" />
              <h4>Choose Your Meals</h4>
              <h6>20+ menus to choose from</h6>
            </div>
          </div>
          <div className="col-sm-4 footer-card mt-4">
            <div>
              <img src={deliveryImage} alt="Description of the image" />
              <h4>We Delivery It To You</h4>
              <h6>Choose your dates for delivery</h6>
            </div>
          </div>
          <div className="col-sm-4 footer-card">
            <div>
              <img src={cookingImage} alt="Description of the image" />
              <h4>Cook & Enjoy</h4>
              <h6>Eat your freshly cooked meal</h6>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
