const initialState = {
  products: [
    {
      id: 1,
      name: "Pasta",
      img:
        "https://www.euractiv.com/wp-content/uploads/sites/2/2017/08/shutterstock_340606343crop-800x450.jpg",
      tags: ["rice"],
      price: 8,
      boughtTimes: 10,
    },
    {
      id: 2,
      name: "Meat",
      img:
        "https://image.shutterstock.com/image-photo/variety-raw-black-angus-prime-260nw-708645067.jpg",
      tags: ["non-veg", "frozen"],
      price: 7,
      boughtTimes: 8,
    },
    {
      id: 3,
      name: "Bread",
      img:
        "https://thestayathomechef.com/wp-content/uploads/2019/10/Homemade-Bread-4.jpg",
      tags: ["bakery"],
      price: 4,
      boughtTimes: 20,
    },
    {
      id: 4,
      name: "Oils",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGDuPpuOf83pvMJfIvICBK3qybd3jlRxgyujmsRB4WsKUWqdE-&usqp=CAU",
      tags: ["edible", "fat"],
      price: 3,
      boughtTimes: 15,
    },
    {
      id: 5,
      name: "Cereals",
      img: "https://i.ytimg.com/vi/cYIREioZ3oo/maxresdefault.jpg",
      tags: ["cereals"],
      price: 20,
      boughtTimes: 10,
    },
    {
      id: 6,
      name: "Fish/Prawns/Crabs",
      img:
        "https://www.test4.life/wp-content/uploads/2018/12/Header_0001_iStock-938498502_Seafood.jpg",
      tags: ["frozen", "sea Food"],
      price: 14,
      boughtTimes: 16,
    },
    {
      id: 7,
      name: "Soups and Canned Goods",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFE3wbZSvrCAG-ZjJGW1whEbtcLB-FWy2i3eTndlD-koTKUDgE&usqp=CAU",
      tags: ["canned", "soups"],
      price: 12,
      boughtTimes: 7,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
