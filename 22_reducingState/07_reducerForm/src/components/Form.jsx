import { useReducer } from "react";
import { initialForm, reducerForm } from "../reducers/reducerForm";

export default function Form() {
  const [state, dispatch] = useReducer(reducerForm, initialForm);

  return (
    <form>
      <input
        type="text"
        value={state.name}
        placeholder="Enter you name"
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            field: "name",
            value: e.target.value,
          })
        }
      />

      <input
        type="email"
        value={state.email}
        placeholder="Enter your email"
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <input
        type="password"
        value={state.password}
        placeholder="Enter your password"
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            field: "password",
            value: e.target.value,
          })
        }
      />

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </form>
  );
}
