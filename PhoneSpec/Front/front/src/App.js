import Top from "./home/top";
import Main from "./home/main";
import Login from "./home/login"
import {BrowserRouter, Route, Routes} from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
    <div>
      <Top />
      <Routes>
        <Route exact path="/" element={<Main />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
