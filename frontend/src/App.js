import { Routes, Route } from 'react-router-dom';
 
import './App.css';

import AddFlight from './components/AddFlight/AddFlight';
import FlightSchedulesForm from './components/FlightSchedulesForm/FlightSchedulesForm';
import FetchFlightSourceDestination from './components/FetchFlightsSourceDestination/FetchFlightsSourceDestination';
import FetchFlightsCity from './components/FetchFlightsCity/FetchFlightsCity';
import SelectFlight from './components/SelectFlight/SelectFlight'
import EnableDisableGates from './components/EnableDisableGates/EnableDisableGates';
import ArrivalsDepartures from './components/ArrivalsDepartures/ArrivalsDepartures';
import CreateEmployee from './components/CreateEmployee/CreateEmployee';
import CreateUser from './components/CreateUser/CreateUser';
import LoginUser from './components/LoginUser/LoginUser';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route 
                    path="/home" 
                    element={
                        <Home />
                    } 
                />
                <Route 
                    path="/dashboard" 
                    element={
                        <Dashboard />
                    } 
                />
                <Route 
                    path="/addflight" 
                    element={<AddFlight heading="Schedule Flight" />} 
                />
                <Route 
                    path="/getflightschedules" 
                    element={
                        <FlightSchedulesForm 
                            heading="Provide Source and Destination" 
                        />
                    } 
                />
                <Route 
                    path="/flightschedules/:source/:destination" 
                    element={
                        <FetchFlightSourceDestination 
                            heading="Update Flight Schedule" 
                            loader="Loading Flights..." 
                            buttonText="Update"
                        />
                    } 
                />
                <Route 
                    path="/assigncarousel/:city" 
                    element={
                        <FetchFlightsCity 
                            heading="Select Flight and Assign Carousel" 
                            loader="Loading Flights to assign carousel..." 
                            buttonText="Assign"
                        />
                    } 
                />
                <Route 
                    path="/selectflight/:flightId" 
                    element={
                        <SelectFlight />
                    } 
                />
                <Route 
                    path="/enabledisablegates/:city" 
                    element={
                        <EnableDisableGates 
                            heading="Maintain Gates"
                            loader="Loading Terminals for Airport ..."  
                        />
                    } 
                />
                <Route 
                    path="/arrivals" 
                    element={
                        <ArrivalsDepartures 
                            heading="Arrivals"
                            arrivals={true}
                            loader="Loading Flights..."  
                        />
                    } 
                />
                <Route 
                    path="/departures" 
                    element={
                        <ArrivalsDepartures 
                            heading="Departures"
                            departures={true}
                            loader="Loading Flights..."  
                        />
                    } 
                />
                <Route 
                    path="/createemployee" 
                    element={
                        <CreateEmployee
                            heading="Create Employee"
                        />
                    } 
                />
                <Route 
                    path="/createuser" 
                    element={
                        <CreateUser
                            heading="Sign Up"
                        />
                    } 
                />
                <Route 
                    path="/loginadmin" 
                    element={
                        <LoginUser
                            role="admin"    
                            heading="Log In"
                        />
                    } 
                />
                <Route 
                    path="/loginemployee" 
                    element={
                        <LoginUser
                            role="employee"    
                            heading="Log In"
                        />
                    } 
                />
                <Route 
                    path="/loginuser" 
                    element={
                        <LoginUser
                            role="user"    
                            heading="Log In"
                        />
                    } 
                />
            </Routes>
        </div>
    );
}

export default App;
