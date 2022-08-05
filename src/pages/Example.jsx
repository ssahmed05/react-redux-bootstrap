import Header from "../components/Header"
import Meta from "../components/Meta"

const Example = () => {
  // page content
  const pageTitle = 'Example'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}
export default Example
