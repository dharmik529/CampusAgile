# Weekly Report | 10/18/2023

## **1. Agenda and Status.**

#### Agenda

- Discuss updates made to the front-end in terms of user interface, and overall design
- Discuss updates made to the backend regarding testing user endpoints

#### Goals from Last Week
- Continue creating front-end components
- Continue integrating schema into nestjs
- Continue making endpoints in backend
- Finish user authentication
- Start working on the chatbot

#### Progress and Issues
- Tested endpoints for user throughouly and made sure they work
- Updated Hashed password now works even though it was not showing in the JSON
- Started working on other endpoints for the backend

#### Goals for Next Week
- Test and refine the functionality of the Kanban and Scrum features, focusing on design and usability.
- Ensure that the deployment process is error-free and doesn't disrupt the development cycle.
- Work on setting up and testing the authentication system, which is crucial for the application's security and user access.

## **2. Contributions of individual team members.**

### Dharmik Patel

#### Goals from last week
- Create a sample app for the chatbot
- Add new endpoints into the postman
- Automate a git pull and redeploy on the vps

#### Progress and Issues
- Added endpoints, awaiting new endpoints from backend team
- Still working on the chatbot, figuring out how to integrate it into the application
- Automated git pull and redeploy on the vps

#### Goals for Next Week
- Continue working on the chatbot
- Look into Travis CI for automated testing
- Look into Jest for Unit testing

### Love Patel

#### Goals from last week
- Finished the User's endpoints. Listed all endpoints for the other entities.

#### Progress and issues
- Separate the update password field for user to a separate endpoint (/update/passsword/[id])
- Resolved Update method is having issues with updating all fields.
#### Goals for Next Week
- Start the other endpoints and finish testing them out.
- Test and fix current and future issues for this week and next week that come up.
- Fix the update password issue with the new endpoint.

### Dev Patel

#### Goals from last week
- Finish working on hashing password.
- Work on connecting front end and backend

#### Progress and Issues
- Resolved the issue where the JSON would still show old hashed password. Now, if the user updates the password, it will show new hashed password.
- Set up the authentication files for the application. Needs to be tested when performing login.

#### Goals for Next Week
- Work on authentication and potentially wrap up with extended testing.
- Assist Love with any other endpoints and testing on Postman.
- Continue to work on connecting front end and backend.

### Deep Patel

#### Goals from last week
- My focus will shift towards building the foundational elements of the Kanban and Scrum features, two of the core components of our CampusAgile platform. Additionally, I will be collaborating with team members Darsh and Dravya to assign specific tasks related to these features.

#### Progress and Issues
- Made significant progress in building foundational elements for Kanban and Scrum features. For example, added base designs for the cards, all navbar sizes, and structure both Kanban and Scrum software. 
- Collaborated with team members Darsh and Dravya to assign specific tasks for these features.
- No major issues encountered during the week.
#### Goals for Next Week
- Continue development work on Kanban and Scrum features. 
- Test and refine the functionality of these core components.
- Coordinate with the team to ensure seamless integration of the features into CampusAgile.

### Darsh Patel

#### Goals from last week
- Kanban board development

#### Progress and Issues
- So far implemented navbar and sidebar with some buttons that lack functionality but they're ready to work smoothly when we complete the technical setup. It is mainly focused on visual design and layout.

#### Goals for Next Week
- In the upcoming week, will be finishing the navbar and sidebar for the kanban board
- Help Deep with the dashboard layout and routing

### Dravya Patel

#### Goals from last week
- Started to work on scrum board’s interface.
- Discussed components with back end team.

#### Progress and Issues
- Noted down some ways to implement user settings page.
- Started working on major components implementation for the scrum board.

#### Goals for Next Week
- Check the UI of Kanban board and implement a similar UI to Scrum board.

