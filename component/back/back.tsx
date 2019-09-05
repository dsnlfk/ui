import * as React from 'react'
import './back.scss'

const back: React.FC<{}> = () => {
  function _click() {
    history.go(-1)
  }
  return (
    <div className="back">
      <ul onClick={_click}>
        <span></span>Back
      </ul>
    </div>
  )
}

export default React.memo(back)