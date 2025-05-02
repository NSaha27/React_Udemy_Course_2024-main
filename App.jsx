import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyApp01 from "./components/MyApp01";
import MyApp02 from "./components/MyApp02";

function App() {
  return (
    <main className="container">
      <div>
        <h1>
          Example - 1 (Each Button will have its own copy of "count" state)
        </h1>
        <MyApp01 />
      </div>
      <div>
        <h1>
          Example - 2 (Each Button will share the same copy of "count" state of
          the parent component)
        </h1>
        <MyApp02 />
      </div>
    </main>
  );
}

export default App;
