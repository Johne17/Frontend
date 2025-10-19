export const User = ({ user }) => {
    return (
        <div className="user-card">
            <img src={user.photoUrl} alt={user.name} className="user-photo" />
            <div className="user-info">
                <h3>{user.name}</h3>
                <p><strong>Teléfono:</strong> {user.phone}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Dirección:</strong> {user.address}</p>
                <p><strong>Edad:</strong> {user.age} años</p>
            </div>
        </div>
    );
};