import { useReducer } from "react";
import { formReducer, initialForm } from "../reducers/formReducer";

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, initialForm);

  return (
    <form>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            field: "name",
            value: e.target.value,
          })
        }
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            field: "email",
            value: e.target.value,
          })
        }
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            field: "password",
            value: e.target.value,
          })
        }
        placeholder="Enter your password"
      />
      <button type="button" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </form>
  );
}
