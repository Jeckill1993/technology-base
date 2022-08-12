import React, {FC} from 'react';
import {UserInterface} from "../types/types";

interface UserItemProps {
    user: UserInterface;
}

const UserItem: FC<UserItemProps> = ( { user }) => {
    return (
        <div>
            {user.id}. {user.name} lives in {user.address.city}, {user.address.street}
        </div>
    );
};

export default UserItem;