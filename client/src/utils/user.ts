enum Role {
    Admin = 'Admin',
    Project_Manager = 'Project Manager',
    Assignee = 'Assignee',
    Reporter = 'Reporter'
  }
  
  interface User {
    id: number;
    full_name: string;
    username: string;
    email: string;
    avatar_url: string;
    password: string;
    role: Role;
    created_at: Date;
    last_login: Date;
    // issuesAssigned: Issue[]; 
    // issuesReported: Issue[]; 
  }
  