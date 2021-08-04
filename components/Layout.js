import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import AtomAnimation from "./AtomAnimation";

const Layout = ({ children }) => {

    return (
        <div className={styles.containerOne}>
            <Header />
            <div className={styles.containerTwo}>{children}</div>
            <AtomAnimation top='70%' left='85%' />
            <AtomAnimation top='20%' left='20%' />
            <Footer />
        </div>
    );
}

export default Layout;