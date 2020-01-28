import React from 'react'
import './Contacts.scss';
import NewContact from './../shared/NewContact'

const Contacts = ({ contacts }) => {
  console.log(contacts)
  return (
    <div className="ui segments">
      {contacts.map((contact, index) => (
        <div className="ui segment">
          <div key={index} role="list" className="ui list">
            <div role="listitem" className="item">
              <i aria-hidden="true" className="users icon"></i>
              <div className="content">{contact.fullName}</div>
            </div>
            <div role="listitem" className="item">
              <i aria-hidden="true" className="mail icon"></i>
              <div className="content"><a href="mailto:jack@semantic-ui.com">{contact.email}</a></div>
            </div>
            <div role="listitem" className="item">
              <i aria-hidden="true" className="phone icon"></i>
              <div className="content"><a href="tel:{contact.phone}">{contact.phone}</a></div>
            </div>
          </div>
        </div>
      ))}
      <NewContact />
    </div>
  )
};

export default Contacts;