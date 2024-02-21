export const fetchTrades = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/trades');
      const data = await response.json();
      dispatch({ type: 'FETCH_TRADES_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_TRADES_FAILURE', payload: error.message });
    }
  };
};