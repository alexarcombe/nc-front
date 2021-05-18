export default function Spinner({ message }) {
  return (
    <div className="spinner">
      <div className="spinner__icon" />
      {message && <p className="spinner__message">{message}</p>}
    </div>
  )
}
