import React, { useEffect, useState } from "react";

const Recursion = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(show(dataGiven));
  }, []);

  function show(menu) {
    const mappedData = menu.map((menu, index) => {
      if (menu.children) {
        return menu.menu + " - " + show(menu.children);
      } else {
        return menu.menu;
      }
    });

    return mappedData;
  }
  console.log(show(dataGiven));

  return <div>{data}</div>;
};

export default Recursion;

const dataGiven = [
  {
    id: 1,
    menu: "Animal",
    children: [
      {
        id: 1,
        menu: "Cat",
        children: [
          {
            id: 1,
            menu: "small cat",
            children: [
              { id: 1, menu: "small black cat" },
              { id: 2, menu: "small white cat" },
            ],
          },
          { id: 2, menu: "Big cat" },
        ],
      },
    ],
  },
  {
    id: 2,
    menu: "Plant",
    children: [
      {
        id: 1,
        menu: "Mango plant",
        children: [
          { id: 1, menu: "big mango" },
          { id: 2, menu: "small mango" },
        ],
      },
    ],
  },
];
