import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import AppAction from 'actions/app';

function Sidebar(props) {
  const { isOpen, toogleSidebar } = props;

  const closeSidebar = () => toogleSidebar(false);

  return (
    <div className={classNames('sidebar', { 'sidebar--open': isOpen })}>
      <div
        className="sidebar-overlay"
        onClick={closeSidebar}
        onKeyDown={closeSidebar}
        role="button"
        tabIndex="0"
      />
      <div className="sidebar-body">
        <button
          className="sidebar-toggle"
          onClick={() => toogleSidebar(!isOpen)}
          type="button"
        >
          <div className={classNames('burger-icon', { 'burger-cross': isOpen })} />
        </button>
        Sidebar
      </div>
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
