import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProjectCardR from '../components/ProjectCardR'
import { projectData } from '../components/data/projectData'


export default function Home() {

  return (
    <>
      <Head>
        <title>J Duck Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.titleContainer}>
        <div className={styles.textContainer}>
        <h1 className={styles.titleMain}>
          Projects
          </h1>
        </div>
      </div>

      <main className={styles.main}>
        {projectData.map((item, index) => {
          return(
            <ProjectCardR 
            key={index}
          image={item.image} 
          title={item.title} 
          description={item.description} 
          builtWith={item.builtWith} 
          gitLink={item.ghLink} 
          liveLink={item.liveLink}/>
          )
        })}
      </main>


    </>
  )
}
