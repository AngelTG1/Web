
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Intentar obtener el usuario desde localStorage al cargar la página
  const storedUser = JSON.parse(localStorage.getItem('SensorData'));
  const [user, setUser] = useState(storedUser || null);

  const login = (userData) => {
    // Puedes realizar lógica adicional si es necesario
    setUser(userData);
    // Almacenar en localStorage después del inicio de sesión
    localStorage.setItem('SensorData', JSON.stringify(userData));
  };

  const logout = () => {
    // Puedes realizar lógica adicional si es necesario
    setUser(null);
    // Eliminar la información del usuario del localStorage al cerrar sesión
    localStorage.removeItem('SensorData');
  };

  useEffect(() => {
    // Este efecto se ejecutará solo una vez al cargar la página
    // Se puede utilizar para realizar acciones adicionales al inicio de la aplicación
    // Aquí podrías realizar alguna lógica adicional si es necesario
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};