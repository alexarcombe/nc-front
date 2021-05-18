import Button from "./Button"
import IconCard from "./IconCard"

export default function About({ id, content }) {
  const [title, subtitle, iconCards, text, button] = content

  return (
    <article className="wrapper style2">
      <div id={id} className="anchor"></div>
      <div className="container">
        <h2>{title.children}</h2>
        <p className="fs-big">{subtitle.children}</p>
        {iconCards && (
          <div className="row aln-center">
            {iconCards.children.map((iconCard) => {
              const [iconClass, title, text] = iconCard
              return (
                <IconCard
                  key={title.value}
                  iconClass={iconClass.value}
                  title={title.value}
                  text={text.value}
                />
              )
            })}
          </div>
        )}
        <div>
          <p className="fs-big m-2">{text.children}</p>
          {button && (
            <Button
              href={`#${
                button.props.find((prop) => prop.name === "href").value
              }`}
              className="large"
            >
              {button.children}
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
