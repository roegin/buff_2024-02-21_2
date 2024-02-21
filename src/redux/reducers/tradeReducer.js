const initialState = {
  trades: [],
  loading: false,
  error: null
};

const tradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRADES_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_TRADES_SUCCESS':
      return {
        ...state,
        loading: false,
        trades: action.payload
      };
    case 'FETCH_TRADES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default tradeReducer;