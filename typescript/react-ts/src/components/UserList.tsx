import React, {FC} from 'react';
import {UserInterface} from "../types/types";

interface UserListProps {
    users: UserInterface[]; // [] means array (we have array of users (every user type - UserInterface)
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user =>
                    <div key={user.id}>
                        {user.id}. {user.name} lives in {user.address.city}, {user.address.street}
                    </div>
                )}
        </div>
    );
};

export default UserList;