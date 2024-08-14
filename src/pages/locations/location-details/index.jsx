// // src/pages/locations/location-details/index.jsx 
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchLocations } from '../../../services/locations';
// import { fetchUsers } from '../../../services/users';
// import Map from '../../../components/Map';

// export function LocationDetailsPage() {
//   const { id } = useParams();
//   const [location, setLocation] = useState(null);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const data = await fetchLocations();
//         setLocation(data.find((item) => item.id === id));
//       } catch (error) {
//         console.error('Erro ao buscar local:', error);
//       }
//     };

//     fetchLocation();
//   }, [id]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const data = await fetchUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Erro ao buscar usuários:', error);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (!location) {
//     return <div>Carregando...</div>;
//   }

//   return (
//     <div>
//       <div className="card">
//         <div className="card-body">
//           <h5 className="card-title">{location.nome_do_local}</h5>
//           <p className="card-text">
//             {location.descricao}
//             <br />
//             <strong>Usuário:</strong>{' '}
//             {users.find(
//               (user) => user.id === location.identificador_do_usuario
//             ).nome}
//           </p>
//           <p className="card-text">
//             <strong>Práticas Esportivas:</strong>{' '}
//             {location.praticas_esportivas.join(', ')}
//           </p>
//         </div>
//       </div>
//       <Map locations={[location]} />
//     </div>
//   );
// }

// src/pages/locations/location-details/index.jsx 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLocations } from '../../../services/locations';
import { fetchUsers } from '../../../services/users';
import Map from '../../../components/Map';
import styles from './styles.module.css'

export function LocationDetailsPage() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await fetchLocations();
        setLocation(data.find((item) => item.id === id));
      } catch (error) {
        console.error('Erro ao buscar local:', error);
      }
    };

    fetchLocation();
  }, [id]);

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

  if (!location) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{location.nome_do_local}</h5>
          <p className="card-text">
            {location.descricao}
            <br />
            <strong>Usuário:</strong>{' '}
            {users.find(
              (user) => user.id === location.identificador_do_usuario
            ).nome}
          </p>
          <p className="card-text">
            <strong>Práticas Esportivas:</strong>{' '}
            {location.praticas_esportivas.join(', ')}
          </p>
        </div>
      </div>
      <Map locations={[location]} />
    </div>
  );
} 