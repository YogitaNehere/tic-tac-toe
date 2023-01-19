import "./App.css";
import React, { Suspense } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TicTacToe from "./components/Tic_Tac_Toe/TicTacToe";
const ToDo = React.lazy(() => import("./components/ToDo/ToDo"));

function App() {
  return (
    <div className="App">
      <h1>Technical Demos</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/todolist">1) ToDo List</Link>
          </li>
          <li>
            <Link to="/tictactoe">2) Tic Tac Toe </Link>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/todolist" element={<ToDo />}></Route>
            <Route path="/tictactoe" element={<TicTacToe />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
