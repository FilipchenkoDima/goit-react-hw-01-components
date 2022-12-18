import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;

export const Title = styled.h2`
  padding: 30px;
  margin: 0;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;
  color: #686868;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px;
  color: #ffffff;
`;
