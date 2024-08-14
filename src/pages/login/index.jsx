// src/pages/login/index.jsx
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useAuth } from '../../contexts/auth'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/users'

export function LoginPage() {
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
      const user = users.find(
        (user) => user.email === dados.email && user.senha === dados.password
      );

      if (user) {
        await signIn(user);
        navigate('/dashboard');
      } else {
        setErrorMessage("Usuário ou senha inválidos.");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.formSignin}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="mb-4"
            src="https://images.pexels.com/photos/612999/pexels-photo-612999.jpeg"
            alt="Natureza 365"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Faça login</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Esse campo é obrigatório',
                },
              })}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          {errors.email && (
            <span className="text-danger text-sm">{errors.email.message}</span>
          )}
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register('password')}
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          {errorMessage && (
            <span className="text-danger text-sm">{errorMessage}</span>
          )}
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Carregando...' : 'Entrar'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            Natureza 365 &copy; 2024
          </p>
          <p>
            Não possui cadastro? <Link to="/cadastro">Cadastra-se</Link>
          </p>
        </form>
      </div>
    </main>
  );
}