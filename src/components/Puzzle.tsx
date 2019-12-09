import Board from "./Board";
import React from "react";
import { CategoryList } from "../types/CategoryList";
import ClueList from "./ClueList";

type PuzzleProps = {
  categories: CategoryList;
  clues: string[];
};

export default ({ categories, clues }: PuzzleProps) => {
  return (
    <div>
      <Board categories={categories}/>,
      <ClueList clues={clues}/>
    </div>
  );
};
