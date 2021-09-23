import "./styles.css";
import { useState } from "react";

var foodDictionary = {
  Indian: [
    {
      Name: "Butter chicken",
      Description:
        "Indian butter chicken consists of pieces of tandoori chicken cooked in a tangy, velvety tomato cream sauce. Despite its rich flavors and hearty consistency, butter chicken is a surprisingly low-carb meal.",
      Ratings: "4.5/5"
    },
    {
      Name: "Biryani",
      Description:
        "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat usually that of chicken, goat, lamb, prawn, fish, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties.",
      Ratings: "5/5"
    },
    {
      Name: "Dal makhani",
      Description:
        "Dal (“lentil”) makhani (“with butter”) is a Punjabi or North Indian dish. Dal makhani is a creamy, tomato-based vegetarian stew that is served as both a hearty main and a side dish.",
      Ratings: "4.5/5"
    }
  ],
  Italian: [
    {
      Name: "Pizza",
      Description:
        "Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
      Ratings: "4/5"
    },
    {
      Name: "Lasagna",
      Description:
        "Lasagne are a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.",
      Ratings: "4.5/5"
    },
    {
      Name: "Ossobuco",
      Description:
        "Ossobuco or osso buco is a specialty of Lombard cuisine of cross-cut veal shanks braised with vegetables, white wine and broth.",
      Ratings: "4.5/5"
    }
  ],
  Chinese: [
    {
      Name: "Dim Sums",
      Description:
        "Dim sum is a traditional Chinese meal made up of small plates of dumplings and other snack dishes and is usually accompanied by tea.",
      Ratings: "5/5"
    },
    {
      Name: "Stir Fried Tofu with Rice",
      Description:
        "A simple stir-fry with tofu and oriental sauces. Sti fried togu with rice is a great main course dish to prepare at home laced with flavourful spices and sauces. Serve with some fried rice to make a wholesome meal.",
      Ratings: "4.5/5"
    },
    {
      Name: "Cantonese Chicken Soup",
      Description:
        "Packed with bokchoy, mushrooms, spring onion and chicken, this heart-warming soup recipe is perfect for a chilly winter evening.",
      Ratings: "5/5"
    }
  ]
};

export default function App() {
  var [selectedCuisine, setCuisine] = useState("Indian");

  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1 className="heading">Book Recomendations</h1>

      <div>
        {Object.keys(foodDictionary).map((cuisine) => (
          <button
            style={{ cursor: "pointer" }}
            className="button"
            onClick={() => cuisineClickHandler(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>

      <div>
        {foodDictionary[selectedCuisine].map((cuisine) => {
          return (
            <ul className="list-non-bullet" key={cuisine}>
              <li> {cuisine.Name} </li>
              <li> {cuisine.Description} </li>
              <li> {cuisine.Ratings} </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
