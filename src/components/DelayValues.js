import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DelayValues = ({ results }) => {
  DelayValues.propTypes = {
    results: PropTypes.object,
  };

  return (
    <List
      style={{
        listStyleType: "none",
        padding: 0,
      }}
    >
      {results &&
        Object.entries(results).map(([key, value]) => (
          <Item key={key}>
            <Key>{key}:</Key>
            <Value>{value.delay}</Value>
          </Item>
        ))}
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  gap: 10px;
`;

const Key = styled.div`
  font-weight: 600;
`;

const Value = styled.div`
  font-weight: 300;
`;

export { DelayValues };
