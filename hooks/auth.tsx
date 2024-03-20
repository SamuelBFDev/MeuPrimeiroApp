import { createContext, useContext, useState } from "react";
import {
  IAuthContext,
  IAuthProviderProps,
  IUserLogin,
} from "../interfaces/login";
import { router } from "expo-router";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUserLogin>({ email: "", password: "" });

  const handleLogin = () => {
    if (user.email == "admin" && user.password == "admin123") {
      router.push("home");
    } else {
      alert("Erro ao acessar!");
    }
  };

  const handleLogout = () => {
    setUser({ email: "", password: "" });
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, setUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

/*import React, { createContext, useContext, useState, ReactNode } from 'react'
import { router } from 'expo-router'

interface IUserLogin {
    email: string
    password: string
}

interface IAuthContext {
    user: IUserLogin
    setUser: (user: IUserLogin) => void
    handleLogin: () => void
}

interface IAuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUserLogin>({ email: '', password: '' })

    const handleLogin = () => {
        if (user.email === 'admin' && user.password === 'admin') {
            setUser(user)
            router.push('/home')
        } else {
            alert('Usuário ou senha inválidos')
        }
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
*/
