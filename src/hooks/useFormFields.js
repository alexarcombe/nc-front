import { useReducer } from "react"
import { CHANGE, SET_FIELDS, SET_MODE, SET_ERRORS, RESET } from "../types"

const onChange = (state, payload) => {
  const { id, value } = payload
  return {
    ...state,
    values: { ...state.values, [id]: value },
    mode: "Changed",
  }
}

const setFormFields = (state, payload) => {
  return {
    values: { ...payload.values },
    init: state.init,
    mode: payload.mode,
    errors: {},
  }
}

function reducer(state, { type, payload }) {
  switch (type) {
    case CHANGE:
      return onChange(state, payload)
    case SET_FIELDS:
      return setFormFields(state, payload)
    case SET_MODE:
      return { ...state, mode: payload }
    case SET_ERRORS:
      return { ...state, errors: payload }
    case RESET:
      console.log("reset")
      return { ...state, values: { ...state.init } }
    default:
      return state
  }
}

export function useFormFields(initialFormValues) {
  const [state, dispatch] = useReducer(reducer, {
    values: { ...initialFormValues },
    init: { ...initialFormValues },
    mode: "Create",
    errors: {},
  })

  return [state, dispatch]
}
