import * as React from 'react'
import { LobbyEntity } from '@/component/request_result'
import './roller.scss'

type Props = {
  items: LobbyEntity[],
  title: string,
  icon: string,
  click?: any,
}


const Roller: React.FC<Props> = ({ items, title, icon, click }) => {

  function _click(item, index) {
    if (click) click(item, index)
  }

  if (items && items.length > 0) {
    return <React.Fragment>
      <div className="roller-title" style={{
        backgroundImage: `url(${icon})`
      }}>{title}</div>
      <div className="slide-box">
        {items.map((item, index) => {
          return (
            <a className="slide-item" key={index} onClick={_click.bind(this, item, index)} href={item.link}>
              <img src={item.icon} />
              <span>{item.name}</span>
            </a>
          )
        })}
      </div>
    </React.Fragment>
  }
  return null;
}

export default React.memo(Roller)