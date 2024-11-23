import Header from './components/Header.jsx';
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container" style={{
        width: "30%",
        margin: "2rem auto",
        border: "2px solid #181818",
        borderRadius: "1rem",
    }}>
      <Header />
      <Profile />
      <Footer />
    </div>
  )
}

export default App;
