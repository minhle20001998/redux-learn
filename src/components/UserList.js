import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, deleteUser } from '../redux/ducks/user'
export default function UserList() {
    const users = useSelector((store) => store.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers());
        return () => {
        }
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    return (
        <div>
            {users.map((user) => {
                return <div key={user.id}>
                    <p><b>Name: </b>{user.name}</p>
                    <p><b>Username: </b>{user.username}</p>
                    <p><b>Email: </b>{user.email}</p>
                    <p><b>Phone: </b>{user.phone}</p>
                    <button onClick={() => { handleDelete(user.id) }}>Delete</button>
                    <hr />
                </div>
            })}
        </div>
    )
}
