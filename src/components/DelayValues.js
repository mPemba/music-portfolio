import React from "react";
import styled from "styled-components";

const DelayValues = ({ results }) => {
  return (
    <ul
      style={{
        listStyleType: "none",
        padding: 0,
      }}
    >
      {Object.entries(results).map(([key, value]) => (
        <li key={key}>
          <Key>{key}:</Key>
          <Value>Delay: {value.delay}</Value>
        </li>
      ))}
    </ul>
  );
};

const Key = styled.div`
  font-weight: 600;
`;

const Value = styled.div`
  font-weight: 300;
`;

export { DelayValues };
