import axios from "axios"

export const getPages = (setPages) => {
  axios
    .get("https://next-chapter.herokuapp.com/api/pages")
    .then((res) => {
      let pages = []
      if (res.data) {
        pages = res.data.sort((a, b) => a.index - b.index)
      }
      setPages(pages)
    })
    .catch((errors) => {
      console.error(errors)
      setPages({
        errors: "Failed to load content.",
      })
    })
}
