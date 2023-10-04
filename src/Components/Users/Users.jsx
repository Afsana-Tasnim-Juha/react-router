import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';



const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>our users : {users.length}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, nesciunt.</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;