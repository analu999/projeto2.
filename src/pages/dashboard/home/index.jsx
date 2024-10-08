// src/pages/dashboard/home/index.jsx 
import { useState, useEffect } from 'react';
import { fetchLocations } from '../../../services/locations';
import { fetchUsers } from '../../../services/users';
import Map from '../../../components/Map';
import { Menu } from '../../../components/Menu';
import styles from './styles.module.css'

export function HomePage() {
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
    <div className={styles.content}>
      <Menu/>
      <div className={styles.container}>
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

        <Map locations={locations} />
      </div>
    </div>
  );
} 


