import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, onEdit, onDelete }) => {
  if (projects.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
        <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>No projects found.</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Click "New Project" to add a new project!</p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem'
    }}>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProjectList;
