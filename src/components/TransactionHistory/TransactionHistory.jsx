import {
  Title,
  Table,
  TransactionInfo,
  TableLine,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          return (
            <TableLine key={item.id} idx={index}>
              <TransactionInfo style={{ textTransform: 'capitalize' }}>
                {item.type}
              </TransactionInfo>
              <TransactionInfo>{item.amount}</TransactionInfo>
              <TransactionInfo>{item.currency}</TransactionInfo>
            </TableLine>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
};
