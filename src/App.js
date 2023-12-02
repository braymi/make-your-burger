import { Route, Routes } from "react-router-dom";
import Main from "./Components/Pages/Main/Main";
import Kitchen from "./Components/Pages/Kitchen/Kitchen";
import Background from "./Components/Pages/Main/Background";
import Burger from "./Components/Burger/Burger";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/kitchen" element={<Kitchen />}></Route>
      <Route path="/background" element={<Background />}></Route>
      <Route path="/burger" element={<Burger />}></Route>
    </Routes>
  );
}

export default App;
