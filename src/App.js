import React, { useState } from "react";
import "./styles.css";
// var counter = 0;

const emojiDictionary = {
  "😊": "Smiling",
  "😲": "Disbelief",
  "😔": "sad",
  "🤯": "takeout box",
  "😍": "love",
  "😑": "Annoyance",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🍗": "Poultry Leg",
  "🍔": "Hamburger",
  "🍻": "cheers!!!!"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our data";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    //  console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Emoji Interpreter </h1>
        <input onChange={emojiInputHandler}></input>
        <h2>{meaning}</h2>
      </div>
      <div className="emjoisWeKnow">
        <h3>Emojis we know</h3>
        {emojisWeknow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </div>

      <div>
        <p>Hi Folks,</p>
        <p>This Interpreter helps you to know the motion of the emoji.</p>
        <p>
          And helps to know the meaning of it and it will helps to know the
          emotion of others.
        </p>
      </div>
      {/* <footer>
        <p id="footer-id">© | 2022 | Shabrez</p>
        <ul class="footer-list">
            <li> <a class="links" href="https://github.com/mohshabrez"><img src="github.png" alt="Github"></a></li>
            <li><a class="links" href="https://www.linkedin.com/in/g-shabrez-785362159/"><img src="linkedin.png" alt="Linkedin"></a></li>
            <li><a class="links" href="https://twitter.com/ShabrezMohammed"><img src="twitter.png" alt="twitter"></a></li>
            {/* <!-- <li><a class="links" href=""><img src="" alt=""></a></li> --> */}

      {/* </ul>
    // </footer> */}

      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}

// var shoppingList = ["A", "B", "c", "d", "e", "f"];
// function getBy(index) {
//   if (index % 2 === 0) {
//     return "white";
//   }
//   return "gray";
// }
// function listItemClickHandler(item){
//   console.log("clicked", item)

// }

// <h2>Print the list</h2>
// <ul>
//   {shoppingList.map(function (item, index) {
//     return (<li
//     Key = {item}
//     onClick = {() => listItemClickHandler(item)}
//      style={{ backgroundColor: getBy(index) }}> {item}</li>;
//   })})
// </ul>
