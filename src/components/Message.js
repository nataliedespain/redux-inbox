import React from 'react';

const Message = ({ message, setMessageClass, markRead, markStar, markSelect }) => (
  <div>
    <div className={ setMessageClass(message.id) } onClick={ (e) => markRead(message.id, e) }>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={ message.selected ? true : false } onChange={ (e) => markSelect(message.id) } />
          </div>
          <div className="col-xs-2">
            <i className={ message.starred ? "star fa fa-star" : "star fa fa-star-o" } onClick={ () => markStar(message.id) }></i>
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

export default Message;
