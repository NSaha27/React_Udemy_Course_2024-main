import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";

const items = [
  {
    id: 1,
    itemImg: "../../public/images/biriyani.png",
    itemName: "Mutton Biriyani",
    itemType: "non-veg",
    itemDescription: "Light spicy Hyderabadi Mutton Biriyani",
    itemPrice: 260
  },
  {
    id: 2,
    itemImg: "../../public/images/butter_chicken.png",
    itemName: "Butter Chicken",
    itemType: "non-veg",
    itemDescription: "Butter Chicken is a classic Indian dish made with marinated & grilled chicken (Tandoori chicken), simmered in a creamy tomato gravy/curry.",
    itemPrice: 150
  },
  {
    id: 3,
    itemImg: "../../public/images/butter_naan.png",
    itemName: "Butter Naan",
    itemType: "veg",
    itemDescription: "Butter naan is traditional tandoori-style Indian naan bread brushed with melted butter at the end. It tastes buttery and yeasty and delicious. (2 pcs)",
    itemPrice: 60
  },
  {
    id: 4,
    itemImg: "../../public/images/chicken_pakora.png",
    itemName: "Chicken Pakora",
    itemType: "non-veg",
    itemDescription: "Chicken Pakora (Chicken Pakoda) is a popular Indian snack where boneless chicken pieces are marinated with spices, ginger garlic paste, and lime... (10 pcs)",
    itemPrice: 100
  },
];

function Home(){
  return <div className="container">
    <Header />
    <Menu itemList={items} />
    <Order />
  </div>
}

export default Home;