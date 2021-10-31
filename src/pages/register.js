import React, { Component } from "react";
import Header from '../components/header';

class RegisterPage extends Component {

 constructor(props){
   super(props);
   this.state = {
     username : '',
     password : '',
     isVisible : true,
     showPassword : false
   }
 }
  
 onHandleInput = (event) => {
   this.setState({
     [event.target.name] : event.target.value
   })
 }

 onSubmit(){
   console.log(this.state)
 }

 onShow(){
   this.setState({
     isVisible : true
   })
 }

 onHide(){
    this.setState({
      isVisible : false
    })
 }

 showPassword(status){
   this.setState({
     showPassword : status
   })
 }

  render() {
    return (
      <div>
        <Header></Header>
        <h1>This is a Register Page !!</h1>
        <button className="waves-effect waves-light btn">button</button>
        <button className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</button>
        <button className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>button</button>
        <br /><br />
        <h4>Given input values should display in console as an Object and also HTML</h4>
        <div className="space-bottom">
          <label className="label">Enter your Email ID :</label>
          <input className="input" type="text" placeholder="Please enter your email id.." onChange={this.onHandleInput} name="username"/>
        </div>
        <div className="space-bottom align-flex">
          <label className="label">Enter your Password :</label>
          <input className={this.state.showPassword ? "input" : "input"}  type={this.state.showPassword ? "text" : "password"} placeholder="Please enter your password.." onChange={this.onHandleInput} name="password"/>
       
        {this.state.showPassword ?  
          <img src={require("../image/open-eye.png").default} className="icon"
          onClick={() => this.showPassword(false)} alt=""/>
          :
          <img src={require("../image/close-eye.png").default} className="icon"
          onClick={() => this.showPassword(true)} alt=""/>
        }
        </div>
        <br /><br />
        <button onClick = {() => {this.onSubmit()}}>Login to Facebook</button>
        <div>
          <h4>Email id is: {this.state.username} </h4>
          <h4>Password is: {this.state.password} </h4>
        </div>
        <br /><br />

        <h4>Inline if with logical && operator : </h4>
        {this.state.isVisible && <div>
          <img src = {require("../image/black-business-computer-desk.jpg").default} className= "image" alt="profile" />
          <img src = {require("../image/black-business-computer-desk.jpg").default} className= "image1" alt="profile1" />
        </div>}
        <br /><br />
        <button onClick = {() =>{this.onShow()}}>Show</button>
        <button onClick = {() =>{this.onHide()}}>Hide</button>
        
      </div>
     
    )
  }
}

export default RegisterPage;