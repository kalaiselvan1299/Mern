import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : '',
        }
    }

    render (){
        const { email, password} = this.state;
        return(
            <Container className="small-container">
      <Helmet>
        <title>LOGIN</title>
      </Helmet>
      <h1 className="my-3">LOGIN</h1>
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={e => this.setState({email : e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={e => this.setState({password : e.target.value})}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={'/signup'}>Create your account</Link>
        </div>
      </Form>
    </Container>

        )
    }

    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
      

    }
}

export default Login;