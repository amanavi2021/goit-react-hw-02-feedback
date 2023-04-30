import PropTypes from 'prop-types';
import './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
        <div className="Statistics">
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    )


Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number,
    positivePercentage: PropTypes.number

}
