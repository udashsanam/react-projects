import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  let css = 'form-control';

  const goalInputChangeHandler = event => {

    console.log(event.target.value);
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(enteredValue);
    
    if(enteredValue.trim().length === 0){
        setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
    {/* inside the ` <value> ` treated as string  */}
      <div className={!isValid? 'form-control invalid':`form-control`}>
        <label >Course Goal</label>
        <input 
         type="text" onChange={goalInputChangeHandler}  />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
