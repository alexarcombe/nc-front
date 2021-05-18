import { useEffect, useState } from "react"
import { getPages } from "./api/pages"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CustomPage from "./components/CustomPage"
import LoadingScreen from "./screens/LoadingScreen"
import ErrorScreen from "./screens/ErrorScreen"

function App() {
  const [pages, setPages] = useState([])
  useEffect(() => {
    getPages(setPages)
  }, [setPages])

  const links = pages.map((page) => ({
    id: page.id,
    title: page.title,
  }))

  if (links.length === 0) {
    return <LoadingScreen />
  } else if (pages.errors) {
    return <ErrorScreen errors={pages.errors} />
  } else {
    return (
      <>
        <Navbar links={links} />
        {pages.map((page) => {
          const { id, _id, content } = page
          if (page.templateId === "60a1f639a4e7a65f7227f54d") {
            return <Home id={id} key={_id} content={content} />
          } else if (page.templateId === "60a1f77fa4e7a65f7227f555") {
            return <About id={id} key={_id} content={content} />
          } else if (page.templateId === "60a1f93fa4e7a65f7227f55f") {
            return <Contact id={id} key={_id} content={content} />
          } else {
            return <CustomPage id={id} key={_id} content={content} />
          }
        })}
        <Footer />
      </>
    )
  }
}

export default App
