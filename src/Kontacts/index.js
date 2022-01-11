import './styles.css';
import logout from '../assets/logout.svg';
import useUser from '../hooks/useUser';
import Table from '../Table';
import ModalEdit from '../ModalEdit';
import ModalDelete from '../ModalDelete';
import { useNavigate } from 'react-router-dom';

function Kontacts() {

  const { openModal, openEditModal, setOpenEditModal, removeToken } = useUser();
  const navigate = useNavigate();

  async function signout() {
    removeToken();
    navigate('/login');
  }

  return (
    <div className="kontacts">
      {openEditModal && <ModalEdit />}
      {openModal && <ModalDelete />}
      <header>
        <div></div>
        <div className="kontacts-logout">
          <span>kontacts</span>
          <img className="logout" src={logout} alt="Sair" onClick={signout} />
        </div>
      </header>
      <main>
        <button className="add-btn" onClick={() => setOpenEditModal(true)} >Adicionar</button>
        <div className="table">
          <div className="table-header">
            <div className="table-title">
              <div className="line-title">Nome</div>
              <div className="line-title">Email</div>
              <div className="line-title">Telefone</div>
            </div>
          </div>
          <div className="table-body">
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Kontacts;