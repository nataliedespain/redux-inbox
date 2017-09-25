import React from 'react';

const Message = ({ message, markRead, toggleStar, toggleSelect }) => (
  <div>
    <div className={ setMessageClass(message) } onClick={ (e) => markRead(message.id) }>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={ message.selected ? true : false } onChange={ (e) => toggleSelect(message.id) } />
          </div>
          <div className="col-xs-2">
            <i className={ message.starred ? "star fa fa-star" : "star fa fa-star-o" } onClick={ () => toggleStar(message.id) }></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        { message.labels.map((label, i) => <span key={ i } className="label label-warning">{ label }</span>) }
        <a href="#">
          { message.subject }
        </a>
      </div>
    </div>
  </div>
)

const setMessageClass = (message) => {
  if (message.read && message.selected) {
    return "row message read selected";
  } else if (!message.read && message.selected) {
    return "row message unread selected";
  } else if (message.read) {
    return "row message read";
  } else if (!message.read) {
    return "row message unread";
  }
}

export default Message;


// markRead
