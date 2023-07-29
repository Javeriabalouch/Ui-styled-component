import React from "react";

const Content = () => {
  const data = [1, 2, 3, 2, 4, 5, 3, 6, 7, 7, 8];

  // Function to find duplicate items in an array
  const duplicatesArray = data.filter(
    (item, index) => data.indexOf(item) !== index
  );

  return (
    <div>
      <h1>Duplicate Items in Array:</h1>
      <ul>
        {duplicatesArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
