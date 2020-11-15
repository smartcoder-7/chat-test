import { PAGINATION } from 'utils/constants';

const actions = {
  ADVACNED_PAGE: 'ADVANCED_PAGE',
  RESET_PAGE: 'RESET_PAGE',
};

const pageReducer = (state, action) => {
  switch (action.type) {
    case actions.ADVACNED_PAGE:
      return { ...state, offset: state.offset +  PAGINATION.limit };
    case actions.RESET_PAGE:
      return { ...state, offset: 0 };
    default:
      return false;
  }
};

export default pageReducer;