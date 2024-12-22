import './App.css';
import Step from "./components/Step";

function App() {
  const message = [
    "Learn React 🏫",
    "Apply for jobs 🧑‍💻",
    "Invest your new income 🏦"
  ];
  return (
    <div className='container'>
      <Step message={message} />
    </div>
  )
}

export default App
