import './styles.css';
import '../global.css';
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/login.png';
import useUser from '../hooks/useUser';

function SignUp() {
  const navigate = useNavigate();
  const { name, setName, email, setEmail, password, setPassword } = useUser();

  const handlePrevDefault = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }
  }

  const handleRegister = async () => {
    try {
      const data = {
        nome: name,
        email: email,
        senha: password
      };
      const response = await fetch('https://cubos-api-contacts.herokuapp.com/usuarios', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();

      if (result) {
        navigate('/');
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="container">
      <div className="info-side">
        <h1>Cadastre-se</h1>
        <form onClick={handlePrevDefault} >
          <input
            className="input"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="confirm" onClick={handleRegister} ><Link className="link-signup" to="/login">cadastrar</Link></button>
          <button className="cancel" >cancelar</button>
          <span>Já tem cadastro? <Link to="/login">Clique aqui!</Link></span>
        </form>
      </div>
      <div className="img-side">
        <img src={login} alt="SignUp" />
      </div>
    </div>
  );
}

export default SignUp;