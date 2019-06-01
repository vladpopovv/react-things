import ACTIONS from 'constants/actions';

const appActions = {
  toogleSidebar(sidebarState) {
    return (dispatch) => {
      dispatch({
        type: ACTIONS.UPDATE_SIDEBAR_STATE,
        payload: sidebarState,
      });
    };
  },
};

export default appActions;
