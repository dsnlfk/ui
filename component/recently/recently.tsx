import * as React from 'react';
import Roller from '@/component/roller/roller';
import { LobbyEntity } from '@/component/request_result'

type Props = {
  click?: any,
}

type State = {
  items: LobbyEntity[],
}
class Recently extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = this._getInitialState()
  }

  _getInitialState() {
    let recentyleStr = localStorage.getItem('lobby_recentyle')
    return {
      items: recentyleStr ? JSON.parse(recentyleStr) : null
    }
  }

  render() {
    const { items } = this.state
    const { click } = this.props
    return <Roller items={items}
      click={click}
      title={'Recently played game'}
      icon={require('./images/recent.png')}
    />
  }
}

export default Recently