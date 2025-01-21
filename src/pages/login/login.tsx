import { Link } from 'react-router-dom';

function Login() {

  const handleLogin = () => {
    localStorage.setItem('token', 'your_token'); // 存储登录状态
    // 模拟登录成功
    location.reload()
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