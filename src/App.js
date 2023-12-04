import { Route, Routes } from "react-router-dom";
import Main from "./Components/Pages/Main/Main";
import Kitchen from "./Components/Pages/Kitchen/Kitchen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/kitchen" element={<Kitchen />}></Route>
    </Routes>
  );
}

export default App;
