import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  class CatNew extends Component {

  constructor(props){
      super(props)
      this.state = {
          newCat: {
              name: "",
              age: "",
              enjoys: "",
              image: ""
            },
            submitted: false
        }
    }
    handleChange = (e) => {
        let { newCat } = this.state
        newCat[e.target.name] = e.target.value
        this.setState({newCat: newCat})
      }
      handleSubmit = () => {
        this.props.createCat(this.state.newCat)
        this.setState({submitted: true})
      }


        render() {
            return (
                <div>
                    <h2>Latest new about your fluffy Cats!</h2>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newCat.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Age</Label>
                            <Input
                            type="text"
                            name="age"
                            onChange={this.handleChange}
                            value={this.state.newCat.age}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="enjoys">Enjoys</Label>
                            <Input
                            type="text"
                            name="enjoys"
                            onChange={this.handleChange}
                            value={this.state.newCat.enjoys}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image">Images</Label>
                            <Input
                            type="text"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.newCat.image}
                            />
                        </FormGroup>
                    </Form>
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}
                        >
                        Submit Cat
                    </Button>
                    {this.state.submitted && <Redirect to="/catindex" />}

                </div>
            );
        }
    }
    
    
export default CatNew;