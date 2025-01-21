import { memo } from "react"
import { useNavigate } from 'react-router-dom'
import { Tooltip } from "@douyinfe/semi-ui"
import { navs, NavItemType} from "./config"
import './index.less'

export default memo(() => {
  const navigator = useNavigate()
  return (
    <aside className="aside">
      {navs.map((i: NavItemType, idx: number) => (
        <Tooltip
          content={i.title}
          position="right"
          key={idx}
        >
          <i
            onClick={() => navigator(i.href)}
            className={`${i.icon} taiwu`}
          ></i>
        </Tooltip>
      ))}
    </aside>
  );
})