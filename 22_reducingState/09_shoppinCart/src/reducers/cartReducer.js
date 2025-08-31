export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_CART":
      // return [...state, { id: Date.now(), text: action.payload, qty: 1 }];
      return [...state, { ...action.payload, qty: 1 }];

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );

    case "DECREMENT":
      return state.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    case "DELETE_CART":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
