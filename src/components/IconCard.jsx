export default function IconCard({ iconClass, title, text }) {
  return (
    <div className="col-4 col-6-medium col-12-small">
      <section className="box style1">
        <span className={`icon featured ${iconClass}`}></span>
        <h3>{title}</h3>
        <p>{text}</p>
      </section>
    </div>
  )
}
