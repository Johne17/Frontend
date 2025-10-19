import { User } from './User';

export const Users = ({ users }) => {
    return (
        <div className="users-container">
            <h2>Lista de Usuarios</h2>
            <div className="users-grid">
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};