import styles from './AboutMe.module.scss'
import Image from 'next/image'
import {APP_URL} from "../../../../constants";
import DescriptionButton from "./description-button/DescriptionButton";

const AboutMe = ({me}) => {
    return <div className={styles.me}>
        <div className={styles.imagewrapper}>
            <Image
                src={`${APP_URL}${me.avatar}`}
                width={190}
                height={190}
                className={styles.image}
                alt={me.siteName}
                quality={100}
            />
        </div>
        <div className={styles.heading}>
            <span>ANDRXW66</span>
        </div>
        <DescriptionButton description={me.description}/>
    </div>
}

export default AboutMe