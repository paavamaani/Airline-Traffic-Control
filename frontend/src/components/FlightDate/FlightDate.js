import styles from './FlightDate.module.css';

const FlightDate = props => {
    const date = new Date(props.date);
    const month = date.toLocaleString('en-us', {month:'long'});
    const day = date.toLocaleString('en-US', {day:'2-digit'});
    const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} hrs`;

    return (
        <div className={styles["flight-date"]}>
            <div className={styles["flight-month"]}>{month}</div>
            <div className={styles["flight-day"]}>{day}</div>
            <div className={styles["flight-year"]}>{time}</div>
        </div>
    );
}

export default FlightDate;