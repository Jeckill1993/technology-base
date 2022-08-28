import './App.css';
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS, GET_ONE_USER} from "./query/user";
import {CREATE_USER} from "./mutation/user";

function App() {

    // second parameter is options, we can use poolInterval (request each 5s in the example), analog websockets
    const {data, loading, error, refetch} = useQuery(GET_ALL_USERS, { pollInterval: 5000 });
    const {data: oneUser, loading: loadingOneUser} = useQuery(GET_ONE_USER, {
        variables: {
            id: '1'
        }
    });
    const [newUser] = useMutation(CREATE_USER);

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        if (!loading) setUsers(data.getAllUsers);
    }, [data]);

    const addUser = (e) => {
        e.preventDefault();
        newUser({
            variables: {
                input: {
                    username,
                    age: +age,
                }
            }
        }).then(({ data }) => {
            setUsername('');
            setAge('');
            refetch();
        })
    }

    const getUsers = (e) => {
        e.preventDefault();
        refetch();
    }

    return (
        <div>
            <form>
                <input type={'text'} value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <input type={'number'} value={age} onChange={(e) => {
                    setAge(e.target.value)
                }}/>
                <button onClick={ (e) => addUser(e) }>Create User</button>
                <button onClick={ (e) => getUsers(e) }>Get Users</button>
            </form>
            <div>
                {users.map((user) => {
                    return <div key={user.id}>
                        <div>{user.id} {user.username} {user.age}</div>
                        {user.posts?.length
                            ? user.posts.map((post) => {
                                return <div key={post.id}>{post.id} {post.title}</div>
                            })
                            : ''
                        }
                    </div>
                })}
            </div>
        </div>
    );
}

export default App;
