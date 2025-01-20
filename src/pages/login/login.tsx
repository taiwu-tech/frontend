import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'your_token'); // 存储登录状态
    // 模拟登录成功
    navigate('/'); // 登录成功后跳转到首页
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={ handleLogin }>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;