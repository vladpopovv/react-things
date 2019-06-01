import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import AppAction from 'actions/app';

class Sidebar extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escHandler, false);
  }

  closeSidebar = () => {
    const { toogleSidebar } = this.props;

    toogleSidebar(false);
  }

  escHandler = (e) => {
    const { isOpen } = this.props;

    if (e.keyCode === 27 && isOpen) {
      this.closeSidebar();
    }
  }

  render() {
    const { isOpen, toogleSidebar, children } = this.props;

    return (
      <div className={classNames('sidebar', { 'sidebar--open': isOpen })}>
        <div
          className="sidebar-overlay"
          onClick={this.closeSidebar}
          onKeyDown={this.closeSidebar}
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
          {children}
        </div>
      </div>
    );
  }
}

Sidebar.propType = {
  isOpen: PropTypes.bool,
  toogleSidebar: PropTypes.func,
  children: PropTypes.element,
};

export default connect(state => ({
  isOpen: state.app.isSidebarOpened,
}), {
  toogleSidebar: AppAction.toogleSidebar,
})(Sidebar);
