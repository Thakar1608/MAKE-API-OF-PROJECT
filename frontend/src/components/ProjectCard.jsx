import React from 'react';
import { Calendar, Trash2, Edit } from 'lucide-react';

const ProjectCard = ({ project, onEdit, onDelete }) => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Planning':
        return 'badge-planning';
      case 'In Progress':
        return 'badge-progress';
      case 'Completed':
        return 'badge-completed';
      default:
        return 'badge-planning';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return 'No deadline';
    }
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="flex justify-between items-start" style={{ marginBottom: '1rem', gap: '0.75rem' }}>
        <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>{project.title}</h3>
        <span className={`badge ${getStatusBadgeClass(project.status)}`}>
          {project.status}
        </span>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.25rem', flexGrow: 1, wordBreak: 'break-word' }}>
        {project.description}
      </p>

      <div style={{ marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Tech Stack</span>
        <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-primary)', marginTop: '0.125rem', fontFamily: 'monospace' }}>
          {project.techStack || 'Not specified'}
        </p>
      </div>

      <div className="flex justify-between items-center" style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <div className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 500 }}>
          <Calendar size={14} style={{ color: 'var(--text-muted)' }} />
          <span>{formatDate(project.deadline)}</span>
        </div>
        
        <div className="flex gap-2">
          <button onClick={() => onEdit(project)} className="btn btn-secondary" style={{ padding: '0.375rem', borderRadius: '6px' }} title="Edit">
            <Edit size={14} />
          </button>
          <button onClick={() => onDelete(project._id)} className="btn btn-danger" style={{ padding: '0.375rem', borderRadius: '6px' }} title="Delete">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
