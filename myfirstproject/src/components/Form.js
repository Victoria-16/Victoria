import { Component } from "react";
class Form extends Component {
    state ={
        firstname: "",
        lastname: "",
    };
handleChange= (event) => {
this.setState({
    firstname: event.target.value,
});
}
handleLastNameChange =(event) => {
    this.setState({
        lastname: event. target.value,

    });
};
handleSumbit = (event) => {
    event.preventDefault();
    console.log({
        fname: this.state.firstname,
        lname: this. state.lastname,
    });

};
 render() {
        return (
        <div>
            Form
            <form onSubmit={this.handleSumbit}>
                <input 
                onChange={this.handleChange}
                 type="text"
                  value={this.state.firstname}
                  ></input>

                  <input 
                  value={this.state.lastname} 
                  type="text" 
                  onChange= {this.handleLastNameChange} 
                  ></input>
                  <button type="submit">Sumbit</button>
            </form>
        </div>)
    };
}
export default Form;