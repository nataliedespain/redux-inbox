import React from 'react';
import { connect } from 'react-redux';

const Toolbar = ({ bulkSelect, bulkMarkRead, bulkMarkUnread, addLabel, removeLabel, deleteMessage, state }) => (
  <div className="row toolbar">
    <div className="container">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{ unreadCount(state) }</span>
          unread messages
        </p>

        <button className="btn btn-default" onClick={ e => bulkSelect() }>
          <i className={ selectBoxChange(state) }></i>
        </button>

        <button className="btn btn-default" onClick={ e => bulkMarkRead() }>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={ e => bulkMarkUnread() }>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={ e => addLabel(e.target.value) }>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={ e => removeLabel(e.target.value) }>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={ e => deleteMessage() }>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  </div>
)

const unreadCount = (state) => {
  return state.reduce((acc, message) => {
    if (message.read === false) acc += 1;
    return acc;
  }, 0)
}

const selectBoxChange = (state) => {
  let all = state.every(message => message.selected);
  let some = state.some(message => message.selected);
  if (all) {
    return "fa fa-check-square-o";
  } else if (some) {
    return "fa fa-minus-square-o";
  } else {
    return "fa fa-square-o";
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => {
  return {
    bulkSelect: () => dispatch({
      type: 'BULK_SELECT'
    }),
    bulkMarkRead: () => dispatch({
      type: 'BULK_MARK_READ'
    }),
    bulkMarkUnread: () => dispatch({
      type: 'BULK_MARK_UNREAD'
    }),
    addLabel: (val) => dispatch({
      type: 'ADD_LABEL',
      val
    }),
    removeLabel: (val) => dispatch({
      type: 'REMOVE_LABEL',
      val
    }),
    deleteMessage: (val) => dispatch({
      type: 'DELETE_MESSAGE',
      val
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)
