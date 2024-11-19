import React from 'react';
import { useAuth } from './contexts/AuthContext';
import LoginForm from './components/auth/LoginForm';
import OrganizerDashboard from './components/OrganizerDashboard';
import { SuperAdminDashboard } from './components/admin';
import LoadingSpinner from './components/shared/layouts/LoadingSpinner';

export default function App() {
  const { user, loading, isImpersonating } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const content = !user ? (
    <LoginForm />
  ) : isImpersonating ? (
    <OrganizerDashboard />
  ) : user.role === 'admin' || user.isSuperAdmin ? (
    <SuperAdminDashboard />
  ) : (
    <OrganizerDashboard />
  );

  return content;
}