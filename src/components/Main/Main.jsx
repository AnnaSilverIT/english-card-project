import React, {useState} from "react";
import {Link} from 'react-router-dom'
import CardSwitcher from "../CardSwitcher/CardSwitcher";
import './Main.css'
import WordTable from "../WordTable/WordTable";

function Main() {
  
  return (
    <div>
      <WordTable />
      <button className="addWordButton">Добавить слово</button>
    </div>
    
  );
}

export default Main;
