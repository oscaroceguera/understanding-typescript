import React from 'react'

type NoticeProps = {
  msg: string;
}

class Notice extends React.Component<NoticeProps> {
  static defaultProps = {
    msg: 'Hola a Todos'
  }

  render() {
    return <p>{this.props.msg}</p>
  }
}

export default Notice
