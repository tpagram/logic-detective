import React, { useState } from "react";
import styled from "styled-components";

enum Status {
  unselected,
  match,
  nonmatch
}

const Cell = styled.div<{ status: Status }>`
  /* border: 1px solid black; */
  border-bottom: 1px solid #dbd9d5;
  border-right: 1px solid #dbd9d5;
  &:hover {
    cursor: pointer;
    background-color: ${props => {
      switch (props.status) {
        case Status.unselected:
          return "#dbd9d5";
        case Status.nonmatch:
          return "#FF9292";
        case Status.match:
          return "#CDEF89";
      }
    }};
  }
  background-color: ${props => {
    switch (props.status) {
      case Status.unselected:
        return "white";
      case Status.nonmatch:
        return "#C43535";
      case Status.match:
        return "#8AB732";
    }
  }};
`;

const newStatus = (currentStatus: Status) => {
  switch (currentStatus) {
    case Status.unselected:
      return Status.nonmatch;
    case Status.nonmatch:
      return Status.match;
    case Status.match:
      return Status.unselected;
  }
};

export default () => {
  const [status, setStatus] = useState(Status.unselected);

  return <Cell status={status} onClick={() => setStatus(newStatus(status))} />;
};
