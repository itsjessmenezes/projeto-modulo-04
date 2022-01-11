import { useState } from "react";
import { useLocalStorage } from 'react-use';

function useUserProvider() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState('');
  const [token, setToken, removeToken] = useLocalStorage('token', '');

  const defaultValues = {
    nome: '',
    email: '',
    telefone: ''
  }


  const handleLoadContacts = async () => {
    const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const data = await response.json();
    if (Array.isArray(data)) {
      setContacts(data);
      setOpenEditModal(false);
    }
  }

  const [addContact, setAddContact] = useState(defaultValues);
  const [contacts, setContacts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  return {
    name, setName,
    email, setEmail,
    password, setPassword,
    token, setToken,
    addContact, setAddContact,
    contacts, setContacts,
    openModal, setOpenModal,
    openEditModal, setOpenEditModal,
    deleteConfirm, setDeleteConfirm,
    handleLoadContacts, removeToken
  }
}

export default useUserProvider;