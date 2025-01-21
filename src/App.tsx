import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 使用 React.lazy 动态导入组件
const Login = lazy(() => import('./pages/login/login'));
const Register = lazy(() => import('./pages/login/register'));
const Layout = lazy(() => import('./components/layout/index'));
const Log = lazy(() => import('./pages/log/index'));


function App() {
  // 模拟登录状态
  const token = localStorage.getItem('token')
  return (
    <Router>
      {/* 使用 Suspense 包裹懒加载的组件 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* 进入系统，未登录则跳转 */}
          <Route  path="/" element={ token ? <Layout /> : <Navigate to="/login" />} >
            {/* 日志页面 */}
            <Route path="/" element={ <Log />} />
          </Route>
          {/* 登录页面 */}
          <Route path="/login"  element={ token ? <Navigate to="/" /> : <Login />} />
          {/* 注册页面 */}
          <Route  path="/register" element={token ? <Navigate to="/" /> : <Register />} />
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;