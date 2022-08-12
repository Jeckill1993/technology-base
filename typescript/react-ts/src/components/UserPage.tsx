import React, {useEffect, useState} from 'react';
import {UserInterface} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import UserList from "./UserList";

const UserPage = () => {

    useEffect(() => {
        fetchUsers().then((response) => {
            if (response) setUsers(response.data);
        });
    }, []);

    const [users, setUsers] = useState<UserInterface[]>([]); // <> generic, learn more about it

    async function fetchUsers() {
        try {
            const response = await axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            {/* global component for render lists of users, massages etc */}
            <List
                items={users}
                renderItem={ (user: UserInterface) => <UserItem key={user.id} user={user} /> }
            />

            {/* goal component for render list */}
            <UserList users={users} />
        </div>
    );
};

export default UserPage;