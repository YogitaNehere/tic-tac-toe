import "./App.css";
import React, { Suspense } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TicTacToe from "./components/Tic_Tac_Toe/TicTacToe";
import Filter from "./components/SearchFilter/Filter";
const ToDo = React.lazy(() => import("./components/ToDo/ToDo"));

function App() {
  return (
    <div className="App">
      <h1>Technical Demos</h1>
      <BrowserRouter>
        <ul className="menus">
          <li>
            <Link to="/tictactoe">1) Tic Tac Toe </Link>
          </li>
          <li>
            <Link to="/filter">2) Search Filter</Link>
          </li>
          <li>
            <Link to="/todolist">3) ToDo List</Link>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/todolist" element={<ToDo />}></Route>
            <Route path="/tictactoe" element={<TicTacToe />}></Route>
            <Route path="/filter" element={<Filter />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
