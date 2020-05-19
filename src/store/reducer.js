const initialState = {
  products: [
    {
      id: 1,
      name: "Pasta",
      img: "",
      tags: ["Rice"],
      price: 8,
    },
    {
      id: 2,
      name: "Meat",
      img: "",
      tags: ["non-Veg", "frozen"],
      price: 7,
    },
    {
      id: 3,
      name: "Bread",
      img: "",
      tags: ["bakery"],
      price: 4,
    },
    {
      id: 4,
      name: "Oils",
      img: "",
      tags: ["edible", "fat"],
      price: 3,
    },
    {
      id: 5,
      name: "Cereals",
      img: "",
      tags: ["cereals"],
      price: 20,
    },
    {
      id: 6,
      name: "Fish",
      img: "",
      tags: ["frozen", "non-veg"],
      price: 14,
    },
    {
      id: 7,
      name: "Soups and Canned Goods",
      img: "",
      tags: ["canned", "soups"],
      price: 12,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
