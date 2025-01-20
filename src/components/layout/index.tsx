import { Outlet } from "react-router-dom";
import Aside from "../aside/index";
import './index.less'
const Index = () => {
  return <>
    <Aside />
    <main>
      <Outlet />
    </main>
  </>
}

export default Index;