export default function Button({ href, className, children }) {
  return (
    <a href={href} className={`button ${className}`}>
      {children}
    </a>
  )
}
