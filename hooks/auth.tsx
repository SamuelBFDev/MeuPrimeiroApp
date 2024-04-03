import React, { createContext, useContext, useState, ReactNode } from "react";
import { router } from "expo-router";
import { setItemAsync, deleteItemAsync } from "expo-secure-store";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserLogin {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUserLogin;
  setUser: (user: IUserLogin) => void;
  handleLogin: () => void;
  hangleLogout: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUserLogin>({ email: "", password: "" });

  const handleLogin = () => {
    if (user.email === "" && user.password === "") {
      alert("Enter a valid email and password");
      return;
    }

    const auth = initializeAuth(firebaseApp);
    signInWithEmailAndPassword(auth, user.email, user.password).then(
      (resposta) => {
        console.log(resposta.user.uid);
        setItemAsync("userUid", resposta.user.uid);
        setItemAsync("userEmail", resposta.user.email);
        router.push("home");
      }
    );
  };

  const hangleLogout = () => {
    deleteItemAsync("user");
    AsyncStorage.clear();
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, hangleLogout, setUser }}>
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
