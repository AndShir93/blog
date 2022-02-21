import React from "react";
import { AppProps } from 'next/app'
import Context, { DEFAULT_USER } from '../Context.js';
import jwt from 'jsonwebtoken';


export interface IUser {
  id: number;
  email: string;
  name: string;
}

const App = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = React.useState<IUser>(DEFAULT_USER);
  React.useEffect(() => {
    const token = jwt.decode(window.localStorage.token);
    if (!token) return setUser(DEFAULT_USER);

    setUser(jwt.decode(window.localStorage.token));
  }, []);

  return (
    <Context.Provider value={user}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default App
