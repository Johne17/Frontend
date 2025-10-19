export const Form = ({ onCreateUser }) => {
  return (
    <form onSubmit={onCreateUser} className="user-form">
      <h2>Crear Nuevo Usuario</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="address">Dirección:</label>
        <input type="text" id="address" name="address" required />
      </div>

      <div className="form-group">
        <label htmlFor="age">Edad:</label>
        <input type="number" id="age" name="age" min="18" max="100" required />
      </div>

      <div className="form-group">
        <label htmlFor="photoUrl">URL de Foto:</label>
        <input type="url" id="photoUrl" name="photoUrl" required />
      </div>

      <button type="submit">Crear Usuario</button>
    </form>
  );
};