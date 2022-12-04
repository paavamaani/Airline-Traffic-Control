
import Heading from '../Heading/Heading';

import styles from '../NavBar/NavBar.module.css';

import flying from '../../images/home.jpg';

import './Home.css';

const Home = props => {
    const onClickHandler = () => {
        localStorage.setItem('role', 'user');
    };

    return (
        <>
            <nav>
                <h1>
                    <a href="/home" >
                        Air Traffic Control 
                    </a>
                </h1>
                
                <ul className={styles.navbar}>
                    <li style={{float:"right"}} onClick={onClickHandler}>
                        <a href="/dashboard">
                            Enter Airport
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/loginemployee">
                            Employee
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/loginadmin">
                            Admin
                        </a>
                    </li>
                </ul>
            </nav>

            {window.location.pathname.includes('home') && 
                <>
                    <div className={styles["home-wrapper"]}>
                        
                    </div>

                    <div class="animated-title">
                        <div class="text-top">
                            <div>
                                <span>Welcome To </span>
                                <span>
                                    ATC
                                </span>
                            </div>
                        </div>
                        <div class="text-bottom">
                            <div>Lets Manage Air Traffic</div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Home;