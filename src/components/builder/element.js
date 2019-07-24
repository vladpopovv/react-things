import React from 'react';
import PropTypes from 'prop-types';

export default function Element(props) {
  const {
    element,
    onElementMouseDown,
  } = props;
  const elementStyles = {
    top: `${element.top}px`,
    left: `${element.left}px`,
  };

  return (
    <div
      className="element"
      style={elementStyles}
      role="button"
      tabIndex="-1"
      onMouseDown={e => onElementMouseDown(e, element)}
    >
      <span className="element__title">
        {element.title}
      </span>
    </div>
  );
}

Element.propTypes = {
  element: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  onElementMouseDown: PropTypes.func.isRequired,
};
