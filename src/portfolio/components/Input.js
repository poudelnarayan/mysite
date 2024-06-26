import React, { useReducer, useEffect } from "react";

import { validate } from "../../shared/utils/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchhandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchhandler}
        value={inputState.value}
        name={props.name}
        autoComplete="off"
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchhandler}
        value={inputState.value}
        name={props.name}
        autoComplete="off"
      />
    );

  return (
    <div
      className={` ${props.element === "input" && "col-12 col-md-4"}  ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className="errorText">{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
