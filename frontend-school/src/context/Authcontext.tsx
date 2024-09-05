import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const login = (input_password: string) => {
    const password = 'Admin123';
    if (input_password === password) {
      setIsAdmin(true);
      alert('Bienvenido');
    } else {
      alert('Password incorrect');
      setIsAdmin(false);
    }
  };

  const logout = () => {
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
