// src/pages/dashboard/home-without-map/index.jsx (com menu)
import { useState, useEffect } from 'react';
import { fetchLocations } from '../../../services/locations';
import { fetchUsers } from '../../../services/users';
import { Menu } from '../../../components/Menu';
import styles from './styles.module.css'

export function HomeWithoutMapPage() {
  const [locations, setLocations] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <Menu/>
      <div className={styles.content}>
        <div className="d-flex justify-content-between mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Usuários Ativos</h5>
              <p className="card-text">{users.length}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Locais Cadastrados</h5>
              <p className="card-text">{locations.length}</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          {locations.map((location) => (
            <div className="card" key={location.id}>
              <div className="card-body">
                <h5 className="card-title">{location.nome_do_local}</h5>
                <p className="card-text">
                  {location.descricao}
                  <br />
                  <strong>Usuário:</strong>{' '}
                  {users.find(
                    (user) => user.id === location.identificador_do_usuario
                  )?.nome ?? 'Usuário não encontrado'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 