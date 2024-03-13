import React, { useState } from "react";
import { data } from "./Data";

const Home = () => {
  const [food, setFood] = useState(data);

  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

 
  function updateRating(e) {
    let obj = [...food];

    obj[0].rating = e.target.value;

    setFood(obj);
  }

 

  return (
    <div>
      <div>
        <input
          style={{
            margin: "1rem 50rem",
            border: "2px solid black",
            borderRadius: "1rem",
          }}
          type="text"
          name="search"
          placeholder="search food"
          onChange={(e) => {
            filterData(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          style={{
            margin: "1rem 50rem",
            border: "2px solid black",
            borderRadius: "1rem",
          }}
          type="number"
          name="rating"
          placeholder="Enter Rating"
          onChange={updateRating}
        />
      </div>
      {food.map((item) => {
        return (
          <div
            key={item._id.$oid}
            style={{
              border: "1px solid black",
              backgroundColor: "#b3b3ff",
              padding: "0.5rem",
              borderRadius: "1rem",
              width: "40rem",
              margin: "1rem 20rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5>{item.name}</h5>
            <p>{item.address}</p>
            <p>Food : {item.type_of_food}</p>
            <p>Rating : {item.rating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
