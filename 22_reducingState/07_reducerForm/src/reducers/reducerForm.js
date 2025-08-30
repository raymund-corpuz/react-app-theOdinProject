export const initialForm = {
  email: "",
  name: "",
  password: "",
};

export function reducerForm(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialForm;
    default:
      return state;
  }
}
