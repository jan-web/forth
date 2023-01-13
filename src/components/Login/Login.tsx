import { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";

type LoginProps = {
  onLogin: (email: string, password: string) => void
}
type emailReducerState = {
  value: string,
  isValid: undefined | boolean
}
type passwordReducerState = {
  value: string,
  isValid: undefined | boolean
}
type Action = | { type: 'INPUT_BLUR' } | { type: 'USER_INPUT', value: string };


const emailReducer = (prevState: emailReducerState, action: any) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@')
    }
  }
  if(action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@')
    }
  }
  return {
    value: '',
    isValid: false
  }
}
const passwordReducer = (prevState: passwordReducerState, action: Action) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7
    }
  }
  if(action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7
    }
  }
  return {
    value: '',
    isValid: false
  }
}


const Login = (props: LoginProps) => {
  // const [inputEmail, setInputEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState<boolean | null>(null);
  // const [inputPassword, setInputPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {value: '', isValid: true});
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {value: '', isValid: undefined});
  // useEffect(()=> {
  //   console.log('Зашeл в useEffect');

  //   const timer = setTimeout(()=> {
  //     console.log('Effect function');
  //   setFormIsValid(
  //     inputEmail.includes("@") && inputPassword.trim().length > 7
  //   );
  //   }, 1000)
  //   return ()=> {
  //     console.log('Cleaning');
  //     clearTimeout(timer);
  //   }

  // }, [inputEmail, inputPassword]);
 const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmailState({type: 'USER_INPUT', value: event.target.value})
    setFormIsValid(
      emailState.isValid && passwordState.isValid
    ) };
  const validateEmailHandler = () => {
    dispatchEmailState({type: 'INPUT_BLUR'})
  };

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPasswordState({type: 'USER_INPUT', value: event.target.value})
    setFormIsValid(
      event.target.value.trim().length > 7 && emailState.isValid
    ) };
  const validatePasswordHandler = () => {
    dispatchPasswordState({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };


  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
