import React, { createContext, useContext } from 'react';

interface RegistrationContextType {
  // Will be implemented in the new form builder
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export function RegistrationProvider({ children }: { children: React.ReactNode }) {
  return (
    <RegistrationContext.Provider value={{}}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
}