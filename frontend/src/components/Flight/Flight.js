import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios/axiosInstance';

import styles from './Flight.module.css';

import Card from '../Card/Card';
import Date from '../FlightDate/FlightDate';
import Button from '../Button/Button';
import SmallCard from '../SmallCard/SmallCard';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const Flight = props => {
    const navigate = useNavigate();
    
    const onClickHandler = flightId => {
        navigate(`/selectflight/${flightId}`);
    };

    return (
        <Card className={styles.flight} key={props.flight._id}>
            <SmallCard className="small-card">
                <Paragraph paragraph="Gate" />
                <Heading header="2" heading={props.flight.arrivalgate ? props.flight.arrivalgate : " - "} />
            </SmallCard>
            
            <Date date={props.flight.start_time} />
            
            <Heading header="2" heading={props.flight.source} />
            
            <div>
                <Heading header="2" heading={props.flight.flight} />
                <Heading header="2" heading={props.flight.name} />
            </div>

            <Heading header="2" heading={props.flight.destination} />
            
            <Date date={props.flight.end_time} />

            <SmallCard className="small-card">
                <Paragraph paragraph="Gate" />
                <Heading header="2" heading={props.flight.destinationgate ? props.flight.destinationgate : " - "} />
            </SmallCard>
            
            {props.buttonText && <Button id={`${props.flight._id}`} type="button" onClick={onClickHandler} > {props.buttonText} </Button>}
        </Card>
    )
}

export default Flight;
