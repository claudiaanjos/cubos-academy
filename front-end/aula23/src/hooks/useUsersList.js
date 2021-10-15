import { useContext } from "react";
import UsersListcontext from "../contexts/usersListContext";


function useUsersList() {
    return useContext(UsersListcontext);
}

export default useUsersList;