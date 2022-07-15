import React from 'react'
import './index.css'

class Setting extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      DataisLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/Prochnost55/mockJSONApi/appId')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
      })
  }

  render() {
    const {DataisLoaded, items} = this.state
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      )

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>
        {items.map(item => (
          <ol key={item.id}>
            Id:{item.id}, Success: {item.success}
          </ol>
        ))}
      </div>
    )
  }
}

export default Setting
