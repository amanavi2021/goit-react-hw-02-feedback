import PropTypes from 'prop-types';
import './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className="Feedback__controls">
            {options.map(option => 
            <button
             key={option}
             type="button"
             name={option}
             onClick={onLeaveFeedback}
            >{option}
            </button>)}
       </div>  
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func
}