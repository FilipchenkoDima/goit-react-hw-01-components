import { StatisticsContainer, Title, StatList, Item } from "./Statistics.styled"
import PropTypes from 'prop-types';


export const Statistics = ({title, stats}) => {
    return <StatisticsContainer>
    {title && <Title>{ title }</Title>}

  <StatList>
    {stats.map(stat => {
        return <Item key={stat.id} style={{ backgroundColor: getRandomColor()}}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
    </Item>
    })}
  </StatList>
</StatisticsContainer>
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};



function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}