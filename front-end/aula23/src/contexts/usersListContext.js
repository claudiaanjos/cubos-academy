import { createContext } from 'react';
import useUsersListProvider from '../hooks/useUsersListProvider';

const UsersListcontext = createContext({});

export function UsersListProvider(props) {
    const valuesProvider = useUsersListProvider();

    return (
        <UsersListcontext.Provider value={ valuesProvider }>
        { props.children }
        </UsersListcontext.Provider >
    );
    
}

export default UsersListcontext;