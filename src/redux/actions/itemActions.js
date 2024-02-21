export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
    }
  };
};