export default function ErrorScreen({ errors }) {
  let message = errors || "Sorry something went wrong, plese reload"
  return (
    <div className="error-screen">
      <p>{message}</p>
    </div>
  )
}
