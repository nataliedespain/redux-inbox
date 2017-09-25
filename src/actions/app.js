export default markRead = (id) => {
  type: 'MARK_READ',
  id
}

export default toggleStar = (id) => {
  type: 'TOGGLE_STAR',
  id
}

export default toggleSelect = (id) => {
  type: 'TOGGLE_SELECT',
  id
}

export default bulkSelect = () => {
  type: 'BULK_SELECT'
}

export default bulkMarkRead = () => {
  type: 'BULK_MARK_READ'
}

export default bulkMarkUnread = () => {
  type: 'BULK_MARK_UNREAD'
}

export default addLabel = () => {
  type: 'ADD_LABEL'
}

export default removeLabel = () => {
  type: 'REMOVE_LABEL'
}

export default deleteMessage = () => {
  type: 'DELETE_MESSAGE'
}
