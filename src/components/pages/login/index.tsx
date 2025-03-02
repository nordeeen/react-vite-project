import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    localStorage.setItem('token', '123');
    console.log('login');
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-red-500 font-bold text-3xl capitalize">login dong</p>
      <button type="button" onClick={loginHandler}>
        clicked
      </button>
    </div>
  );
};

export default Login;