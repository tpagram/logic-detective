import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const Block = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  border-bottom: 2px solid black;
  border-right: 2px solid black;
`;

type BlockProps = {
  categoryCount: number;
};

export default ({ categoryCount }: BlockProps) => {
  let cells: JSX.Element[] = [];
  for (let i = 0; i < categoryCount ** 2; i++) {
    cells.push(<Cell />);
  }

  return <Block columns={categoryCount}>{cells}</Block>;
};
