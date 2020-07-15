import React, { Component } from 'react'

class Toast extends Component {
  constructor() {
    super()
    this.transitionTime = 300
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }

  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  addNotice(notice) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()
    // notices.push(notice);//展示所有的提示
    notices[0] = notice //仅展示最后一个提示

    this.setState({ notices })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }
    return () => {
      this.removeNotice(notice.key)
    }
  }

  removeNotice(key) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      }),
    })
  }

  render() {
    const { notices } = this.state
    return (
      <div className="toast-container" style={{ zIndex: 1000 }}>
        {notices.map((notice) => (
          <div className="toast-bg" key={notice.key}>
            <div className="toast-text">{notice.content}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Toast
