import React from "react";
import "./css/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src={require("./img/homeimage.jpg")}
        alt=""
      />
      {/* Product id, title, price, rating, image*/}
      <div className="home__row">
        <Product
          id={134234}
          title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers"
          price={44.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
        />
        <Product
          id={695832}
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={391.42}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={605042}
          title="Fitbit Charge 3 Fitness Activity Tracker"
          price={98.65}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id={66983}
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={117.81}
          rating={3}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id={786943}
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12345}
          title="LG 38GL950G-B 38 inch UltraGear Nano IPS 1ms Curved Gaming Monitor with 144HZ Refresh Rate and NVIDIA G-SYNC, Black"
          price={1685.75}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81URP-h6aPL._AC_SL1500_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
