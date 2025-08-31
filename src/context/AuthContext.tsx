import { createContext, useContext, useState, ReactNode } from "react";
import { IContext, IUserData } from "../types/type";

const AuthContext = createContext<IContext | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  // Dummy functions to simulate auth (no backend)
  async function signUp({ email, password }: IUserData) {
    console.log("Sign Up:", email);
    setUser({ email }); // simulate user login
  }

  function logIn({ email, password }: IUserData) {
    console.log("Log In:", email);
    setUser({ email });
  }

  function logOut() {
    console.log("Log Out");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext)!;
}
