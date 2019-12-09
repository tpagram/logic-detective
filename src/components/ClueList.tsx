import React, { useState } from "react";
import styled from "styled-components";

const ClueList = styled.div<{ rows: number }>`
  display: grid;
  grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  height: 600px;
  width: 500px;
  float: left;
  margin: 35px;
`;

const Clue = styled.div<{ active: boolean }>`
  text-decoration: ${props => (props.active ? "none" : "line-through")};
  margin: 2px;
  padding: 2px;
  &:hover {
    text-decoration: line-through;
    cursor: pointer;
  }
`;

interface ClueListProps {
  clues: string[];
}

const newActiveClues = (activeClues: boolean[], index: number) => {
  activeClues = activeClues.slice();
  activeClues[index] = !activeClues[index];
  return activeClues;
};

export default ({ clues }: ClueListProps) => {
  const [activeClues, setActiveClues] = useState(
    Array(clues.length).fill(true)
  );

  return (
    <ClueList rows={clues.length}>
      {clues.map((clue, index) => {
        return (
          <Clue
            active={activeClues[index]}
            onClick={() => setActiveClues(newActiveClues(activeClues, index))}
          >
            {index + 1}. {clue}
          </Clue>
        );
      })}
    </ClueList>
  );
};
