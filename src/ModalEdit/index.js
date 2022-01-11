import '../global.css';
import './styles.css';
import close from '../assets/close.svg';
import useUser from '../hooks/useUser';
import InputMask from 'react-input-mask'

function ModalEdit() {
  const { addContact, setAddContact, token, setOpenEditModal, setContacts, handleLoadContacts } = useUser();

  async function handleChange(target) {
    setAddContact({ ...addContact, [target.name]: target.value })
  }

  async function handleCreateContact() {

    const data = {
      nome: addContact.nome,
      email: addContact.email,
      telefone: addContact.telefone,
    }

    const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    await handleLoadContacts();
  }

  function handleCleanInput() {
    setAddContact('');
  }

  function handlerForm(e) {
    e.preventDefault();
  }

  return (
    <div className="modal-edit">
      <div className="edit-card">
        <div className="img-close">
          <img
            src={close}
            className="close-btn"
            onClick={() => setOpenEditModal(false)}
            alt="Fechar"
          />
        </div>
        <h2> Editar Contato</h2>
        <form onSubmit={handlerForm}>
          <label htmlFor="nome">
            <input
              className="modal-input"
              type="text"
              placeholder="Nome"
              name="nome"
              value={addContact.nome}
              onChange={(e) => handleChange(e.target)}
            />
          </label>
          <label>
            <input
              className="modal-input"
              type="email"
              placeholder="E-mail"
              name="email"
              value={addContact.email}
              onChange={(e) => handleChange(e.target)}
            />
          </label>
          <label>
            <InputMask
              mask="(99)99999-9999"
              className="modal-input"
              type="text"
              placeholder="Telefone"
              name="telefone"
              value={addContact.telefone}
              onChange={(e) => handleChange(e.target)}
            />
          </label>
        </form>
        <button className="confirm modal-edit-btn" onClick={handleCreateContact}>adicionar</button>
        <button className="cancel modal-edit-btn" onClick={handleCleanInput}>limpar</button>
      </div>
    </div>
  );
}

export default ModalEdit;