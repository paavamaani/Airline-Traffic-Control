import styles from './ArrivalsDeparturesFlights.module.css';

import Card from '../Card/Card';
import Date from '../FlightDate/FlightDate';
import SmallCard from '../SmallCard/SmallCard';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const ArrivalsFlights = props => {
    return (
        <div className={styles["arrival-departure-flights"]}>
            {props.flights.length > 0 ? 
                <div>
                    <h1> {props.heading} </h1>
                    <ul className={styles["arrival-departure-flights-list"]}>
                        {props.flights.map((flight, i) => { 
                            return (
                                <li key={flight._id}>
                                    <Card className={styles["arrival-departure-flight"]} key={flight._id}>
                                        {props.departures && <>
                                            <SmallCard className="small-card">
                                                <Paragraph paragraph="Gate" />
                                                <Heading header="2" heading={flight.arrivalgate ? flight.arrivalgate : " - "} />
                                            </SmallCard>
                                        
                                            <Date date={flight.start_time} />
                                        </>}
                                        
                                        <Heading header="2" heading={flight.source} />
                                        
                                        <div>
                                            <Heading header="2" heading={flight.flight} />
                                            <Heading header="2" heading={flight.name} />
                                        </div>

                                        <Heading header="2" heading={flight.destination} />
                                        
                                        {props.arrivals && <>
                                            <Date date={flight.end_time} />

                                            <SmallCard className="small-card">
                                                <Paragraph paragraph="Gate" />
                                                <Heading header="2" heading={flight.destinationgate ? flight.destinationgate : " - "} />
                                            </SmallCard>

                                            <SmallCard className="small-card">
                                                <Paragraph paragraph="Carousel" />
                                                <Heading header="2" heading={flight.baggage_carousel ? flight.baggage_carousel : " - "} />
                                            </SmallCard>
                                        </>}
                                    </Card>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            : <h1> {props.loader} </h1>}
                   
        </div>
    )
};

export default ArrivalsFlights;