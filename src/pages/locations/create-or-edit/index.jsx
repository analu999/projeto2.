// // src/pages/locations/create-or-edit/index.jsx (sem via cep)
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   fetchLocations,
//   createLocation,
//   updateLocation,
// } from '../../../services/locations';
// import { fetchUsers } from '../../../services/users';
// import { useForm } from 'react-hook-form';
// import styles from './styles.module.css'

// export function CreateOrEditLocationPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [location, setLocation] = useState(null);
//   const [users, setUsers] = useState([]);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     setValue,
//   } = useForm();

//   useEffect(() => {
//     const fetchLocation = async () => {
//       if (id) {
//         try {
//           const data = await fetchLocations();
//           setLocation(data.find((item) => item.id === id));
//         } catch (error) {
//           console.error('Erro ao buscar local:', error);
//         }
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

//   useEffect(() => {
//     if (location) {
//       setValue('nome_do_local', location.nome_do_local);
//       setValue('descricao', location.descricao);
//       setValue('localizacao.cep', location.localizacao.cep);
//       setValue('localizacao.endereco', location.localizacao.endereco);
//       setValue('localizacao.numero', location.localizacao.numero);
//       setValue('localizacao.bairro', location.localizacao.bairro);
//       setValue('localizacao.cidade', location.localizacao.cidade);
//       setValue('localizacao.estado', location.localizacao.estado);
//       setValue('localizacao.latitude', location.localizacao.latitude);
//       setValue('localizacao.longitude', location.localizacao.longitude);
//       setValue('praticas_esportivas', location.praticas_esportivas);
//       setValue(
//         'identificador_do_usuario',
//         location.identificador_do_usuario
//       );
//     }
//   }, [location, setValue]);

//   const onSubmit = async (data) => {
//     try {
//       if (id) {
//         await updateLocation(id, data);
//         navigate('/locais');
//       } else {
//         await createLocation(data);
//         navigate('/locais');
//       }
//     } catch (error) {
//       console.error('Erro ao salvar local:', error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className="mb-4">
//         {id ? 'Editar Local' : 'Cadastrar Local'}
//       </h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-3">
//           <label htmlFor="nome_do_local" className="form-label">
//             Nome do Local
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="nome_do_local"
//             placeholder="Nome do Local"
//             {...register('nome_do_local', {
//               required: {
//                 value: true,
//                 message: 'Nome do Local é obrigatório',
//               },
//             })}
//           />
//           {errors.nome_do_local && (
//             <span className="text-danger text-sm">
//               {errors.nome_do_local.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="descricao" className="form-label">
//             Descrição
//           </label>
//           <textarea
//             className="form-control"
//             id="descricao"
//             rows="3"
//             placeholder="Descrição do Local"
//             {...register('descricao', {
//               required: {
//                 value: true,
//                 message: 'Descrição é obrigatória',
//               },
//             })}
//           />
//           {errors.descricao && (
//             <span className="text-danger text-sm">
//               {errors.descricao.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.cep" className="form-label">
//             CEP
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.cep"
//             placeholder="CEP"
//             {...register('localizacao.cep', {
//               required: {
//                 value: true,
//                 message: 'CEP é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.cep && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.cep.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.endereco" className="form-label">
//             Endereço
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.endereco"
//             placeholder="Endereço"
//             {...register('localizacao.endereco', {
//               required: {
//                 value: true,
//                 message: 'Endereço é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.endereco && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.endereco.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.numero" className="form-label">
//             Número
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.numero"
//             placeholder="Número"
//             {...register('localizacao.numero', {
//               required: {
//                 value: true,
//                 message: 'Número é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.numero && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.numero.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.bairro" className="form-label">
//             Bairro
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.bairro"
//             placeholder="Bairro"
//             {...register('localizacao.bairro', {
//               required: {
//                 value: true,
//                 message: 'Bairro é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.bairro && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.bairro.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.cidade" className="form-label">
//             Cidade
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.cidade"
//             placeholder="Cidade"
//             {...register('localizacao.cidade', {
//               required: {
//                 value: true,
//                 message: 'Cidade é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.cidade && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.cidade.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.estado" className="form-label">
//             Estado
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.estado"
//             placeholder="Estado"
//             {...register('localizacao.estado', {
//               required: {
//                 value: true,
//                 message: 'Estado é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.estado && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.estado.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.latitude" className="form-label">
//             Latitude
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.latitude"
//             placeholder="Latitude"
//             {...register('localizacao.latitude', {
//               required: {
//                 value: true,
//                 message: 'Latitude é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.latitude && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.latitude.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="localizacao.longitude" className="form-label">
//             Longitude
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="localizacao.longitude"
//             placeholder="Longitude"
//             {...register('localizacao.longitude', {
//               required: {
//                 value: true,
//                 message: 'Longitude é obrigatório',
//               },
//             })}
//           />
//           {errors.localizacao?.longitude && (
//             <span className="text-danger text-sm">
//               {errors.localizacao.longitude.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="praticas_esportivas" className="form-label">
//             Práticas Esportivas
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="praticas_esportivas"
//             placeholder="Práticas Esportivas (separadas por vírgula)"
//             {...register('praticas_esportivas', {
//               required: {
//                 value: true,
//                 message: 'Práticas Esportivas é obrigatório',
//               },
//             })}
//           />
//           {errors.praticas_esportivas && (
//             <span className="text-danger text-sm">
//               {errors.praticas_esportivas.message}
//             </span>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="identificador_do_usuario" className="form-label">
//             Usuário
//           </label>
//           <select
//             className="form-select"
//             id="identificador_do_usuario"
//             {...register('identificador_do_usuario', {
//               required: {
//                 value: true,
//                 message: 'Usuário é obrigatório',
//               },
//             })}
//           >
//             <option value="">Selecione um usuário</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.nome}
//               </option>
//             ))}
//           </select>
//           {errors.identificador_do_usuario && (
//             <span className="text-danger text-sm">
//               {errors.identificador_do_usuario.message}
//             </span>
//           )}
//         </div>

