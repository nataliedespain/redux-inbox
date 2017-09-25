const initialState = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MARK_READ':
      return state.map(message => {
        if (message.id !== action.id) {
          return message;
        }
        return {
          ...message,
          read: true
        }
      })
    case 'TOGGLE_STAR':
      return state.map(message => {
        if (message.id !== action.id) {
          return message;
        }
        return {
          ...message,
          starred: !message.starred
        }
      })
    case 'TOGGLE_SELECT':
      return state.map(message => {
        if (message.id !== action.id) {
          return message;
        }
        return {
          ...message,
          selected: !message.selected
        }
      })
    case 'BULK_SELECT':
      return state.map(message => {
        if (state.every(message => message.selected)) {
          return {
            ...message,
            selected: false
          }
        }
        return {
          ...message,
          selected: true
        }
      })
    case 'BULK_MARK_READ':
      return state.map(message => {
        if (message.selected === true) {
          return {
            ...message,
            read: true
          }
        }
        return message;
      })
    case 'BULK_MARK_UNREAD':
      return state.map(message => {
        if (message.selected === true) {
          return {
            ...message,
            read: false
          }
        }
        return message;
      })
    case 'ADD_LABEL':
      return state.map(message => {
        if (message.selected === true && !message.labels.includes(action.val)) {
          return {
            ...message,
            labels: message.labels.concat(action.val)
          }
        }
        return message;
      })
    case 'REMOVE_LABEL':
      return state.map(message => {
        if (message.selected === true) {
          message.labels.splice(message.labels.indexOf(action.val), 1);
          return {
            ...message,
            labels: message.labels
          }
        }
        return message;
      })
    case 'DELETE_MESSAGE':
      return state.filter(message => {
        if (message.selected !== true) {
          return message
        }
      })
    default:
      return state;
  }
}

export default reducer;
