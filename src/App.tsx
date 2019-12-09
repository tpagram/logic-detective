import React from "react";
import "./App.css";
import Puzzle from "./components/Puzzle";

const examplePuzzleProps = {
  categories: {
    colour: ["Yellow", "Blue", "Red", "White", "Green"],
    drink: ["Bier", "Coffee", "Milk", "Tea", "Water"],
    cigarette: ["Blend", "BlueMaster", "Dunhill", "PallMall", "Prince"],
    pet: ["Birds", "Cats", "Dogs", "Fish", "Horses"],
    nationality: ["Dane", "Englishman", "German", "Swede", "Norwegian"]
  },
  clues: [
    "The Englishman lives in the red house.",
    "The Swede keeps dogs.",
    "The Dane drinks tea.",
    "The green house is just to the left of the white one.",
    "The owner of the green house drinks coffee.",
    "The Pall Mall smoker keeps birds.",
    "The owner of the yellow house smokes Dunhills.",
    "The man in the center house drinks milk.",
    "The Norwegian lives in the first house.",
    "The Blend smoker has a neighbor who keeps cats.",
    "The man who smokes Blue Masters drinks bier.",
    "The man who keeps horses lives next to the Dunhill smoker.",
    "The German smokes Prince.",
    "The Norwegian lives next to the blue house.",
    "The Blend smoker has a neighbor who drinks water."
  ]
};

const App: React.FC = () => Puzzle(examplePuzzleProps);

export default App;
