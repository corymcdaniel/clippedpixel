import React from 'react';
import PropTypes from 'prop-types';

const InstaCard = ({ url, className = '' }) => {
  return (
    <div className={className}>
      <img src={url} />
    </div>
  );
};

InstaCard.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InstaCard;
