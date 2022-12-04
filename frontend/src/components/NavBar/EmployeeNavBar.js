import { useNavigate } from 'react-router-dom';

import Heading from '../Heading/Heading';

import styles from './NavBar.module.css';

const EmployeeNavBar = props => {
    const navigate = useNavigate();

    const role = localStorage.getItem('role');
    const city = localStorage.getItem('city')

    const onClickLogoutHandler = event => {
        event.preventDefault();

        localStorage.removeItem('token')
        localStorage.removeItem('role');
        localStorage.removeItem('city');
        localStorage.removeItem('airline');

        navigate('/home');
    };

    return (
        <>
            <nav>
                <h1>
                    <a href="/dashboard" >
                        Air Traffic Control 
                    </a>
                </h1>
                
                {role === "Airport" ? 
                    <ul className={styles.navbar}>
                        <li style={{float:"right"}}>
                            <a href={`/assigncarousel/${city}`}>
                                Baggage Carousel
                            </a>
                        </li>
                        <li style={{float:"right"}}>
                            <a href={`/enabledisablegates/${city}`}>
                                Gates
                            </a>
                        </li>
                        <li style={{float:"right"}}>
                            <a href="/logout" onClick={onClickLogoutHandler}>
                                Logout
                            </a>
                        </li>
                    </ul> : 
                    <ul className={styles.navbar}>
                        <li style={{float:"right"}}>
                            <a href="/addflight">
                                Schedule Flight
                            </a>
                        </li>
                        <li style={{float:"right"}}>
                            <a href="/getflightschedules">
                                Update Flight Schedule
                            </a>
                        </li>
                        <li style={{float:"right"}}>
                            <a href="/logout" onClick={onClickLogoutHandler}>
                                Logout
                            </a>
                        </li>
                    </ul>
                }
            </nav>

            {window.location.pathname.includes('dashboard') && 
                <div className={styles[`${role === "Airline" ? "home-airline-employee" : "home-airport-employee"}`]}>
                    <div class="animated-title">
                        <div class="text-top">
                            <div>
                                <span>Welcome </span>
                                <span>
                                    ATC
                                </span>
                            </div>
                        </div>
                        <div class="text-bottom">
                            <div>{role} Employee </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default EmployeeNavBar;
