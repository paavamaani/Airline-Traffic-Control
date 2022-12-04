import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Heading from '../Heading/Heading';
import ShowMessage from '../ShowMessage/ShowMessage';
import FormWrapper from '../FormWrapper/FormWrapper';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './NavBar.module.css';

const UserNavBar = props => {
    const navigate = useNavigate();
    const [message, setMessage] = useState({});

    const onFormSubmitHandler = event => {
        event.preventDefault();

        localStorage.setItem('userCity', event.target[0].value);

        setMessage({
            "className": "show-success-message",
            "message": "Now you can view arrivals and departures"
        });
        
        showMessage();

        document.getElementById("add-city-form").reset();
    };

    const showMessage = () => {
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    };

    const onClickLogoutHandler = event => {
        event.preventDefault();

        localStorage.removeItem('token')
        localStorage.removeItem('role');
        localStorage.removeItem('city');
        localStorage.removeItem('airline');
        localStorage.removeItem('userCity');

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
                        <a href="/dashboard">
                            Home
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/arrivals">
                            Arrivals Screen
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/departures">
                            Departures Screen
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/logout" onClick={onClickLogoutHandler}>
                            Exit Airport
                        </a>
                    </li>
                </ul>
            </nav>

            {window.location.pathname.includes('dashboard') &&
                <>
                    <div className={styles["home-user"]}>
                        <FormWrapper>
                            <Heading header="1" heading="Enter Airport" />

                            {Object.keys(message).length > 0 && <ShowMessage showMessage={message} />}
                            
                            <Form id="add-city-form" onSubmit={onFormSubmitHandler}>
                                <Input label="Airport" type="text" name="city" required={true} />
                                <Button type="submit"> Submit </Button>
                            </Form>
                        </FormWrapper>
                    </div>
                </>
            }
        </>
    )
}

export default UserNavBar;
