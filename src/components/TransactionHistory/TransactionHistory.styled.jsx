import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  border-radius: 4px;
`;

export const Title = styled.th`
  width: 200px;
  background-color: darkturquoise;
  color: #ffffff;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
`;

export const TransactionInfo = styled.td`
  color: #999999;
  text-align: center;
  padding: 14px;
  font-size: 18px;
  font-weight: 500;
`;

export const TableLine = styled.tr`
  background-color: ${p => {
    return p.idx % 2 ? '#a1a1a122' : '#ffffff';
  }};
`;
