import styles from './Home.module.scss'
import MetaTitle from "../../ui/MetaTitle";
import AboutMe from "./about-me/AboutMe";
import Grid from "./grid/Grid";
import Circles from "../../ui/circles/Circles";

const Home = ({links, me}) => {
    return <section className={styles.section}>
        <MetaTitle title='my bio'/>
        <div className={styles.container}>
            <AboutMe me={me}/>
            <Grid links={links}/>
        </div>
        <Circles/>
    </section>
}

export default Home