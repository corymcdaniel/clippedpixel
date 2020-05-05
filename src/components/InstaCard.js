import React from 'react';
import PropTypes from 'prop-types';

const InstaCard = ({ url, className = '', onClick }) => {
  if (!url) {
    return null;
  }
  return (
    <div className={className} onClick={onClick}>
      <img src={url} />
    </div>
  );
};

InstaCard.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InstaCard;
