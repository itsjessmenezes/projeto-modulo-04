import './styles.css';
import close from '../assets/close.svg';
import useUser from '../hooks/useUser';

function ModalDelete() {
  const { setOpenModal, token, deleteConfirm, handleLoadContacts } = useUser();

        async function handleDeleteContact(userId) {
    await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    await handleLoadContacts();
    setOpenModal(false);
  }

  return (
    <div className="modal">
      <div className="card">
        <div className="img-close">
          <img src={close} className="close-btn" onClick={() => setOpenModal(false)} alt="Fechar" />
        </div>
        <h2>Confirma a exclusão?</h2>
        <p>Deseja excluir o contato, Daniel Lopes?</p>
        <button className="confirm modal-btn" onClick={() => handleDeleteContact(deleteConfirm)} >excluir</button>
        <button className="cancel modal-btn" onClick={() => setOpenModal(false)}>cancelar</button>
      </div>
    </div>
  );
}

export default ModalDelete;