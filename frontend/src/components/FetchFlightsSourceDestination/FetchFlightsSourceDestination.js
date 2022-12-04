import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios/axiosInstance';

import EmployeeNavBar from '../NavBar/EmployeeNavBar';
import Flights from '../Flights/Flights';

import styles from './FetchFlightsSourceDestination.module.css';

const FetchFlightSourceDestination = props => {
    const { source, destination } = useParams();

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get(`/schedule/${source}/${destination}`)
        .then(response => {
            setFlights(response.data);
        })
    }, []);

    return (
        <>
            <EmployeeNavBar />
            <div className={styles["update-flights-wrapper"]}>
                <Flights 
                    flights={flights} 
                    heading={props.heading} 
                    loader={props.loader}
                    buttonText={props.buttonText}
                />
            </div>
        </>
    );
}

export default FetchFlightSourceDestination;