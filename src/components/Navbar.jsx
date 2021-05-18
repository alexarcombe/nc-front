export default function Navbar({ links }) {
  return (
    <nav id="nav">
      <ul className="container">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
