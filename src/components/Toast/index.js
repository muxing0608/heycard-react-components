import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'
import './toast.less'

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const notification = ReactDOM.render(<Toast />, div)

  return {
    addNotice(notice) {
      return notification.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

let notification
const notice = (content, duration = 2000, onClose) => {
  if (!notification) notification = createNotification()
  return notification.addNotice({ content, duration, onClose })
}

export default (content, duration, onClose) => {
  return notice(content, duration, onClose)
}
