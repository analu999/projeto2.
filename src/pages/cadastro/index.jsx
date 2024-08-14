// // src/pages/cadastro/index.jsx (com via cep)
// import { Link, useNavigate } from 'react-router-dom'
// import React, { useEffect } from 'react';
// import styles from './styles.module.css'
// import { useAuth } from '../../contexts/auth'
// import { useForm } from 'react-hook-form'
// import { useState } from 'react'
// import { addUser } from '../../services/users'
// import { fetchUsers } from '../../services/users'

// export function CadastroPage() {
//   const { signIn } = useAuth()
//   const navigate = useNavigate()
//   const { register, handleSubmit, formState, setValue, watch } = useForm()
//   const [users, setUsers] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const data = await fetchUsers();
//         setUsers(data);
//       } catch (error) {
//         setErrorMessage(error.message);
//       }
//     };

//     fetchUser();
//   }, []);

//   const { errors, isSubmitting } = formState

//   // Função para buscar o endereço pelo CEP usando a API do ViaCEP
//   const fetchAddressByCEP = async (cep) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//       const data = await response.json();
//       if (data.erro) {
//         // Tratar o erro de CEP inválido
//         console.error('CEP inválido!');
//         return;
//       }
//       // Preencher os campos do formulário com os dados do endereço
//       setValue('endereco.logradouro', data.logradouro);
//       setValue('endereco.bairro', data.bairro);
//       setValue('endereco.cidade', data.localidade);
//       setValue('endereco.estado', data.uf);
//     } catch (error) {
//       console.error('Erro ao buscar endereço pelo CEP:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   async function onSubmit(dados) {
//     try {
//       const existingUser = users.find((user) => user.cpf === dados.cpf);

//       if (existingUser) {
//         setErrorMessage('CPF já cadastrado');
//         return;
//       }

//       await addUser(dados);
//       navigate('/');
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   }

//   // Observar o campo CEP para disparar a busca de endereço
//   const cep = watch('endereco.cep');
//   useEffect(() => {
//     if (cep) {
//       // Remover caracteres não numéricos do CEP
//       const cepFormatted = cep.replace(/\D/g, '');
//       if (cepFormatted.length === 8) {
//         fetchAddressByCEP(cepFormatted);
//       }
//     }
//   }, [cep, fetchAddressByCEP, setValue]);

//   return (
//     <main className={styles.container}>
//       <div className={styles.formSignin}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <img
//             className="mb-4"
//             src="https://images.pexels.com/photos/18022540/pexels-photo-18022540/free-photo-of-tucano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="Natureza 365"
//             height="57"
//           />
//           <h1 className="h3 mb-3 fw-normal">
//             Cadastre-se para explorar a natureza!
//           </h1>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Nome
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Nome completo"
//               {...register('nome', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//             />
//             {errors.nome && (
//               <span className="text-danger text-sm">{errors.nome.message}</span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               CPF
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="000.000.000-00"
//               {...register('cpf', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//                 pattern: {
//                   value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
//                   message: 'Formato inválido para CPF',
//                 },
//               })}
//             />
//             {errors.cpf && (
//               <span className="text-danger text-sm">{errors.cpf.message}</span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Data de Nascimento
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="exampleFormControlInput1"
//               {...register('data_de_nascimento', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//             />
//             {errors.data_de_nascimento && (
//               <span className="text-danger text-sm">
//                 {errors.data_de_nascimento.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Sexo
//             </label>
//             <select
//               className="form-select"
//               aria-label="Default select example"
//               {...register('sexo', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//             >
//               <option value="">Selecione...</option>
//               <option value="Masculino">Masculino</option>
//               <option value="Feminino">Feminino</option>
//               <option value="Outro">Outro</option>
//             </select>
//             {errors.sexo && (
//               <span className="text-danger text-sm">{errors.sexo.message}</span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="name@example.com"
//               {...register('email', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//                 pattern: {
//                   value:
//                     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                   message: 'Formato de email inválido',
//                 },
//               })}
//             />
//             {errors.email && (
//               <span className="text-danger text-sm">{errors.email.message}</span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Senha
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="********"
//               {...register('senha', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//             />
//             {errors.senha && (
//               <span className="text-danger text-sm">
//                 {errors.senha.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               CEP
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="00000-000"
//               {...register('endereco.cep', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//             />
//             {errors.endereco?.cep && (
//               <span className="text-danger text-sm">
//                 {errors.endereco.cep.message}
//               </span>
//             )}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Logradouro
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Rua, Avenida, etc."
//               {...register('endereco.logradouro', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//               disabled={isLoading}
//             />
//             {errors.endereco?.logradouro && (
//               <span className="text-danger text-sm">
//                 {errors.endereco.logradouro.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Número
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Número da residência"
//               {...register('endereco.numero', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//             />
//             {errors.endereco?.numero && (
//               <span className="text-danger text-sm">
//                 {errors.endereco.numero.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Bairro
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Bairro"
//               {...register('endereco.bairro', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//               disabled={isLoading}
//             />
//             {errors.endereco?.bairro && (
//               <span className="text-danger text-sm">
//                 {errors.endereco.bairro.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Cidade
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Cidade"
//               {...register('endereco.cidade', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//               disabled={isLoading}
//             />
//             {errors.endereco?.cidade && (
//               <span className="text-danger text-sm">
//                 {errors.endereco.cidade.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Estado
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Estado"
//               {...register('endereco.estado', {
//                 required: {
//                   value: true,
//                   message: 'Esse campo é obrigatório',
//                 },
//               })}
//               disabled={isLoading}
//             />
//             {errors.endereco?.estado && (
//               <span className="text-danger text-sm">
//                 {errors.endereco.estado.message}
//               </span>
//             )}
//           </div>

