import ACTIONS from 'constants/actions';

const initialState = {
  isSidebarOpened: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.UPDATE_SIDEBAR_STATE: {
      return {
        ...state,
        isSidebarOpened: payload,
      };
    }
    default:
      return state;
  }
};
