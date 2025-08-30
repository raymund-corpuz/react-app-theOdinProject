export const initialTodo = [
  {
    id: 1,
    text: "React is fun",
    done: false,
  },
  {
    id: 2,
    text: "Redux is fun",
    done: false,
  },
  {
    id: 3,
    text: "Nodejs is awsome",
    done: false,
  },
];

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, done: false }];

    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