//           <button
//             className="btn btn-primary w-100 py-2"
//             type="submit"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Carregando...' : 'Cadastrar'}
//           </button>
//           {errorMessage && (
//             <span className="text-danger text-sm">{errorMessage}</span>
//           )}

//           <p className="mt-5 mb-3 text-body-secondary">
//             Natureza 365 &copy; 2024
//           </p>
//           <p>
//             Já possui cadastro? <Link to="/">Efetuar login</Link>
//           </p>
//         </form>
//       </div>
//     </main>
//   );
// }


// src/pages/cadastro/index.jsx
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { useAuth } from '../../contexts/auth'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { addUser } from '../../services/users'
import { fetchUsers } from '../../services/users'

export function CadastroPage() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm()
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchUser();
  }, []);

  const { errors, isSubmitting } = formState

  async function onSubmit(dados) {
    try {
      const existingUser = users.find((user) => user.cpf === dados.cpf);

      if (existingUser) {
        setErrorMessage('CPF já cadastrado');
        return;
      }

      await addUser(dados);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.formSignin}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="mb-4"
            src="https://images.pexels.com/photos/18022540/pexels-photo-18022540/free-photo-of-tucano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Natureza 365"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">
            Cadastre-se para explorar a natureza!
          </h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nome completo"
              {...register('nome', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.nome && (
              <span className="text-danger text-sm">{errors.nome.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              CPF
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="000.000.000-00"
              {...register('cpf', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: 'Formato inválido para CPF',
                },
              })}
            />
            {errors.cpf && (
              <span className="text-danger text-sm">{errors.cpf.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              {...register('data_de_nascimento', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.data_de_nascimento && (
              <span className="text-danger text-sm">
                {errors.data_de_nascimento.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Sexo
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              {...register('sexo', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            >
              <option value="">Selecione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.sexo && (
              <span className="text-danger text-sm">{errors.sexo.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Formato de email inválido',
                },
              })}
            />
            {errors.email && (
              <span className="text-danger text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="********"
              {...register('senha', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.senha && (
              <span className="text-danger text-sm">
                {errors.senha.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              CEP
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="00000-000"
              {...register('endereco.cep', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.endereco?.cep && (
              <span className="text-danger text-sm">
                {errors.endereco.cep.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Logradouro
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Rua, Avenida, etc."
              {...register('endereco.logradouro', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.endereco?.logradouro && (
              <span className="text-danger text-sm">
                {errors.endereco.logradouro.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Número
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Número da residência"
              {...register('endereco.numero', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.endereco?.numero && (
              <span className="text-danger text-sm">
                {errors.endereco.numero.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Bairro
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Bairro"
              {...register('endereco.bairro', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.endereco?.bairro && (
              <span className="text-danger text-sm">
                {errors.endereco.bairro.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Cidade"
              {...register('endereco.cidade', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.endereco?.cidade && (
              <span className="text-danger text-sm">
                {errors.endereco.cidade.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Estado
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Estado"
              {...register('endereco.estado', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            {errors.endereco?.estado && (
              <span className="text-danger text-sm">
                {errors.endereco.estado.message}
              </span>
            )}
          </div>

          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Carregando...' : 'Cadastrar'}
          </button>
          {errorMessage && (
            <span className="text-danger text-sm">{errorMessage}</span>
          )}

          <p className="mt-5 mb-3 text-body-secondary">
            Natureza 365 &copy; 2024
          </p>
          <p>
            Já possui cadastro? <Link to="/">Efetuar login</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
