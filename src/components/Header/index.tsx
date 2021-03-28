import { SigninButton } from "../SigninButton";
import styles from "./styles.module.scss";

export function Header (){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SigninButton/>
            </div>
        </header>

    );
}