//         <button
//           className="btn btn-primary"
//           type="submit"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Salvando...' : 'Salvar'}
//         </button>
//       </form>
//     </div>
//   );
// }


// src/pages/locations/create-or-edit/index.jsx (com via cep)
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  fetchLocations,
  createLocation,
  updateLocation,
} from '../../../services/locations';
import { fetchUsers } from '../../../services/users';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

export function CreateOrEditLocationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm();

  // Função para buscar o endereço pelo CEP usando a API do ViaCEP
  const fetchAddressByCEP = async (cep) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        // Tratar o erro de CEP inválido
        console.error('CEP inválido!');
        return;
      }
      // Preencher os campos do formulário com os dados do endereço
      setValue('localizacao.endereco', data.logradouro);
      setValue('localizacao.bairro', data.bairro);
      setValue('localizacao.cidade', data.localidade);
      setValue('localizacao.estado', data.uf);
    } catch (error) {
      console.error('Erro ao buscar endereço pelo CEP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (id) {
        try {
          const data = await fetchLocations();
          setLocation(data.find((item) => item.id === id));
        } catch (error) {
          console.error('Erro ao buscar local:', error);
        }
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

  useEffect(() => {
    if (location) {
      setValue('nome_do_local', location.nome_do_local);
      setValue('descricao', location.descricao);
      setValue('localizacao.cep', location.localizacao.cep);
      setValue('localizacao.endereco', location.localizacao.endereco);
      setValue('localizacao.numero', location.localizacao.numero);
      setValue('localizacao.bairro', location.localizacao.bairro);
      setValue('localizacao.cidade', location.localizacao.cidade);
      setValue('localizacao.estado', location.localizacao.estado);
      setValue('localizacao.latitude', location.localizacao.latitude);
      setValue('localizacao.longitude', location.localizacao.longitude);
      setValue('praticas_esportivas', location.praticas_esportivas);
      setValue(
        'identificador_do_usuario',
        location.identificador_do_usuario
      );
    }
  }, [location, setValue]);

  // Observar o campo CEP para disparar a busca de endereço
  const cep = watch('localizacao.cep');
  useEffect(() => {
    if (cep) {
      // Remover caracteres não numéricos do CEP
      const cepFormatted = cep.replace(/\D/g, '');
      if (cepFormatted.length === 8) {
        fetchAddressByCEP(cepFormatted);
      }
    }
  }, [cep, fetchAddressByCEP, setValue]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await updateLocation(id, data);
        navigate('/locais');
      } else {
        await createLocation(data);
        navigate('/locais');
      }
    } catch (error) {
      console.error('Erro ao salvar local:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className="mb-4">
        {id ? 'Editar Local' : 'Cadastrar Local'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="nome_do_local" className="form-label">
            Nome do Local
          </label>
          <input
            type="text"
            className="form-control"
            id="nome_do_local"
            placeholder="Nome do Local"
            {...register('nome_do_local', {
              required: {
                value: true,
                message: 'Nome do Local é obrigatório',
              },
            })}
          />
          {errors.nome_do_local && (
            <span className="text-danger text-sm">
              {errors.nome_do_local.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            className="form-control"
            id="descricao"
            rows="3"
            placeholder="Descrição do Local"
            {...register('descricao', {
              required: {
                value: true,
                message: 'Descrição é obrigatória',
              },
            })}
          />
          {errors.descricao && (
            <span className="text-danger text-sm">
              {errors.descricao.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.cep" className="form-label">
            CEP
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.cep"
            placeholder="CEP"
            {...register('localizacao.cep', {
              required: {
                value: true,
                message: 'CEP é obrigatório',
              },
            })}
          />
          {errors.localizacao?.cep && (
            <span className="text-danger text-sm">
              {errors.localizacao.cep.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.endereco" className="form-label">
            Endereço
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.endereco"
            placeholder="Endereço"
            {...register('localizacao.endereco', {
              required: {
                value: true,
                message: 'Endereço é obrigatório',
              },
            })}
            disabled={isLoading}
          />
          {errors.localizacao?.endereco && (
            <span className="text-danger text-sm">
              {errors.localizacao.endereco.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.numero" className="form-label">
            Número
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.numero"
            placeholder="Número"
            {...register('localizacao.numero', {
              required: {
                value: true,
                message: 'Número é obrigatório',
              },
            })}
          />
          {errors.localizacao?.numero && (
            <span className="text-danger text-sm">
              {errors.localizacao.numero.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.bairro" className="form-label">
            Bairro
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.bairro"
            placeholder="Bairro"
            {...register('localizacao.bairro', {
              required: {
                value: true,
                message: 'Bairro é obrigatório',
              },
            })}
            disabled={isLoading}
          />
          {errors.localizacao?.bairro && (
            <span className="text-danger text-sm">
              {errors.localizacao.bairro.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.cidade" className="form-label">
            Cidade
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.cidade"
            placeholder="Cidade"
            {...register('localizacao.cidade', {
              required: {
                value: true,
                message: 'Cidade é obrigatório',
              },
            })}
            disabled={isLoading}
          />
          {errors.localizacao?.cidade && (
            <span className="text-danger text-sm">
              {errors.localizacao.cidade.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.estado" className="form-label">
            Estado
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.estado"
            placeholder="Estado"
            {...register('localizacao.estado', {
              required: {
                value: true,
                message: 'Estado é obrigatório',
              },
            })}
            disabled={isLoading}
          />
          {errors.localizacao?.estado && (
            <span className="text-danger text-sm">
              {errors.localizacao.estado.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.latitude" className="form-label">
            Latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.latitude"
            placeholder="Latitude"
            {...register('localizacao.latitude', {
              required: {
                value: true,
                message: 'Latitude é obrigatório',
              },
            })}
          />
          {errors.localizacao?.latitude && (
            <span className="text-danger text-sm">
              {errors.localizacao.latitude.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="localizacao.longitude" className="form-label">
            Longitude
          </label>
          <input
            type="text"
            className="form-control"
            id="localizacao.longitude"
            placeholder="Longitude"
            {...register('localizacao.longitude', {
              required: {
                value: true,
                message: 'Longitude é obrigatório',
              },
            })}
          />
          {errors.localizacao?.longitude && (
            <span className="text-danger text-sm">
              {errors.localizacao.longitude.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="praticas_esportivas" className="form-label">
            Práticas Esportivas
          </label>
          <input
            type="text"
            className="form-control"
            id="praticas_esportivas"
            placeholder="Práticas Esportivas (separadas por vírgula)"
            {...register('praticas_esportivas', {
              required: {
                value: true,
                message: 'Práticas Esportivas é obrigatório',
              },
            })}
          />
          {errors.praticas_esportivas && (
            <span className="text-danger text-sm">
              {errors.praticas_esportivas.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="identificador_do_usuario" className="form-label">
            Usuário
          </label>
          <select
            className="form-select"
            id="identificador_do_usuario"
            {...register('identificador_do_usuario', {
              required: {
                value: true,
                message: 'Usuário é obrigatório',
              },
            })}
          >
            <option value="">Selecione um usuário</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.nome}
              </option>
            ))}
          </select>
          {errors.identificador_do_usuario && (
            <span className="text-danger text-sm">
              {errors.identificador_do_usuario.message}
            </span>
          )}
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
    </div>
  );
}