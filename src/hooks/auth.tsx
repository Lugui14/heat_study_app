import React, { createContext, useContext, useState } from "react";
import * as AuthSessions from "expo-auth-session";

const CLIENT_ID = "8c3772b315b3e171941c";
const SCOPE = "read:user";

type User = {
  id: string;
  avatarUrl: string;
  name: string;
  login: string;
}

type AuthContextData = {
  user: User | null,
  isSigning: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

type AuthResponse = {
  token: string,
  user: User,
}

type AuthorizationResponse = {
  params: {
     code?: string;
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {

  const [ isSigning, setIsSigning ] = useState(false);
  const [ user, setUser ] = useState<User | null>(null);

  async function signIn() {
    const authUrl = `https://github.com/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
    const { params } = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse;
  }

  async function signOut() {
    
  }

  return (
    <AuthContext.Provider value={{ 
        signIn,
        signOut,
        user,
        isSigning
      }}> 
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth,
}