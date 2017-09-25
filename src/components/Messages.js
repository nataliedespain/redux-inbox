import React from 'react';
import Message from './Message';
import { connect } from 'react-redux';

const Messages = ({ markRead, setMessageClass, toggleStar, toggleSelect, state }) => (
  <div className="row">
    <div className="container">
      { state.map((message, i) =>
        <Message
          key={ i }
          markRead={ markRead }
          setMessageClass={ setMessageClass }
          toggleStar={ toggleStar }
          toggleSelect={ toggleSelect }
          message={ message } />
      ) }
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => {
  return {
    markRead: (id) => dispatch({
      type: 'MARK_READ',
      id
    }),
    toggleStar: (id) => dispatch({
      type: 'TOGGLE_STAR',
      id
    }),
    toggleSelect: (id) => dispatch({
      type: 'TOGGLE_SELECT',
      id
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)
