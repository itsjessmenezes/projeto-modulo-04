import { createContext } from "react";
import useUserProvider from '../hooks/useUserProvider';

const UserContext = createContext({});

export function UserProviderContext(props) {
  const userProvider = useUserProvider();
  return (
    <UserContext.Provider value={userProvider}>{props.children}</UserContext.Provider>
  );
}


export default UserContext;