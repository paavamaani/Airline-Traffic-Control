# CMPE202-Air-Traffic-Control

[Link to Sprint Report](https://docs.google.com/spreadsheets/d/1mvWnd-HJT9EoHF7PwS7zOvFDFoP84AuZNkjxf5H9ZCM/edit?usp=sharing) 

[Link to Sprint Journal](https://docs.google.com/spreadsheets/d/1niEOolo8XTF8XMcAborXSGIpgGHB62KjuzCzXDKLGhE/edit?usp=sharing)

[Link to Task Board](https://github.com/orgs/gopinathsjsu/projects/65)

[Deployed Application link](http://cmpe-202-421583512.us-east-1.elb.amazonaws.com:3000/home)

## Team Members:
| Project Members | GitHub-Profile-Link | 
| ----- | ----- |
| Paavamaani Manchala | https://github.com/paavamaani |
| Deeksha Spoorthi Sammidi | https://github.com/sdsr1704 |
| Arun Garlapati | https://github.com/arun-garlapati |
| Venkatesh Kankanala | https://github.com/Venkatesh-Kankanala |

## Scrum Meeting Days - Tuesday, Thursday, Saturday
## 2 week sprint

# XP Values

- Communication
Inherently, software development is a team sport that relies on communication to communicate information from one team member to the rest of the team. XP emphasizes the significance of good communication - face-to-face conversation using a white board or other drawing method.
- Simplicity
"What is the simplest thing that will work?" is the definition of simplicity. The goal is to reduce waste and accomplish just what is absolutely necessary, such as keeping the system architecture as basic as possible so that it is easier to maintain, support, and change. Simplicity also implies addressing only the requirements that you are aware of; do not attempt to forecast the future.
- Feedback
Teams can find areas for development and update their procedures by receiving continual feedback on their prior efforts. Simple design is also supported by feedback. Your team creates something, receives input on its design and implementation, and then iterates on the product.
- Respect
Members of your team must respect one another in order to communicate, offer and accept feedback that values your connection, and collaborate to discover simple designs and solutions.

Together, we followed the above XP values during entire course of Project.


# Technology stack

## Frontend

- ReactJs

## Backend

- NodeJs
- ExpressJS

## Database

- MongoDb

## Deployment

- AWS EC2

# Design Choices:

### Why NoSQL in a database?

- We chose NoSQL over a relational architecture because of its own access languages for interpreting data being stored.
- It offers a developer-centric database, which simplifies database design and access to application programming interfaces.
- Before employing databases, developers do not need to be concerned about their internal workings.
- NoSQL databases allow you to work on what you need rather than pushing a schema on the database.

### Why is MongoDB used?

- MongoDB allows different data hierarchies. - Secondary indexes provide for flexibility in datamodel.
- Because Mongo DB is schemaless, we do not define the schema at the outset.

### Why MERN Stack - Performance and User Interface Rendering
- React JS is the best when it comes to UI layer abstraction. Because React is only a library, you may build the application and structure the code anyway you like. As a consequence, in terms of UI rendering and performance, it exceeds Angular.

- Cost-effective
Because MERN Stack uses only one language throughout, Javascript, a firm will benefit from hiring only Javascript experts rather than specialists for each technology. This choice will save you both time and money.

- Open Source and Free
MERN employs only open-source technology. This feature allows a developer to use open sources to find answers to challenges that may emerge during development.

# Contribution
Contribution in terms of component ownership
### Paavamaani Manchala 
- Enable/Disable gates
- Random gate assignment
### Deeksha Spoorthi Sammidi 
- Assign baggage carousel
- Arrival & Departures
### Arun Garlapati
- Add flight
- Edit flight
- Admin login
### Venkatesh Kankanala
- Home page & Authentication
- sign up

# Feature set

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

# UI Wireframes

# Diagrams

# Steps to run the application
1. git clone [repo](https://github.com/gopinathsjsu/team-project-team-thirteen.git)
2. Install dependencies for both frontend and backend npm install ```npm install```
3. Run backend - ```npm start``` 
   Run frontend - ```npm start```
