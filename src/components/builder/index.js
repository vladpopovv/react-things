import React, { Component } from 'react';
import Element from './element';

class Builder extends Component {
  state = {
    containerParams: {
      top: 0,
      left: 0,
      scale: 1,
    },
    elements: {
      1: {
        id: '1',
        top: 0,
        left: 0,
        title: 'Element 1',
      },
      2: {
        id: '2',
        top: 0,
        left: 0,
        title: 'Element 1',
      },
      3: {
        id: '3',
        top: 0,
        left: 0,
        title: 'Element 1',
      },
    },
  };

  putElement = (element) => {
    const { elements } = this.state;

    const currentElement = elements[element.id];
    this.setState({
      elements: {
        ...elements,
        [element.id]: {
          ...currentElement,
          ...element,
        },
      },
    });
  }

  onElementDragStart = (e, element) => {
    e.stopPropagation();

    this.draggingElement = {
      left: element.left,
      top: element.top,
      id: element.id,
    };

    this.mousePrevPosition = {
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener('mousemove', this.onElementDragging);
    document.addEventListener('mouseup', this.onElementDragStop);
  };

  onElementDragging = (e) => {
    const { draggingElement } = this;
    const { containerParams: { scale } } = this.state;

    if (!draggingElement) {
      document.removeEventListener('mousemove', this.onElementDragging);
      document.removeEventListener('mouseup', this.onElementDragStop);
    }

    const xDiff = (e.clientX - this.mousePrevPosition.x) / scale;
    const yDiff = (e.clientY - this.mousePrevPosition.y) / scale;

    this.draggingElement.left += xDiff;
    this.draggingElement.top += yDiff;

    this.mousePrevPosition = {
      x: e.clientX,
      y: e.clientY,
    };

    this.putElement(this.draggingElement);
  };

  onElementDragStop = () => {
    document.removeEventListener('mousemove', this.onElementDragging);
    document.removeEventListener('mouseup', this.onElementDragStop);

    this.draggingElement = null;
  };

  render() {
    const {
      containerParams: { top, left, scale },
      elements,
    } = this.state;

    return (
      <div className="builder">
        Builder top:
        {top}
        left:
        {left}
        Scale:
        {scale}
        <div className="builder-container">
          {Object.values(elements).map(element => (
            <Element
              key={element.id}
              element={element}
              onElementMouseDown={this.onElementDragStart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Builder;
