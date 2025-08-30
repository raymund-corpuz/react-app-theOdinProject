export const initialForm = {
  name: "",
  email: "",
  password: "",
};

export function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialForm;
    default:
      return state;
  }
}
