# Air-Traffic-Control

<p> The website is for airport management and has various features such as user view (arrivals/departures), employee login (airline/airport), admin management, and baggage handling. The user view shows incoming/outgoing flights and their gate numbers. Employees can log in and access their designated areas, such as adding flights for airline employees and managing gates for airport employees. The admin can manage employee accounts and add new employees. The system assigns gate numbers to flights automatically and manages baggage carousel assignments efficiently. which is deployed in the AWS Elastic Compute Cloud (EC2) environment and is equipped with an autoscaling load balancer to manage high traffic demands</p>

<img src="https://cdn.dribbble.com/users/330915/screenshots/6170423/1_travel_anim.gif">

## Technology stack
<p align="left"> 
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> 
</p>

### Frontend

- React JS

### Backend

- Node JS
- Express JS

### Database

- MongoDB

### Deployment

- AWS EC2

## Feature set

### Use Case Diagram

![UseCase Diagram (1)](https://i.imgur.com/xYPJDbM.jpg)

### Architecture Diagram

![Screen Shot 2022-12-01 at 11.50.50 AM](https://i.imgur.com/kj1Upix.png)

### Component Diagram

![sprintersComponent](https://i.imgur.com/onIKBLV.jpg)

### Deployment Diagram

![Deployment](https://i.imgur.com/A4qXnH5.png)

### DB schema

![Screen Shot 2022-12-01 at 1.20.13 PM](https://i.imgur.com/dk9zDgC.png)

## Feature set

### Homepage

- should display the homepage with options to either enter into userview or employee login
- should display login page upon clicking login button
- should display page to choose arrivals/departures from userview

### User view - Arrivals

- should display arrival flights with gate numbers and baggage carousel

### User view - Departures

- should display departure flights with gate numbers

### Signin - employee (airline & airport)

- employee upon filling details should be able to sign in
- based on role employees are redirected either to airline or airport
- should display error in case of wrong credentials

### Admin

- should be able to login successfully
- should be able to add employees
- should display error in case of wrong credentials

### Airline Employee

- Should be able to add the flight
- Should be able to edit flight details
- upon adding flights, "GATE" should be randomly assigned without any conflicts

### Airport Employee

- Should display the disabled and enabled gates in the terminals
- should be able to disable/enable the gates
- should be able to assign baggage carousels
- Baggage carousels could be assigned to multiple flights in case of same airline, if not should not display the occupied ones in the dropdown.

## UI Wireframes

![UserView](https://i.imgur.com/Raegfvo.png)
![SignIn](https://i.imgur.com/a1V9aTM.png)
![HomePage](https://i.imgur.com/uqmk24z.png)
![flightdepartures](https://i.imgur.com/R9XaR57.png)
![flight arrival](https://i.imgur.com/s62Omo5.png)
![EnableDisableGates.drawio](https://i.imgur.com/mzZSo9W.png)
![BaggageCarousel](https://i.imgur.com/nHZVZLJ.png)
![AirportEmployeeDashboard](https://i.imgur.com/Bz8It97.png)
![AirlineEmployeeDashboard](https://i.imgur.com/OVCxMDP.png)
![addFlight](https://i.imgur.com/iQDN44W.png)

## Steps to run the application

1. git clone [repo](https://github.com/paavamaani/Airline-Traffic-Control.git)
2. Install dependencies for both frontend and backend npm install ```npm install```
3. Run backend - ```npm start``` 
   Run frontend - ```npm start```

## Application screenshots

### Homepage

<img width="1427" alt="Screen Shot 2022-11-30 at 6 00 06 PM" src="https://user-images.githubusercontent.com/31122229/204947881-399e1194-fda7-4b73-9bbc-0048914ad311.png">

### Signin

<img width="1439" alt="Screen Shot 2022-11-30 at 5 48 25 PM" src="https://user-images.githubusercontent.com/31122229/204946476-94c06793-e2e8-48d8-a7a5-2789e09a876f.png">

### User view

<img width="1440" alt="Screen Shot 2022-11-30 at 5 46 52 PM" src="https://user-images.githubusercontent.com/31122229/204946258-834f91bd-c5a4-4bf3-b3b5-7c5fc801a751.png">
<img width="1436" alt="Screen Shot 2022-11-30 at 5 47 27 PM" src="https://user-images.githubusercontent.com/31122229/204946343-d957d6ae-7840-47c3-9154-1445a7a708b7.png">
<img width="1439" alt="Screen Shot 2022-11-30 at 5 48 09 PM" src="https://user-images.githubusercontent.com/31122229/204946426-d3798986-cb5d-4bac-82ff-dd53812cca8f.png">

### Airport employee

<img width="1418" alt="Screen Shot 2022-11-30 at 5 48 54 PM" src="https://user-images.githubusercontent.com/31122229/204946520-c48444e1-02e7-4477-9141-35af2453ba7c.png">
<img width="1436" alt="Screen Shot 2022-11-30 at 5 49 07 PM" src="https://user-images.githubusercontent.com/31122229/204946541-2e6e2b93-6169-4dac-b8a5-9fe5bd83df50.png">
<img width="1435" alt="Screen Shot 2022-11-30 at 5 55 34 PM" src="https://user-images.githubusercontent.com/31122229/204947300-4acaf2b7-f796-4dad-9888-a0643bde0271.png">

### Airline employee

<img width="1430" alt="Screen Shot 2022-11-30 at 5 59 41 PM" src="https://user-images.githubusercontent.com/31122229/204947823-1de02cdc-ed12-460e-95ba-e22d9d131839.png">

<img width="1439" alt="Screen Shot 2022-11-30 at 5 57 20 PM" src="https://user-images.githubusercontent.com/31122229/204947515-ed629fdb-eed2-4428-bbf5-55aa4c1ac18a.png">

### Deployement screenshots

![Screen Shot 2022-12-01 at 4.18.41 PM](https://i.imgur.com/8OfHywx.png)

![Screen Shot 2022-12-01 at 4.19.42 PM](https://i.imgur.com/QFpWUXb.png)

![Screen Shot 2022-12-01 at 4.19.42 PM](https://i.imgur.com/EBhld0F.png)
