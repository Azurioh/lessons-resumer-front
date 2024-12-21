import { createContext, useContext } from 'react';
import authService, { type AuthService } from '../services/authService';

interface ApiContextType {
  auth: AuthService;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

interface ApiProviderProps {
  children: React.ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const services: ApiContextType = {
    auth: authService,
  };

  return <ApiContext.Provider value={services}>{children}</ApiContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within a ApiProvider');
  }
  return context;
};
