import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import View from "./View";
import Home from "./Home";
import Parent from "./Parent";
import Child from "./Child";
import Api from "./Api";
import ContextDemoFC from "./ContextDemoFC";
import Button from "./Mainpage";
import Todo from "./Todo";



export default function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/view" element={<View />}> </Route>
        <Route path="/:id" element={<Home />}> </Route>
        <Route path="/parent" element={<Parent />}> </Route>
        <Route path="/child" element={<Child />}> </Route>
        <Route path="/api" element={<Api />}> </Route>
        <Route path="/context" element={<ContextDemoFC />}> </Route>
        <Route path="/button" element={<Button />}> </Route>

        <Route path="/todo" element={<Todo />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

