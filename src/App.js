import { useState } from "react";

//My Components
import Header from "./components/header/Header";
import Map from "./components/map/Map";

function App() {
  // This State To Change Postition of Map On Every Search
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  return (
    <div className="App">
      <Header setLocation={setLocation} />
      <Map location={location} />
    </div>
  );
}

export default App;
