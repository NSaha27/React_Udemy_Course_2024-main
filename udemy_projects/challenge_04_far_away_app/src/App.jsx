import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const appInfo = {
    appName: "Far Away",
    image1: "tree.jpeg",
    image2: "bag.png",
  };

  return (
    <>
      <Header appInfo={appInfo} />
      <Form />
    </>
  );
}

export default App;
