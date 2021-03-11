import React from "react";
import Message from "./Message.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      firstname: "",
      surname: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Automatic Business Letter Generator</h1>
        <form>
          <div className="formContainer">
            <select
              onChange={() => this.setState({ gender: event.target.value })}
            >
              <option value="">Geschlecht</option>
              <option value="Mr.">Männlich</option>
              <option value="Ms.">Weiblich</option>
              <option value="">Keine Ahnung</option>
            </select>
            <input
              placeholder="Vorname"
              type="text"
              onChange={() => this.setState({ firstname: event.target.value })}
            />
            <input
              placeholder="Nachname"
              type="text"
              onChange={() => this.setState({ surname: event.target.value })}
            />
          </div>
          {this.state.firstname && this.state.surname ? (
            <Message
              gender={this.state.gender}
              firstname={this.state.firstname}
              surname={this.state.surname}
            />
          ) : (
            <div> </div>
          )}
        </form>
      </div>
    );
  }
}

export default App;
