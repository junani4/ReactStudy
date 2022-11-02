import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/hello">
        <h1>Hello</h1>
      </Route>
      <Route path="/movie/:chillitomato" element={<Detail/>}>
        <Detail />
      </Route>
      <Route path="/" element={<Home />}>
        <Home />
      </Route>
    </Routes>
  </Router>
  )
}

export default App;