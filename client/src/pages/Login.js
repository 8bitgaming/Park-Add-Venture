// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert, Col, Card } from 'react-bootstrap';

import { LOGIN_USER } from 'yaml/src/utils/mutation';
import auth from 'yaml/src/utils/auth';
import { useMutation } from '@apollo/client';

const Login = (props) => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });

      
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            username: '',
            password: '',
        });
    };
    return (
        <div className='homepage'>
        <Col className="container-fluid d-flex justify-content-center align-items center">
        <Card 
        className='yellow-background' 
        style={{ width: "25rem" }}
        >
            <div 
                    style={{ height: "20rem", width: "100%" }} 
                    className="d-flex align-items-center justify-content-center"
                    >
            <Card.Img
            variant="top"
            src={require('yaml/src/images/login.png')}
            style={{ width: "60%", height: "60%" }}
            />
            </div>
            <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your login credentials!
                </Alert>
                <Form.Group>
                    <Form.Label htmlFor='username'>username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Your password'
                        name='password'
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                            
                    disabled={!(userFormData.username && userFormData.password)}
                    type='submit'
                    variant='success'>
                    Submit
                    
                </Button>
            </Form>
            {error && <div>Sign up failed, invalid credentials</div>}
            </Card.Body>
        </Card>
        </Col>
        </div>
    );
};

export default Login;
