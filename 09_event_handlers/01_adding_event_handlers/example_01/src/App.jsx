import './App.css';
import ShowMessage from "./components/ShowMessage";

function App() {
  const persons = ["Tista Dutta", "Subhankar Das", "Bhaskar Majumdar", "Suroj Roy"];
  return (
    <>
      <ShowMessage persons={persons} />
    </>
  )
}

export default App
