import styles from '../styles/About.module.css'
import Image from 'next/image'
import { useState } from 'react';
import {BiArrowToBottom, BiArrowToTop} from 'react-icons/bi';



const about = () => {

    const [dropDown1, setDropDown1] = useState(false);

    const showContent1 = () => setDropDown1(!dropDown1);

    const [dropDown2, setDropDown2] = useState(false);

    const showContent2 = () => setDropDown2(!dropDown2);

    const [dropDown3, setDropDown3] = useState(false);

    const showContent3 = () => setDropDown3(!dropDown3);

    return (
        <>
            <div className={styles.imagecontainer}>
                <Image height='125' width='125' src='/profile.png' className={styles.aboutImage} />
                <h1 className={styles.heading}>About Me</h1>
                <p className={styles.aboutText}>Hi! I'm John Duck a Front End Developer from Austin Texas. I was introduced to web development in 2018 when I attended the UT Austin Coding Bootcamp, and have been hooked ever since! I have around 3 years experience building Web Applications.  </p>
                <a className={styles.downloadButton} href='/../public/JonathanDuckPortfolio.pdf' download='/JonathanDuckPortfolio.pdf'>Download Resume</a>
            </div>
            <div className={styles.aboutGrid}>
                <div className={styles.gridColumn}>
                    <h3 className={styles.columnHeading} onClick={showContent1}>Work History {dropDown1 ? <BiArrowToTop className={styles.icon} /> : <BiArrowToBottom className={styles.icon}/>}</h3>
                    <ul className={dropDown1 ? styles.aboutlistActive : styles.aboutlist}>
                        <li className={styles.aboutlistitem}>Triage Specialist - Wipro LTD @ Facebook</li>
                        <ul className={styles.subList}>
                            <li>Supported various engineering workflows centered around VS Code / IDE configuration</li>
                            <li>Maintained incoming issue reports, Identified, Confirmed and
                            Escalated reported issues for core IDE platform and variousextensions.</li>
                            <li>Offered workarounds or referenced documentation for supported
                            features related to general Visual Studio Code configuration, fostering increased Engineer Productivity</li>
                        </ul>
                        <li className={styles.aboutlistitem}>Student / Freelance Developer , UT Austin Coding Bootcamp</li>
                        <ul className={styles.subList}>
                            <li>Built various web applications using frameworks such as React, Redux, Angular, MongoDB, Jade</li>
                            <li>Studied aspects of Object Oriented Programming with JavaScript</li>
                            <li>Utilized Passport JS to integrate user authentication into completed apps</li>
                        </ul>
                        <li className={styles.aboutlistitem}>Senior Radio Telephone Operator, United States Army</li>
                        <ul className={styles.subList}>
                            <li>Supervised and Instructed personnel in the operation and general maintenance of high grade communication equipment.</li>
                            <li>Provided and Oversaw high level maintenance on equipment which resulted in over 95% of all systems remaining consistently fully operational.</li>
                        </ul>
                        <li className={styles.aboutlistitem}>Unmanned Aerial System Operator, United States Army</li>
                        <ul className={styles.subList}>
                            <li>Conducted air reconnaissance, surveillance, targeting and acquisition missions that provided the Division with vital information that attributed to the success of the missions.</li>
                            <li>Successfully recovered Unmanned Aerial System after every flight with no loss or damage to the system valued at upwards of $250,000</li>
                        </ul>
                    </ul>
                </div>
                <div className={styles.gridColumn}>
                    <h3 className={styles.columnHeading} onClick={showContent2}>Skills {dropDown2 ? <BiArrowToTop className={styles.icon} /> : <BiArrowToBottom className={styles.icon}/>}</h3>
                    <ul className={dropDown2 ? styles.aboutlistActive : styles.aboutlist}>
                        <li className={styles.aboutlistitem}>React JS</li>
                        <li className={styles.aboutlistitem}>Next JS</li>
                        <li className={styles.aboutlistitem}>Gatsby JS</li>
                        <li className={styles.aboutlistitem}>Node JS</li>
                        <li className={styles.aboutlistitem}>JavaScrip</li>
                        <li className={styles.aboutlistitem}>Tailwind CSS</li>
                        <li className={styles.aboutlistitem}>MySQL</li>
                        <li className={styles.aboutlistitem}>Git</li>
                        <li className={styles.aboutlistitem}>Axios</li>
                        <li className={styles.aboutlistitem}>SQL</li>
                        <li className={styles.aboutlistitem}>HTML5</li>
                        <li className={styles.aboutlistitem}>CSS</li>
                    </ul>
                </div>
                <div className={styles.gridColumn}>
                    <h3 className={styles.columnHeading} onClick={showContent3}>Hobbies {dropDown3 ? <BiArrowToTop className={styles.icon} /> : <BiArrowToBottom className={styles.icon}/>}</h3>
                    <ul className={dropDown3 ? styles.aboutlistActive : styles.aboutlist}>
                    <li className={styles.aboutlistitem}>Swimming</li>
                    <li className={styles.aboutlistitem}>Hiking</li>
                    <li className={styles.aboutlistitem}>Building Web Apps</li>
                    <li className={styles.aboutlistitem}>COFFEE</li>
                    <li className={styles.aboutlistitem}>Building Furniture</li>
                    <li className={styles.aboutlistitem}>Reading</li>
                    <li className={styles.aboutlistitem}>Going to the dog park</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default about;