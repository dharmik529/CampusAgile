| **CAMPUS AGILE**** CMPSC 487W: INTRO TO SOFTWARE ENG ****SEP 10, 2023**" **Empowering university students with real-world project management experience through an agile task and collaboration platform"** | **Group Members**** Dharmik Patel ****Deep Patel**** Dravya Patel ****Dev Patel**** Darsh Patel ****Love Patel** |
| --- | --- |
| **Team Info & Policies:** _ **Our team and roles:** _
- _Deep Patel (Front-end Lead)_
- _Dravya & Darshit Patel (Front-end Developers)_
- _Dharmik Patel (Back-end Lead_
- _Dev & Love Patel (Back-end Developers)_
_ **Git Repository:** _
- _We have set up a private GitHub repository for our project, accessible at_[_GitHub Repository Link_](https://github.com/dharmik529/CampusAgile)_. The repository serves as our version control system for code collaboration and includes all project-related files._
_ **Communication and Tools:** _
- _ **Communication Platform:** We utilize Discord for real-time discussions, team meetings, and weekly updates. Discord enables us to maintain effective communication and quick responses among team members._
- _ **Version Control:** GitHub is our chosen platform for hosting the project's Git repository. This facilitates code versioning, collaborative development, and code reviews._
- _ **Issue and Task Tracking:** Jira Software is our primary tool for tracking project-related issues, tasks, and milestones. Jira helps us organize and manage our project workflow efficiently._
_ **Policies:** _
- _We expect all team members to actively participate in Discord discussions and weekly meetings to ensure effective communication._
- _Git push requests to the repository are reviewed and approved by team leads (Deep Patel for front-end and Dharmik Patel for back-end) to maintain code quality and consistency._
- _Task assignments and updates are tracked using Jira Software, ensuring transparency and accountability in project progress._

 |
| **Product Description:** _CampusAgile is a revolutionary platform dedicated to equipping university students with invaluable real-world project management experience. Our mission is to empower the next generation of professionals by providing them with the tools and knowledge needed to excel in an ever-evolving job market. With CampusAgile, students gain access to a collaborative environment that seamlessly integrates agile methodologies, enabling them to break down complex projects, develop adaptability, master time management, and prioritize tasks effectively.__ **Key Features:** _
- _ **Agile Task Management:** CampusAgile introduces agile methodologies to students, teaching them how to dissect intricate projects into manageable components. This not only fosters project adaptability but also hones critical skills in time management and task prioritization._
- _ **Real-World Simulations:** Our platform offers a secure space where students can engage in real-life scenarios, allowing them to practice decision-making and tackle project challenges head-on. Through these simulations, students build confidence and acquire essential management skills that prepare them for the professional world._
- _ **Industry Integration:** CampusAgile collaborates with various organizations, bridging the gap between academic learning and industry requirements. By working on real projects sourced from industry partners, students not only enhance their networking opportunities but also increase their employability by gaining hands-on experience in their chosen field._
_**Major Features (MVP):**_
- _ **Task Assignment and Tracking:** Easily assign and monitor tasks, facilitating efficient project collaboration._
- _ **Interactive Agile Boards:** Visualize project progress through interactive agile boards, enhancing transparency._
- _ **Resource Management:** Optimize resource allocation and track utilization to ensure project efficiency._
- _ **Performance Analytics:** Access comprehensive analytics to evaluate individual and team performance, driving continuous improvement._
_ **Stretch Goals:** _
- _ **Mobile Application:** Develop a mobile app for on-the-go access, providing convenience and flexibility._
- _ **Integration with Popular Tools:** Integrate CampusAgile with widely-used productivity and collaboration tools to enhance workflow._
_CampusAgile aims to be the premier platform for students seeking to bridge the gap between academia and industry, offering an immersive learning experience that prepares them for successful careers._
 |
| **Use Cases (Functional Requirements):**_Use Case 1: User Task Assignment_
- _ **Actors:** User (Student or Faculty), System_
- _ **Triggers:** User initiates the task assignment process._
- _ **Preconditions:** User must be logged in._
- _**Postconditions (success scenario):**_

  - _User assigns tasks to team members successfully._

  - _Task details and assignments are updated in the system._

- _**List of Steps (success scenario):**_

  - _User logs in._

  - _User navigates to the project._

  - _User selects the "Assign Tasks" option._

  - _User specifies task details (title, description, priority, due date, assignee)._

  - _User submits the task assignment._

- _ **Extensions/variations of the success scenario:** _

  - _If the task assignment fails, the user receives an error message and can retry._

- _**Exceptions (failure conditions and scenarios):**_

  - _If the user is not logged in, they are prompted to log in before proceeding._

_Use Case 2: User Collaboration on a Task_
- _ **Actors:** User (Student or Faculty), System_
- _ **Triggers:** User selects a task to collaborate on._
- _ **Preconditions:** User must be part of the project and the task must exist._
- _**Postconditions (success scenario):**_

  - _User successfully collaborates on the task._

  - _Task updates are reflected in real-time._

- _**List of Steps (success scenario):**_

  - _User logs in._

  - _User selects the project._

  - _User navigates to the task._

  - _User views task details and discussions._

  - _Users add comments, attach files, or update task status._

- _ **Extensions/variations of the success scenario:** _

  - _Users can mention other team members for quick collaboration._

- _**Exceptions (failure conditions and scenarios):**_

  - _If the task does not exist or the user is not part of the project, they receive an error message._

_Use Case 3: Managing Agile Tasks_
- _ **Actors:** User (Student or Faculty), System_

- _ **Triggers:** Student or Faculty wants to create, assign, or update agile tasks._

- _ **Preconditions:** User must be part of the project and the task must exist._

- _**Postconditions (success scenario):**_

  - _Agile tasks are successfully created, assigned, or updated within a course._

- _**List of Steps (success scenario):**_

  - _Users select the course in which they want to manage agile tasks._
  - _User navigates to the "Agile Task Management" section._
  - _Users create, assigns, or updates agile tasks as needed._
  - _The system confirms the changes._

- _ **Extensions/variations of the success scenario:** _

  - _If a task deadline is approaching, the system can send reminders to users._
  - _Instructors can review and approve tasks submitted by students._

- _**Exceptions (failure conditions and scenarios):**_

  - _If the user is not logged in, they are prompted to log in before proceeding._

_Use Case 4: Managing Project Progress_
- _ **Actors:** User (Student or Faculty), System_

- _ **Triggers:** Student or Faculty wants to monitor the progress of a project._

- _ **Preconditions:** _
  - _User must be part of the project and the task must exist._
  - _Users must have a role of faculty because only faculty(admins) can monitor the overall progress._

- _**Postconditions (success scenario):**_
  - _Users can view project progress and make informed decisions._
- _**List of Steps (success scenario):**_

  - _User selects the project they want to monitor._
  - _User navigates to the "Project Progress" section._
  - _Users review the project's agile board, resource allocation, and performance analytics._
  - _Users gain insights into the project's status._

- _ **Extensions/variations of the success scenario:** _

  - _If a project falls behind schedule, the system can highlight critical tasks._
  - _Faculty can provide feedback to students based on project progress._

- _**Exceptions (failure conditions and scenarios):**_
  - _Users are not part of project._

  - _If the user is not logged in, they are prompted to log in before proceeding._

_Use Case 5: Task Progress Tracking_
- _ **Actors:** User (Student or Faculty), System_
- _ **Triggers:** Need to monitor and assess task progress._
- _ **Preconditions:** _
  - _Users (students and instructors) have registered accounts on CampusAgile._
  - _Users must be assigned tasks that they can work on._
- _**Postconditions (success scenario):**_

  - _Users can monitor the progress of individual tasks within a project._
  - _Users can add comments and such for their own benefit._
  - _Instructors can assess student contributions and provide feedback._

- _**List of Steps (success scenario):**_

  - _Instructor creates a project with defined tasks._
  - _Students are assigned specific tasks._
  - _Students update the status of tasks as "in progress", "awaiting approval", "completed."_
  - _Instructors review task progress and provide feedback._

- _ **Extensions/variations of the success scenario:** _

  - _Task tracking will highlight task priority ranging from 1-4(critical to low). It can also tell if it is in progress, delayed, or finished._

- _**Exceptions (failure conditions and scenarios):**_

  - _If the task does not exist or the user is not part of the project, they receive an error message._

_Use Case 6: Task Dependencies_
- _ **Actors:** User (Student or Faculty), System_
- _ **Triggers:** There can be project tasks that depend on the completion of others._
- _ **Preconditions:** _
  - _Users (students and instructors) have registered accounts on CampusAgile. Projects with task dependencies are available._
  - _Users must be part of projects and have tasks assigned to them._
- _**Postconditions (success scenario):**_

1. _Users can define task dependencies to ensure proper project sequencing._
2. _The platform helps manage task order and notifies users of dependent tasks._

- _**List of Steps (success scenario):**_

1. _Users create a project with interdependent tasks._
2. _They specify task dependencies within the project._
3. _The platform enforces task order and provides notifications._

- _ **Extensions/variations of the success scenario:** _

1. _Allow users to connect other type of tasks to their project such as Request Items, Ad hoc requests, Software request, Hardware request, and etc._

- _**Exceptions (failure conditions and scenarios):**_

1. _If the task does not exist or the user is not part of the project, they receive an error message._
 |
| **Non-functional Requirements:**
- _ **Usability:** The platform should have an intuitive user interface to ensure users can easily navigate, collaborate, and manage tasks without extensive training._
- _ **Security:** User data, project information, and communication should be encrypted to protect sensitive information. User authentication and authorization mechanisms must be robust._
- _ **Scalability:** The system should handle an increasing number of users, tasks, and projects without significant performance degradation._

 |
| **External Requirements:**
- _ **Robustness:** The platform should gracefully handle errors such as invalid user input, preventing system crashes or data corruption._
- _ **Installability:** CampusAgile should be accessible via a public URL for web-based access, and installation instructions should be provided for standalone applications._
- _ **Buildability:** All components, including clients and servers, should be buildable from source code. Comprehensive documentation should be available for developers to contribute and enhance the system._
- _ **Scope Alignment:** The scope of the project should align with the available team resources, ensuring that tasks and milestones are manageable within the team's capacity._

 |
| **Team process description:** _ **Semester-Long Development Process:** __Software Toolset: For our semester-long development process, we have carefully selected a set of software tools to facilitate efficient and effective development. These tools align with agile methodologies and provide the necessary support for our project:_
1. _Front-end Development:_
  - _React.js: We will use React.js for building our front-end user interface due to its component-based architecture and high reusability._
  - _TypeScript: TypeScript will be employed to add type safety to our JavaScript code, reducing errors and enhancing maintainability._
  - _HTML/CSS: Standard HTML and CSS will be used for structuring and styling our web pages._
  - _GitHub: We will utilize GitHub for version control, enabling seamless collaboration and code management._
  - _Jira: Jira will serve as our task tracking tool to manage project tasks, issues, and sprints._
  - _Discord: Discord will be our primary communication platform for team discussions and coordination._
2. _Back-end Development:_
  - _Node.js: We have chosen Node.js for our back-end development, as it aligns well with JavaScript used in React, offering a unified development experience._
  - _Database Management: Back-end developers will handle database management, selecting an appropriate database system based on project requirements._
  - _Server Deployment: Deployment of the back-end server will be managed by the back-end lead, ensuring smooth operation._
_ **Team Member Roles:** _
- _Deep Patel (Front-end Lead): Deep will be responsible for leading the front-end development efforts. His role includes defining the front-end architecture, establishing a cohesive design and color palette, and assigning tasks to front-end developers. Deep's experience in front-end development makes him well-suited for this role._
- _Dravya & Darshit Patel (Front-end Developers): Dravya and Darshit will work closely with the front-end lead to implement front-end components based on the provided design and requirements. Their responsibilities include coding, testing, and ensuring a seamless user experience._
- _Dharmik Patel (Back-end Lead): Dharmik will take charge of the back-end development, overseeing the server-side architecture, database management, and server deployment. His experience in back-end development and NLP makes him the ideal candidate for this role._
- _Dev & Love Patel (Back-end Developers): Dev and Love will collaborate with the back-end lead to develop server-side functionalities and integrate the database. They will work on implementing the logic necessary for the platform's core functionality._
_ **Schedule and Milestones:** __Our development process is structured around key milestones to ensure progress throughout the semester:_
1. _Project Initiation (Week 1-2):_
  - _Define project scope, goals, and requirements._
  - _Set up the development environment._
  - _Establish communication channels._
  - _Create a project plan and assign roles._
2. _MVP Development (Week 3-6):_
  - _Develop a Minimum Viable Product (MVP) with core features._
  - _Conduct initial testing and debugging._
  - _Prepare for internal testing and review._
3. _Feature Additions (Week 7-10):_
  - _Add additional features and functionalities._
  - _Conduct thorough testing of new features._
  - _Refine user interface based on feedback._
4. _Testing and Refinement (Week 11-14):_
  - _Conduct comprehensive testing, including user acceptance testing._
  - _Address any identified issues and bugs._
  - _Optimize performance and security._
  - _Finalize documentation and user guides._
_ **Major Risks:** _
1. _Technical Challenges: Complex technical issues or limitations in the chosen technologies could impede progress. We will address this by maintaining open communication within the team and seeking external expertise if needed._
2. _Scope Creep: Expanding project scope beyond the defined requirements can lead to delays. We will closely monitor project scope and prioritize features based on their impact and feasibility._
3. _Resource Limitations: Limited availability of team members or access to necessary resources may affect project timelines. We will mitigate this by allocating tasks effectively and having contingency plans in place._
_ **External Feedback:** __External feedback will be most valuable during the MVP development and testing phases. We plan to seek feedback from professors, industry experts, and potential end-users to refine our platform. This feedback will help us identify usability issues, performance bottlenecks, and areas for improvement before the final release. We will gather feedback through surveys, user testing sessions, and expert reviews, incorporating valuable insights into our development process._
 |