import Slider from "./components/Slider";

function App() {
  const picture = [
    {
      title: "Bear",
      image: "bear.jpg",
    },
    {
      title: "Deer",
      image: "deer.jpg",
    },
    {
      title: "Elephant",
      image: "elephant.jpg",
    },
    {
      title: "Lion",
      image: "lion.jpg",
    },
    {
      title: "Sheep and Lamb",
      image: "sheep_and_lamb.jpg",
    },
    {
      title: "Tiger",
      image: "tiger.jpg",
    },
    {
      title: "Zebra",
      image: "zebra.jpg",
    },
  ];
  return (
    <>
      <h1 className="title">Slider Project</h1>
      <Slider pictureObj={picture} />
    </>
  );
}

export default App;
