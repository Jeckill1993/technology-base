import React, {FC} from 'react';
import {UserInterface} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: UserInterface[]; // [] means array (we have array of users (every user type - UserInterface)
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user =>
                    <UserItem key={user.id} user={user} />
                )}
        </div>
    );
};

export default UserList;