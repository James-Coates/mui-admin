import { User, UserCredential } from "firebase/auth";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth, signInWithEmailAndPassword } from "../firebase-config";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextValue = {
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(
    (email: string, password: string) =>
      signInWithEmailAndPassword(email, password),
    []
  );

  const logout = useMemo(() => auth.signOut, []);

  const value = useMemo(
    () => ({ user: currentUser, login, logout }),
    [currentUser, login, logout]
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
