import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppAction from 'actions/app';

function Sidebar(props) {
  const { isOpen, toogleSidebar } = props;

  return (
    <div className="sidebar">
      Sidebar
      <button onClick={() => toogleSidebar(!isOpen)} type="button">
        Click
      </button>
    </div>
  );
}

Sidebar.propType = {
  isOpen: PropTypes.bool,
  toogleSidebar: PropTypes.func,
};

export default connect(state => ({
  isOpen: state.app.isSidebarOpened,
}), {
  toogleSidebar: AppAction.toogleSidebar,
})(Sidebar);
