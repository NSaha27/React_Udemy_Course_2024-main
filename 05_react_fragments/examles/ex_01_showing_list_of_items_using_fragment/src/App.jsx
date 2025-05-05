import "./App.css";
import DispItems from "./components/DispItems";

function App() {
  const itemList = [
    {
      id: 1,
      name: "Snake Plant",
      description:
        "Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp, among other names. Until 2017, it was known under the synonym Sansevieria trifasciata. This plant is often kept as a houseplant due to its non-demanding maintenance; they can survive with very little water and sun.",
      type: "Air purifier plant",
      imageUrl: "Snake_Plant.jpg",
      price: 80.0,
    },
    {
      id: 2,
      name: "Zamioculcas",
      description:
        "Zamioculcas is a genus of flowering plants in the family Araceae, containing the single species Zamioculcas zamiifolia.[2] It is a tropical herbaceous perennial plant, and is native to eastern Africa, including Kenya, KwaZulu-Natal, Malawi, Mozambique, Tanzania, and Zimbabwe.[2] Its common names include Zanzibar gem, ZZ plant, Zuzu plant, aroid palm, eternity plant and emerald palm.[3] It is commonly grown as a houseplant, mainly because it has attractive glossy foliage and is easy to care for. Zamioculcas zamiifolia is winter-hardy in USDA Zones 9 and 10",
      type: "Herbal Plant",
      imageUrl: "Zamioculcas.jpg",
      price: 190.0,
    },
    {
      id: 3,
      name: "Cactus (Cacti)",
      description:
        "A cactus is a member of the plant family Cactaceae,[a] a family of the order Caryophyllales comprising about 127 genera with some 1,750 known species.[4] The word cactus derives, through Latin, from the Ancient Greek word κάκτος (káktos), a name originally used by Theophrastus for a spiny plant whose identity is now not certain.[5] Cacti occur in a wide range of shapes and sizes. They are native to the Americas, ranging from Patagonia in the south to parts of western Canada in the north, with the exception of Rhipsalis baccifera, which is also found in Africa and Sri Lanka. Cacti are adapted to live in very dry environments, including the Atacama Desert, one of the driest places on Earth. Because of this, cacti show many adaptations to conserve water. For example, almost all cacti are succulents, meaning they have thickened, fleshy parts adapted to store water. Unlike many other succulents, the stem is the only part of most cacti where this vital process takes place.",
      type: "Indoor Plant",
      imageUrl: "cactus.jpg",
      price: 156.0,
    },
  ];

  return (
    <>
      <DispItems itemList={itemList} />
    </>
  );
}

export default App;
