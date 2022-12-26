import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import View from "./View";

import Home from "./Home";



export default function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/view" element={<View />}> </Route>
        <Route path="/:id" element={<Home />}> </Route>

      </Routes>
    </BrowserRouter>
  )
}

