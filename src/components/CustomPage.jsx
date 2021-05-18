import { createElement } from "react"

export default function CustomPage({ id, content }) {
  return (
    <article className="wrapper style1">
      <div id={id} className="anchor"></div>
      {content.map((field, index) => {
        const { selector, props, children } = field
        const elementProps = props.reduce(
          (acc, prop) => {
            if (prop.name) {
              acc[prop.name] = prop.value
            }
            return acc
          },
          { key: index }
        )
        return createElement(selector, elementProps, children || null)
      })}
    </article>
  )
}
