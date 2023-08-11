import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit=(event)=>{
    event.preventDefault();
    const{text}=this.state;

    if(text.trim()!==""){
      this.props.handleAdd({text});
    }

    this.setState({
      text:""
    })
  }

  render() {
    return (
      <div className="form">
        < form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button>Add</button>
        </ form>
      </div>
    );
  }
}
