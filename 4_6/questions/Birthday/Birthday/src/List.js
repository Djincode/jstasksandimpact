// List.js

import React from "react";

const List = ({ person }) => {
  return (
    <>
      {person.map((item) => {
        return (
          <article key={item.id} className="person">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
