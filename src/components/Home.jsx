import Button from "./Button"

export default function Home({ id, content }) {
  const [image, title, text, button] = content

  return (
    <article id="top" className="wrapper style1">
      <div id={id} className="anchor"></div>
      <div className="container">
        <div className="row">
          <div className="col-4 col-5-large col-12-medium">
            <div className="image fit">
              <img
                {...image.props.reduce((acc, prop) => {
                  acc[prop.name] = prop.value
                  return acc
                }, {})}
                className="rounded"
              />
            </div>
          </div>
          <div className="col-8 col-7-large col-12-medium">
            <h1>{title.children || "Welcome"}</h1>
            <p>
              {text.children ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur."}{" "}
            </p>
            <Button
              href={`#${
                button.props.find((prop) => prop.name === "href").value
              }`}
              className="large"
            >
              {button.children}
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
