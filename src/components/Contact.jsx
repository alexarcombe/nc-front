import { createElement } from "react"
import { submit } from "../api/submit"
import { useFormFields } from "../hooks"
import { CHANGE, RESET } from "../types"

const onChange = (e, dispatch) => {
  const { name, value } = e.target
  dispatch({ type: CHANGE, payload: { id: name, value } })
}

const onSubmit = (e, state, dispatch, submitUrl) => {
  e.preventDefault()
  if (state.values.email && submitUrl) {
    submit(submitUrl, state.values)
      .then(() => {
        window.alert(
          `Thank you for the message, we will come back to you on email: ${state.values.email}`
        )
        dispatch({ type: RESET })
      })
      .catch((err) => {
        console.error("Something went wrong.")
        console.error(err)
      })
  }
}

const clear = (dispatch) => {
  dispatch({ type: RESET })
}

export default function Contact({ id, content }) {
  const [title, subtitle, fields, submitButton, cancelButton, submitUrl] =
    content

  const [state, dispatch] = useFormFields(
    fields.children.reduce((acc, field) => {
      const [, , name] = field
      if (name) {
        acc[name.value] = ""
      }
      return acc
    }, {})
  )
  console.log(state)
  return (
    <article className="wrapper style4">
      <div id={id} className="anchor"></div>
      <div className="container medium">
        <h2>{title.children}</h2>
        <p>{subtitle.children}</p>
        <form
          onSubmit={(e) => onSubmit(e, state, dispatch, submitUrl.children)}
        >
          {fields.children.map((field) => {
            const [selector, type, name, placeholder] = field
            return createElement(
              selector.value,
              {
                type: type.value,
                name: name.value,
                placeholder: placeholder.value,
                value: state.values[name.value],
                onChange: (e) => onChange(e, dispatch),
                className: "my-1",
                key: name.value,
              },
              null
            )
          })}
          <ul className="actions">
            <li>
              <input type="submit" value={submitButton.children || "Submit"} />
            </li>
            <li>
              <input
                type="reset"
                value={cancelButton.children || "Clear"}
                className="alt"
                onClick={() => {
                  clear(dispatch)
                }}
              />
            </li>
          </ul>
        </form>
      </div>
    </article>
  )
}
