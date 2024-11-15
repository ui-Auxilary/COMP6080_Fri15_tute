import React from "react";

import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div onClick={() => navigate("/")}>
        <img
          style={{ width: 80, height: 50, cursor: "pointer" }}
          src={
            "https://m.media-amazon.com/images/M/MV5BZDE2ZjIxYzUtZTJjYS00OWQ0LTk2NGEtMDliYmI3MzMwYjhkXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg"
          }
        />
      </div>
      <Link to='/game1'>Game 1</Link>
      <Link to='/game2'>Game 2</Link>
      <Link to='/game3'>Game 3</Link>
    </div>
  );
}
