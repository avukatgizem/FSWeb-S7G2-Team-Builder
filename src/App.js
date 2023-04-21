import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { name: 'Gizem Güzel', email: 'av.gizemguzel@gmail.com', role: 'Avukat' },
    { name: 'Serra YılmazSaraçoğlu', email: 'serra@gmail.com', role: 'Backend Developer' },
  ]);

  const addTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> ({member.role}) - {member.email}
          </li>
        ))}
      </ul>
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
