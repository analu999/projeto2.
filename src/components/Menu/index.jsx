// src/components/Menu/index.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.css';

export function Menu() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <nav className={styles.menu}>
      <div className={styles.menuContent}>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard com Mapa</Link>
          </li>
          <li>
            <Link to="/dashboard/sem-mapa">Dashboard com Lista</Link>
          </li>
          <li>
            <Link to="/locais">Locais</Link>
          </li>
        </ul>

        <div className={styles.userInfo}>
          <span className='text-secondary'>
            <User size={24} /> {user.email}
          </span>
          <button className='btn btn-dark' onClick={signOut}>
            <LogOut size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}