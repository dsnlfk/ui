import * as React from 'react';
import * as ReactSwipe from 'react-swipes'
import { LobbyEntity } from '@/component/request_result'
import "./card_swipe.scss"

interface State {
  moved: boolean | null;
  originalPoint: number | null;
  newPoint: number;
  cancelled: boolean | null;
}
type Props = {
  card: LobbyEntity[],
  click?: any,
}
const cardSwipe: React.FC<Props> = ({
  card,
  click,
}) => {
  const currentPoint = 1;
  const [data, setData] = React.useState<State | null>({
    newPoint: currentPoint,
    moved: null,
    originalPoint: null,
    cancelled: null
  })

  function _click(item, index) {
    if (click) click(item, index)
  }

  const opt = {
    distance: 32 / 36 * window.innerWidth, // 每次移动的距离，卡片的真实宽度
    currentPoint: currentPoint,// 初始位置，默认从0即第一个元素开始
    autoPlay: false, // 是否开启自动播放
    swTouchstart: (ev) => {

    },
    swTouchmove: (ev) => {

    },
    swTouchend: (ev) => {
      setData({
        moved: ev.moved,
        originalPoint: ev.originalPoint,
        newPoint: ev.newPoint,
        cancelled: ev.cancelled
      });
    }
  }

  if (card && card.length > 0) {
    return (
      <div className="card-swipe" >
        <ReactSwipe className="card-slide" options={opt}>
          {card.length && card.map((item, index) => {
            const cls = `item ${index === data.newPoint ? 'current' : ''}`
            return <a className={cls} key={index} style={{
              backgroundImage: `url(${item.imgUrl})`
            }} href={item.link} onClick={_click.bind(this, item, index)}></a>
          })}
        </ReactSwipe>
      </div>
    )
  }
  return null
}

export default React.memo(cardSwipe);