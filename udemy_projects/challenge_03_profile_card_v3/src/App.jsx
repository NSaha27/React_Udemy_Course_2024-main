import Message from "./components/Message";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="card">
      <PersonalInfo />
      <Message />
      <Skills />
    </div>
  );
}

export default App;
