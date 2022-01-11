import './styles.css';
import '../global.css';
import login from '../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

function Login() {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, setToken } = useUser();

  const handleLogin = async () => {
    const data = {
      email: email,
      senha: password

    }
    const response = await fetch('https://cubos-api-contacts.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (result) {
      navigate('/kontacts')
      setToken(result.token);
    }
  }

  const handlePrevDefault = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }
  }

  return (
    <div className="container">
      <div className="img-side">
        <img src={login} alt="Login" />
      </div>
      <div className="info-side">
        <p>Bem vindo</p>
        <h1>Faça o login com sua conta</h1>
        <form onClick={handlePrevDefault} >
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
          <button className="confirm login" onClick={() => handleLogin()} >Login</button>
          <span>Não tem cadastro? <Link to="/signup">Clique aqui!</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;