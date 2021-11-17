import React from "react";
import Card from "./Card.js";

const CardList = ({ robots }) => { // prop
  // const cardArray  = ;

  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id} //need so react will be able to keep tracek of all the items
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
