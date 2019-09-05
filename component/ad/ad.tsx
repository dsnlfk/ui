import * as React from 'react'
import { LobbyEntity } from '@/component/request_result'
import { Player, BigPlayButton } from 'video-react'
import './ad.scss'

type Props = {
  item: LobbyEntity,
  click?: any,
}

// type State = {
//   ckAd: boolean,
// }

class Ad extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = this._getInitialState()
  }

  _getInitialState() {
    return {
      ckAd: false,
    }
  }

  // _ckPlayButton() {
  //   this.setState({
  //     ckAd: true,
  //   })
  // }

  render() {
    const { item, click } = this.props
    // const { ckAd } = this.state
    if (item) {
      return <React.Fragment>
        <div className="advertising-video">
          {/* <ul style={{
            display: ckAd ? 'none' : 'block',
            backgroundImage: `url(${item.imgUrl})`
          }}><li onClick={this._ckPlayButton.bind(this)}></li></ul> */}
          {/* <video ref="$ad" src={item.videoUrl} controls poster={item.imgUrl}></video> */}

          <Player poster={item.imgUrl}>
            <source src={item.videoUrl}/>
            <BigPlayButton position="center" />
          </Player>
        </div>
        <div className="advertising-item">
          <img src={item.icon} />
          <div className="title">{item.name}</div>
          <div className="detail">{item.desc}</div>
          <a className="go" onClick={click.bind(this, item)} href={item.link}>GO</a>
        </div>
      </React.Fragment>
    }
    return null;
  }
}

export default Ad