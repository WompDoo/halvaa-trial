import React, { Component } from 'react'
import Contacts from './components/contacts/Contacts'

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/Contacts')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data.data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="column sixteen wide">
            <Contacts contacts={this.state.contacts} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
