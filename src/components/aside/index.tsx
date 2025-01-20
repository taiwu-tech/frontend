import { memo } from "react"
import { useNavigate } from 'react-router-dom'
import { navs } from "./config"
import './aside.less'
export default memo(() => {
  const navigator = useNavigate()
  return <aside className="aside">
    {
      navs.map((i, idx) => {
        return <a onClick={ () => navigator(i.href) } key={ idx }>{ i.title }</a> 
      })
    } 
  </aside>
})