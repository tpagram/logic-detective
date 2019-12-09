import React from "react";
import styled from "styled-components";

const CategoryBlock = styled.div<{ columns: number; position: string }>`
  display: grid;
  grid-template-columns: ${props =>
    props.position === "top" ? `repeat(${props.columns}, 1fr)` : `1fr`};
  grid-template-rows: ${props =>
    props.position === "side" ? `repeat(${props.columns}, 1fr)` : `1fr`};
  border-bottom: 2px solid black;
  border-right: 2px solid black;
`;

const CategoryCell = styled.div<{ position: string }>`
  border-bottom: 1px solid #dbd9d5;
  border-right: 1px solid #dbd9d5;
  writing-mode: ${props =>
    props.position === "side" ? "horizontal-tb" : "sideways-lr"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryTitle = styled.div``;

type CategoryBlockProps = {
  subcategories: string[];
  position: string;
};

export default ({ subcategories, position }: CategoryBlockProps) => {
  let cells: JSX.Element[] = subcategories.map(subcat => (
    <CategoryCell position={position}>
      <CategoryTitle>{subcat}</CategoryTitle>
    </CategoryCell>
  ));

  return (
    <CategoryBlock columns={subcategories.length} position={position}>
      {cells}
    </CategoryBlock>
  );
};
