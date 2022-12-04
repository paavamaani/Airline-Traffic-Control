import { useNavigate } from 'react-router-dom';

import Heading from '../Heading/Heading';

import styles from './NavBar.module.css';

const AdminNavBar = props => {
    const navigate = useNavigate();

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

                <ul className={styles.navbar}>
                    <li style={{float:"right"}}>
                        <a href="/createemployee">
                            Create Employee
                        </a>
                    </li>
                    <li style={{float:"right"}} onClick={onClickLogoutHandler}>
                        <a href="/logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
            
            {window.location.pathname.includes('dashboard') && 
                <>
                    <div className={styles["home-admin"]}></div>
                    
                    <div class="animated-title">
                        <div class="text-top">
                            <div>
                                <span style={{color: "#000000"}}>Welcome </span>
                                <span style={{color: "#000000"}}>
                                    ATC
                                </span>
                            </div>
                        </div>
                        <div class="text-bottom">
                            <div style={{color: "#000000"}}>Admin</div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default AdminNavBar;
