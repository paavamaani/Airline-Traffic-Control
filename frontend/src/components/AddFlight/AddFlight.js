import {useState} from 'react';
import axios from '../../axios/axiosInstance';

import Heading from '../Heading/Heading';
import ShowMessage from '../ShowMessage/ShowMessage';
import FormWrapper from '../FormWrapper/FormWrapper';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import EmployeeNavBar from '../NavBar/EmployeeNavBar';

import styles from './AddFlight.module.css';

const AddFlight = props => {
    const airline = localStorage.getItem('airline');
    const [message, setMessage] = useState({});

    const onFormSubmitHandler = event => {
        event.preventDefault();

        let flightSchedule = {
            "baggage_carousel": null,
            "arrivalgate": null,
            "destinationgate": null
        };
    
        for(let i = 0; i < event.target.length - 1; i++) {
            flightSchedule[event.target[i].name] = event.target[i].value;
        }
    
        axios.post(`/schedule`, flightSchedule)
        .then(response => {
            setMessage({
                "className": "show-success-message",
                "message": "Flight schedule added successfully"
            });
            
            showMessage();

            document.getElementById("add-flight-form").reset();
        })
        .catch(error => {
            setMessage({
                "className": "show-error-message",
                "message": error.response.data.message
            });
        });
    };

    const showMessage = () => {
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    };

    return (
        <>
            <EmployeeNavBar />
            <div className={styles["add-flight-wrapper"]}>
                
                <FormWrapper>
                    <Heading header="1" heading="Schedule Flight" />

                    {Object.keys(message).length > 0 && <ShowMessage showMessage={message} />}
                    
                    <Form id="add-flight-form" onSubmit={onFormSubmitHandler}>
                        <Input label="Flight Id" type="text" name="flight" required={true} />
                        <Input label="Airline" type="text" name="name" value={airline} disabled={true} required={true} />
                        <Input label="Source" type="text" name="source" required={true} />
                        <Input label="Destination" type="text" name="destination" required={true} />
                        <Input label="Start Time" type="datetime-local" name="start_time" required={true} />
                        <Input label="End Time" type="datetime-local" name="end_time" required={true} />
                        <Button type="submit"> Schedule </Button>
                    </Form>
                </FormWrapper>
            </div>
        </>
    );
};

export default AddFlight;
