
import React, { Component } from 'react';
import './FormContainer.scss';

import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button'

export class FormContainer extends Component {
  state = {
    user: {
      name: "",
      email: "",
      about: "",
    }
  }

  formSubmitHandler = (e) => {
    console.log("formSubmitHandler körs");
    //Submit form
    e.preventDefault();
  }
  clearFormHandler = (e) => {
    //Reset form
    e.preventDefault();
  }

  // fullNameHandler = (e) => {
  //   let value = e.target.value;
  //   this.setState(prevState => ({
  //     user:
  //       { ...prevState.user, name: value }
  //   }), () => console.log(this.state.user))
  // }

  // emailHandler = (e) => {
  //   let value = e.target.value;
  //   this.setState(prevState => ({
  //     user:
  //     {
  //       ...prevState.user, email: value
  //     }
  //   }), () => console.log(this.state.user))
  // }
  // textAreaHandler = (e) => {
  //   let value = e.target.value;
  //   this.setState(prevState => ({
  //     user:
  //     {
  //       ...prevState.user, about: value
  //     }
  //   }), () => console.log(this.state.user))
  // }

  //Works for all inputs
  InputHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        user: { ...prevState.user, [name]: value }
      }
    }, () => console.log(this.state.user))
  }

  render() {
    return (
      <form>
        <div className="container">
          <Input
            title={'Namn'}
            type={'text'}
            name={'name'}
            value={this.state.user.name}
            placeholder={'Namn'}
            handleChange={this.InputHandler}
          />
          <Input
            title={'E-post adress'}
            type={'text'}
            name={'email'}
            value={this.state.user.email}
            placeholder={'E-post adress'}
            handleChange={this.InputHandler}
          />
          <TextArea
            title={'Din text'}
            name={"about"}
            rows={10}
            cols={1}
            value={this.state.user.about}
            handleChange={this.InputHandler}
            placeholder={"Din text"}
          />
          <div className="btn-container">
            <Button
              title={"Skicka"}
              action={this.formSubmitHandler}
            />
            {/* <Button title={"Rensa"} /> */}
          </div>
        </div>
      </form>
    )
  }
}

export default FormContainer;
