import * as React from 'react'

import './bar.scss'

type Props = {
  icon: string;
  title: string;
  cb?: any;
  href?: any;
}

type State = {
}

class User extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = this._getInitialState()
  }

  _getInitialState() {
    return {
    }
  }

  componentDidMount() {
  }

  _click() {
    if (this.props.cb) {
      this.props.cb()
    }
  }

  render() {
    const { icon, title, href } = this.props;
    return (
      <a className="bar"
        href={href}
        onClick={this._click.bind(this)}
        style={{ backgroundImage: `url(${icon})` }}>
        {title}
        <span></span>
      </a>
    )
  }
}

export default User