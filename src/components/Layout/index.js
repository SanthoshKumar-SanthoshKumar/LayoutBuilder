// Write your code here
import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  <>
    <Header />
    <div className="layout-container">
      <Body />
    </div>
    <Footer />
  </>
)

export default Layout
