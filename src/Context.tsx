import React, { createContext, useReducer } from "react";
import { initialValues } from "./initialValues";

export declare type ValidationSchema = Record<
  string,
  {
    value?: any;
    error?: string;
    required?: boolean;
    validate?: "text" | "number" | "checkbox" | "select";
    minLength?: number;
    maxLength?: number;
    helperText?: string;
  }
>;

type ContextProps = {
  activeStep: number;
  formValues: ValidationSchema;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked?: boolean
  ) => void;
  handleNext: () => void;
  handleBack: () => void;
};

export const AppContext = createContext<ContextProps>({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
});

interface ProviderProps {
  children: React.ReactNode;
}

type State = {
  activeStep: number;
  formValues: ValidationSchema;
};

type Action =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "form-value"; name: string; fieldValue: any }
  | { type: "form-error"; name: string; error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case "decrease":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "form-value":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue,
          },
        },
      };
    case "form-error":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error,
          },
        },
      };

    default:
      return state;
  }
}

export function StepsProvider({ children }: ProviderProps) {
  const [{ activeStep, formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: initialValues,
  });

  const handleNext = () => dispatch({ type: "increase" });
  const handleBack = () => dispatch({ type: "decrease" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked?: boolean
  ) => {
    const { type, name, value } = event.target;

    const fieldValue = type === "checkbox" ? checked : value;

    dispatch({ type: "form-value", name, fieldValue });

    const fieldName = initialValues[name];
    if (!fieldName) return;

    const { required, validate, minLength, maxLength, helperText } = fieldName;

    let error = "";

    if (required && !fieldValue) error = "This field is required";
    if (minLength && value && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`;
    if (maxLength && value && value.length > maxLength)
      error = "Maximum length exceeded!";
    if (validate) {
      switch (validate) {
        case "text":
          if (value) error = helperText || "This field accepts text only.";
          break;

        case "number":
          if (value) error = helperText || "This field accepts numbers only.";
          break;

        case "checkbox":
          if (!checked) error = helperText || "Please provide a valid value.";
          break;

        case "select":
          if (!value) error = helperText || "Please select a value.";
          break;

        default:
          break;
      }
    }

    dispatch({ type: "form-error", name, error });
  };

  return (
    <AppContext.Provider
      value={{
        activeStep,
        formValues,
        handleChange,
        handleNext,
        handleBack,
      }}
    >
      <div className="mui-step-form">{children}</div>
    </AppContext.Provider>
  );
}
