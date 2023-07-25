import Header from "./Header"
import Footer from "./Footer"
import styles from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col">
        <Header />
        <div className={styles.layout}>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout