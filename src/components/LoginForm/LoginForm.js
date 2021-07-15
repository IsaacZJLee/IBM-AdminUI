import React, { useState } from 'react';
import {
  FormGroup,
  TextInput,
  FluidForm,
  Button,
  ButtonSet,
  Checkbox,
} from 'carbon-components-react';
import { ArrowRight20, ArrowLeft16 } from '@carbon/icons-react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [step, setStep] = useState(1);
  const [formTitle, setFormTitle] = useState("Enter your SHF ID");
  const [buttonActionMessage, setButtonActionMessage] = useState("Continue");

  const handleNextStep = async e => {
    e.preventDefault();

    // Password is filled
    if (password && password !== "") {
      // TODO: Handle login
      history.push('/');
    }

    // Username is filled
    if (username && username !== "") {
      setStep(2);
      setFormTitle(`Welcome, ${username}`);
      setButtonActionMessage('Login');
    }
  }

  const resetForm = async e => {
    e.preventDefault();

    setStep(1);
    setFormTitle('Enter your SHF ID');
    setButtonActionMessage('Continue');
  }

  const history = useHistory();

  return (
    <FormGroup onSubmit={handleNextStep} legendText="">
      <div style={{'margin': '10px 0px'}}>
        {step === 2 ? (
          <a href="/#/login/" onClick={e => resetForm(e)} style={{'marginRight': '10px', 'verticalAlign': 'middle'}}>
            <ArrowLeft16 />
          </a>
        ) : false}
        <label style={{'fontSize': '0.9rem'}}>{formTitle}</label>
      </div>

      <FluidForm>
        {step === 1 ? (
          <TextInput id="email" type="email" required labelText="Email" placeholder="john@appleseed.com" onChange={e => setUserName(e.target.value)} />
        ) : (
          
          <TextInput id="password" type="password" labelText="Password" onChange={e => setPassword(e.target.value)} />
        )}

        <ButtonSet style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Button kind="primary" type="submit" renderIcon={ArrowRight20}>{buttonActionMessage}</Button>
        </ButtonSet>

        <Checkbox defaultChecked={true} labelText={`Remember ID`} id="checkbox-remember-id" />
      </FluidForm>
    </FormGroup>
  );
};

export default LoginForm;
