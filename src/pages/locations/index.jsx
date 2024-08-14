// // src/pages/locations/index.jsx
// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { fetchLocations, deleteLocation } from '../../services/locations';
// import { fetchUsers } from '../../services/users';

// export function LocationsPage() {
//   const navigate = useNavigate();
//   const [locations, setLocations] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const data = await fetchLocations();
//         setLocations(data);
//       } catch (error) {
//         console.error('Erro ao buscar locais:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

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

//   const handleDelete = async (id) => {
//     try {
//       await deleteLocation(id);
//       const updatedLocations = locations.filter((location) => location.id !== id);
//       setLocations(updatedLocations);
//     } catch (error) {
//       console.error('Erro ao deletar local:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-between mb-4">
//         <button
//           className="btn btn-primary"
//           onClick={() => navigate('/cadastrolocaisatividades')}
//         >
//           Cadastrar Local
//         </button>
//       </div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Nome do Local</th>
//             <th scope="col">Descrição</th>
//             <th scope="col">Práticas Esportivas</th>
//             <th scope="col">Usuário</th>
//             <th scope="col">Ações</th>
//           </tr>
//         </thead>
//         <tbody>
//           {locations.map((location) => (
//             <tr key={location.id}>
//               <td>{location.nome_do_local}</td>
//               <td>{location.descricao}</td>
//               <td>
//                 {location.praticas_esportivas.join(', ')}
//               </td>
//               <td>
//                 {users.find(
//                   (user) => user.id === location.identificador_do_usuario
//                 ).nome}
//               </td>
//               <td>
//                 <Link
//                   to={`/locais/${location.id}`}
//                   className="btn btn-primary me-2"
//                 >
//                   Acessar
//                 </Link>
//                 <Link
//                   to={`/cadastrolocaisatividades/${location.id}`}
//                   className="btn btn-warning me-2"
//                 >
//                   Editar
//                 </Link>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(location.id)}
//                 >
//                   Excluir
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // src/pages/locations/index.jsx
// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { fetchLocations, deleteLocation } from '../../services/locations';
// import { fetchUsers } from '../../services/users';
// import styles from './styles.module.css'

// export function LocationsPage() {
//   const navigate = useNavigate();
//   const [locations, setLocations] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const data = await fetchLocations();
//         setLocations(data);
//       } catch (error) {
//         console.error('Erro ao buscar locais:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

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

//   const handleDelete = async (id) => {
//     try {
//       await deleteLocation(id);
//       const updatedLocations = locations.filter((location) => location.id !== id);
//       setLocations(updatedLocations);
//     } catch (error) {
//       console.error('Erro ao deletar local:', error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className="d-flex justify-content-between mb-4">
//         <button
//           className="btn btn-primary"
//           onClick={() => navigate('/cadastrolocaisatividades')}
//         >
//           Cadastrar Local
//         </button>
//       </div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Nome do Local</th>
//             <th scope="col">Descrição</th>
//             <th scope="col">Práticas Esportivas</th>
//             <th scope="col">Usuário</th>
//             <th scope="col">Ações</th>
//           </tr>
//         </thead>
//         <tbody>
//           {locations.map((location) => (
//             <tr key={location.id}>
//               <td>{location.nome_do_local}</td>
//               <td>{location.descricao}</td>
//               <td>
//                 {location.praticas_esportivas.join(', ')}
//               </td>
//               <td>
//                 {users.find(
//                   (user) => user.id === location.identificador_do_usuario
//                 ).nome}
//               </td>
//               <td>
//                 <Link
//                   to={`/locais/${location.id}`}
//                   className="btn btn-primary me-2"
//                 >
//                   Acessar
//                 </Link>
//                 <Link
//                   to={`/cadastrolocaisatividades/${location.id}`}
//                   className="btn btn-warning me-2"
//                 >
//                   Editar
//                 </Link>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(location.id)}
//                 >
//                   Excluir
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// } 


// // src/pages/locations/index.jsx
// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { fetchLocations, deleteLocation } from '../../services/locations';
// import { fetchUsers } from '../../services/users';
// import styles from './styles.module.css'

// export function LocationsPage() {
//   const navigate = useNavigate();
//   const [locations, setLocations] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const data = await fetchLocations();
//         setLocations(data);
//       } catch (error) {
//         console.error('Erro ao buscar locais:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

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

//   const handleDelete = async (id) => {
//     try {
//       await deleteLocation(id);
//       const updatedLocations = locations.filter((location) => location.id !== id);
//       setLocations(updatedLocations);
//     } catch (error) {
//       console.error('Erro ao deletar local:', error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className="d-flex justify-content-between mb-4">
//         <button
//           className="btn btn-primary"
//           onClick={() => navigate('/cadastrolocaisatividades')}
//         >
//           Cadastrar Local
//         </button>
//       </div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Nome do Local</th>
//             <th scope="col">Descrição</th>
//             <th scope="col">Práticas Esportivas</th>
//             <th scope="col">Usuário</th>
//             <th scope="col">Ações</th>
//           </tr>
//         </thead>
//         <tbody>
//           {locations.map((location) => (
//             <tr key={location.id}>
//               <td>{location.nome_do_local}</td>
//               <td>{location.descricao}</td>
//               <td>
//                 {location.praticas_esportivas.join(', ')}
//               </td>
//               <td>
//                 {users.find(
//                   (user) => user.id === location.identificador_do_usuario
//                 ).nome}
//               </td>
//               <td>
//                 <Link
//                   to={`/locais/${location.id}`}
//                   className="btn btn-primary me-2"
//                 >
//                   Acessar
//                 </Link>
//                 <Link
//                   to={`/cadastrolocaisatividades/${location.id}`}
//                   className="btn btn-warning me-2"
//                 >
//                   Editar
//                 </Link>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(location.id)}
//                 >
//                   Excluir
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// } 


// src/pages/locations/index.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchLocations, deleteLocation } from '../../services/locations';
import { fetchUsers } from '../../services/users';
import { Menu } from '../../components/Menu';
import styles from './styles.module.css'

export function LocationsPage() {
  const navigate = useNavigate();
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

  const handleDelete = async (id) => {
    try {
      await deleteLocation(id);
      const updatedLocations = locations.filter((location) => location.id !== id);
      setLocations(updatedLocations);
    } catch (error) {
      console.error('Erro ao deletar local:', error);
    }
  };

  return (
  <div className={styles.content}>
      <Menu/>
    <div className={styles.container}>
      <div className="d-flex justify-content-between mb-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/cadastrolocaisatividades')}
        >
          Cadastrar Local
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome do Local</th>
            <th scope="col">Descrição</th>
            <th scope="col">Práticas Esportivas</th>
            <th scope="col">Usuário</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.nome_do_local}</td>
              <td>{location.descricao}</td>
              <td>
                {location.praticas_esportivas.join(', ')}
              </td>
              <td>
                {users.find(
                  (user) => user.id === location.identificador_do_usuario
                ).nome}
              </td>
              <td>
                <Link
                  to={`/locais/${location.id}`}
                  className="btn btn-primary me-2"
                >
                  Acessar
                </Link>
                <Link
                  to={`/cadastrolocaisatividades/${location.id}`}
                  className="btn btn-warning me-2"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(location.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div> 
  );
} 



