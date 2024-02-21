export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  };
};