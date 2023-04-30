import PropTypes from 'prop-types';
import './Section.styled';

export const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
 )

 Section.propTypes = {
    title:PropTypes.string,
    children:PropTypes.node
 }