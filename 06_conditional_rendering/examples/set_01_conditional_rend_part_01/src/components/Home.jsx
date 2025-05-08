import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";


const items = [
  {
    id: 1,
    itemImg: "../../public/images/biriyani.png",
    itemName: "Mutton Biriyani",
    itemType: "non-veg",
    itemDescription: "Mutton biryani is an aromatic rice dish made with layers of tender mutton pieces (or goat meat), fragrant basmati rice, deep fried onions, aromatic indian spices.",
    itemPrice: 260,
    isSoldOut: false
  },
  {
    id: 2,
    itemImg: "../../public/images/butter_chicken.png",
    itemName: "Butter Chicken",
    itemType: "non-veg",
    itemDescription: "Butter Chicken is a classic Indian dish made with marinated & grilled chicken (Tandoori chicken), simmered in a creamy tomato gravy/curry. It is a delicious item, try it.",
    itemPrice: 150,
    isSoldOut: false
  },
  {
    id: 3,
    itemImg: "../../public/images/butter_naan.png",
    itemName: "Butter Naan",
    itemType: "veg",
    itemDescription: "Butter naan is traditional tandoori-style Indian naan bread brushed with melted butter at the end. It tastes buttery and yeasty and delicious. (2 pcs)",
    itemPrice: 60,
    isSoldOut: true
  },
  {
    id: 4,
    itemImg: "../../public/images/chicken_pakora.png",
    itemName: "Chicken Pakora",
    itemType: "non-veg",
    itemDescription: "Chicken Pakora (Chicken Pakoda) is a popular Indian snack where boneless chicken pieces are marinated with spices, ginger garlic paste, and lime... (10 pcs)",
    itemPrice: 100,
    isSoldOut: false
  },
  {
    id: 5,
    itemImg: "../../public/images/fried_rice.jpg",
    itemName: "Fried Rice",
    itemType: "veg",
    itemDescription: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.",
    itemPrice: 180,
    isSoldOut: true
  },
  {
    id: 6,
    itemImg: "../../public/images/chowmine.jpg",
    itemName: "Chowmine",
    itemType: "veg",
    itemDescription: "Chowmine is a dish of Chinese stir-fried noodles with vegetables and sometimes meat or tofu. Over the centuries, variations of chowmine were developed in many regions of China.",
    itemPrice: 80,
    isSoldOut: false
  },
];
// const items = [];

function Home(){
  const openHour = 10;
  const closeHour = 23;
  const curHour = new Date().getHours();
  /*
  return <div className="container">
    <Header />
    <Menu itemList={items} />
    <Order />
    <Footer openHour={openHour} closeHour={closeHour} curHour={curHour} />
  </div>
  */

  // using empty React Fragment tag to avoid the div with container class
  return <>
    <Header />
    <Menu itemList={items} />
    <Order />
    <Footer openHour={openHour} closeHour={closeHour} curHour={curHour} />
  </>

  // using React.Fragment tag to avoid the div with container class - this tag is used whenever we need to add any attribute to the component
  /*
  return <React.Fragment key={anyKey}>
    <Header />
    <Menu itemList={items} />
    <Order />
    <Footer openHour={openHour} closeHour={closeHour} curHour={curHour} />
  </React.Fragment>
  */
}

export default Home;