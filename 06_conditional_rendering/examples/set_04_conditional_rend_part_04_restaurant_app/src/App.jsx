import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const appTitle = "Suklar Rannaghar";
const openHour = 10;
const closeHour = 23;
const curHour = new Date().getHours();

const items = [
  {
    itemID: 1,
    itemName: "Veg Chowmein",
    itemImage: "veg_chowmein.png",
    itemInfo:
      "Veg hakka noodles with spring onion, and tossed with desi masala",
    itemCategory: "veg",
    itemPrice: 60.0,
    isSoldOut: false,
  },
  {
    itemID: 2,
    itemName: "Egg Chowmein",
    itemImage: "egg_chowmein.jpg",
    itemInfo: "Hakka noodles with egg and tossed with desi masala",
    itemCategory: "non-veg",
    itemPrice: 70.0,
    isSoldOut: false,
  },
  {
    itemID: 3,
    itemName: "Mixed Chowmein",
    itemImage: "mixed_chowmein.jpg",
    itemInfo:
      "Hakka noodles with small peices of chicken, pron, egg, and tossed with desi masala",
    itemCategory: "non-veg",
    itemPrice: 85.0,
    isSoldOut: false,
  },
  {
    itemID: 4,
    itemName: "Fish Finger",
    itemImage: "fish_finger.jpg",
    itemInfo:
      " Breaded white fish baked in the oven using a secret method to make them super crispy outside and tender on the inside",
    itemCategory: "non-veg",
    itemPrice: 15.0,
    isSoldOut: false,
  },
  {
    itemID: 5,
    itemName: "Mughlai",
    itemImage: "mughlai_paratha.jpg",
    itemInfo:
      " It's a crisp, flaky, pan-fried flatbread that's stuffed with fluffy eggs and fiery chiles, and gently spiced with earthy turmeric.",
    itemCategory: "non-veg",
    itemPrice: 60.0,
    isSoldOut: true,
  },
  {
    itemID: 6,
    itemName: "Egg Roll",
    itemImage: "egg_roll.png",
    itemInfo:
      "Delicious flaky flat bread, covered with egg on one side and filled with a simple salad of onion and cucumber. Little amount of chaat masala inside",
    itemCategory: "non-veg",
    itemPrice: 30.0,
    isSoldOut: false,
  },
  {
    itemID: 7,
    itemName: "Mixed Roll",
    itemImage: "mixed_roll.png",
    itemInfo:
      "Our Mixed Veg Roll is the perfect snack for those who like balanced and healthy food. With a blend of delicious vegetables such as carrots, cabbage, green chillis, capsicum, spring onion, small pieces of chicken etc.",
    itemCategory: "non-veg",
    itemPrice: 45.0,
    isSoldOut: true,
  },
  {
    itemID: 8,
    itemName: "Momo",
    itemImage: "momo.png",
    itemInfo:
      "Simple and healthy snack recipes inherited from traditional Nepali cuisine. It is plain flour-based dumplings steamed with cabbage, carrot, and spring onion",
    itemCategory: "non-veg",
    itemPrice: 50.0,
    isSoldOut: false,
  },
];

const isLoggedIn = true;

function App() {
  return (
    <>
      <Header appTitle={appTitle} />
      <MainContent items={items} />
      <Footer
        openHour={openHour}
        curHour={curHour}
        closeHour={closeHour}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}

export default App;
