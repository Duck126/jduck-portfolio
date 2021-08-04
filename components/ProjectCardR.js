import styles from '../styles/ProjectCard.module.css'
import Image from 'next/Image'

const ProjectCardR = (props) => {
    return (
        <div className={styles.grid}>
            <div className={styles.projectImageLeft}>
                <Image height='200px' width='275px' src={props.image} className={styles.projectPic}></Image>
                <div className={styles.imageLink} >
                    <a href={props.gitLink} className={styles.linkText}>View GH Repo</a>
                </div>
                <div className={styles.imageLink}>
                    <a href={props.liveLink} className={styles.linkText}>Try it out!</a>
                </div>
            </div>
            <div className={styles.cardRight}>
                <a href={props.liveLink} className={styles.titleLink} >
                    <h3>{props.title}</h3>
                </a>
                <p className={styles.projectDescription}>{props.description}</p>
                <ul className={styles.toolList}>
                    <li>Built With: </li>
                    {props.builtWith.map((item, index) => {
                        return (
                            <li key={index}>{item}, </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCardR