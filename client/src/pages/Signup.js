import React, { useState } from 'react';
import { Form, Button, Alert, Card, Col } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutation';
import Auth from '../utils/auth';

const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', firstName: '', lastName: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [addUser, {error}] = useMutation(SIGNUP_USER);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            Auth.login(data.addUser.token);

        } catch (e) {
            console.error(e);
        }


        setUserFormData({
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
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
                            src={require('../images/signup.png')}
                            style={{ width: "60%", height: "60%" }}
                            className="pt-10"
                        />
                    </div>
                    <Card.Body>
                        {/* This is needed for the validation functionality above */}
                        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                            {/* show alert if server response is bad */}
                            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                Something went wrong with your signup!
                            </Alert>

                            <Form.Group>
                                <Form.Label htmlFor='username'>Username</Form.Label>
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
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Email'
                                    name='email'
                                    onChange={handleInputChange}
                                    value={userFormData.email}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='firstName'>First Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='First Name'
                                    name='firstName'
                                    onChange={handleInputChange}
                                    value={userFormData.firstName}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>First name is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Last Name'
                                    name='lastName'
                                    onChange={handleInputChange}
                                    value={userFormData.lastName}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Last name is required!</Form.Control.Feedback>
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
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SignupForm;
