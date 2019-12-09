import Block from "./Block";
import React from "react";
import styled from "styled-components";
import CategoryBlock from "./CategoryBlock";
import { CategoryList } from "../types/CategoryList";

const Board = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${props => `1fr repeat(${props.columns}, 1fr)`};
  grid-template-rows: ${props => `1fr repeat(${props.columns}, 1fr)`};
  height: 600px;
  width: 600px;
  float: left;
  margin: 35px;
`;

const TopLeftBlank = styled.div`
  border-bottom: 2px solid black;
  border-right: 2px solid black;
`;
const Blank = styled.div``;

type BoardProps = {
  categories: CategoryList;
};

const buildCells = (categories: CategoryList) => {
  let categoryCount = Object.keys(categories).length;
  let cells: JSX.Element[] = [<TopLeftBlank />];

  Object.keys(categories)
    .slice(0, -1)
    .forEach(category =>
      cells.push(
        <CategoryBlock subcategories={categories[category]} position="top" />
      )
    );

  let sideCategoryCells: JSX.Element[] = Object.keys(categories)
    .slice(1)
    .map(category => (
      <CategoryBlock subcategories={categories[category]} position="side" />
    ));

  for (let i = 0; i < categoryCount - 1; i++) {
    let sideCategory = sideCategoryCells.pop();
    if (sideCategory) {
      cells.push(sideCategory);
    }

    for (let j = 0; j < categoryCount - 1 - i; j++) {
      cells.push(<Block categoryCount={categoryCount} />);
    }
    for (let j = 0; j < i; j++) {
      cells.push(<Blank />);
    }
  }
  return cells;
};

export default ({ categories }: BoardProps) => {
  return (
    <Board columns={Object.keys(categories).length - 1}>
      {buildCells(categories)}
    </Board>
  );
};
