import Spinner from "../components/Spinner"

export default function LoadingScreen({ message }) {
  return (
    <div className="loading-screen">
      <Spinner message="application loading..." />
    </div>
  )
}
