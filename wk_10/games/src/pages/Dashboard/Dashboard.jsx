import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";
import Header from "../Header/Header";

export default function Dashboard() {
  const [score, setScore] = useState(0);
  return (
    <div id='container'>
      <Header />
      <div className='body'>Score stuff: {score}</div>
    </div>
  );
}
