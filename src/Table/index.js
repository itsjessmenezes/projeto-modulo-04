import './styles.css';
import del from '../assets/delete.svg';
import edit from '../assets/edit.svg';
import useUser from '../hooks/useUser';
import { useEffect } from 'react';

function Table() {
  const { contacts, setOpenModal, setOpenEditModal, handleLoadContacts, setDeleteConfirm } = useUser();

  useEffect(() => {
    handleLoadContacts();
  }, []);

  function handleDelete(userId) {
    setOpenModal(true);
    setDeleteConfirm(userId);
  }

  return (
    <div className="table-body">
      {contacts.map(item => (
        <div className="table-line" key={item.id}>
          <div className="line-items">{item.nome}</div>
          <div className="line-items">{item.email}</div>
          <div className="line-items">{item.telefone}</div>
          <div className="line-items"></div>
          <div className="line-items">
            <img className="edit" src={edit} alt="Editar" onClick={() => setOpenEditModal(true)} />
            <img className="delete" src={del} alt="Deletar" key={item.id} onClick={() => handleDelete(item.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;