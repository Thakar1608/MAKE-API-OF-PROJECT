import React, { useState, useEffect } from 'react';
import { Plus, Search, Layers } from 'lucide-react';
import { getProjects, createProject, updateProject, deleteProject } from './services/api';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects(search);
      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchProjects();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleAddProject = async (projectData) => {
    try {
      await createProject(projectData);
      fetchProjects();
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProject = async (projectData) => {
    try {
      await updateProject(editingProject._id, projectData);
      fetchProjects();
      setIsFormOpen(false);
      setEditingProject(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        fetchProjects();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const openEditForm = (project) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  return (
    <div className="container">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div style={{ background: '#eff6ff', padding: '0.625rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
            <Layers color="#2563eb" size={24} />
          </div>
          <div>
            <h1 className="text-gradient" style={{ fontSize: '1.75rem', fontWeight: '700' }}>Project Hub</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage your projects easily</p>
          </div>
        </div>

        <button className="btn btn-primary" onClick={() => setIsFormOpen(true)}>
          <Plus size={18} />
          <span>New Project</span>
        </button>
      </header>

      <main>
        <div className="search-wrapper flex items-center gap-3" style={{ padding: '0.625rem 1rem', marginBottom: '2rem' }}>
          <Search size={18} style={{ color: 'var(--text-secondary)' }} />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              width: '100%',
              outline: 'none',
              fontSize: '0.875rem',
              fontFamily: 'inherit'
            }}
          />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
            <div className="animate-fade-in" style={{ fontSize: '1rem' }}>Loading projects...</div>
          </div>
        ) : (
          <ProjectList
            projects={projects}
            onEdit={openEditForm}
            onDelete={handleDeleteProject}
          />
        )}
      </main>

      {isFormOpen && (
        <ProjectForm
          initialData={editingProject}
          onSubmit={editingProject ? handleUpdateProject : handleAddProject}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
