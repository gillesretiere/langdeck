import Header from "./Header"
import Footer from "./Footer"
import CurrentDecks from "./CurrentDecks"
import classes from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <div className={classes.container}>
        <Header />
        {/*<CurrentDecks />*/}
        <div className={classes.layout}>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout