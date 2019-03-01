/*
 * This is a sample reducer.
 * The state is an object with one key: header.
 * header is set to an initial value of 'This is the home page!'
 * A reducer state can have anything in it that you want.
 */
const userLogin = ( state = {user: {}},action) => {
  /*
   * Actions are used to trigger reducers. For any given reducer,
   * we might have a number of different action types.
   * So we use a switch statement.
   */
       // Deep copy of the current state

  let newState = Object.assign({}, state);

  switch (action.type) {
    case "CHANGE_USER":
      newState.user = {
        id: action.user.id,
        username: action.user.username,
        fname: action.user.firstName,
        lname: action.user.lastname,
        email: action.user.email
      }
      return newState;
    default:
      return state;
  }
};

export default userLogin;
