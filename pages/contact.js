import styles from '../styles/Contact.module.css'


const contact = () => {
    return (
        <>
            <div className={styles.headingcontainer}>
                <h1 className={styles.heading}>Contact Info</h1>
                <p className={styles.headerText}>Feel free to reach out using any of the methods below! Or explore more GH projects - For quickest response reach out via LinkedIn :)</p>
            </div>
            <div className={styles.grid}>
                <div className={styles.sidebar}>
                    <ul className={styles.contactList}>
                        <a href="https://www.linkedin.com/in/duck126/"><li className={styles.contactItem}>
                            <div className={styles.iconwrap}><img className={styles.contactIcon} height='150' width='150' src='/linked-in.png'></img></div>
                            <p className={styles.contactItemText}>LinkedIn</p>
                        </li></a>
                        <a href="https://github.com/Duck126"><li className={styles.contactItem}>
                            <div className={styles.iconwrap}><img className={styles.contactIcon} height='150' width='150' src='/github-icon.png'></img></div>
                            <p className={styles.contactItemText}>Github</p>
                        </li></a>
                        <a href = "mailto: jduck1133@gmail.com"><li className={styles.contactItem}>
                            <div className={styles.iconwrap}><img className={styles.contactIcon} height='150' width='150' src='/email-icon.png'></img></div>
                            <p className={styles.contactItemText}>Email</p>
                        </li></a>
                        <a href="https://twitter.com/DevelopDuck"><li className={styles.contactItem}>
                            <div className={styles.iconwrap}><img className={styles.contactIcon} height='150' width='150' src='/twitter-icon.png'></img></div>
                            <p className={styles.contactItemText}>Twitter</p>
                        </li></a>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default contact;