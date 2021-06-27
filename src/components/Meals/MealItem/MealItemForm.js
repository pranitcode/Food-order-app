import React,{ useRef,useState} from 'react';



import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountisValid, setAmountisValid] = useState(false);

  const amountInputRef = useRef();



  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    // console.log(enteredAmount)
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0
      || enteredAmount < 1
      || enteredAmount > 5) {
      setAmountisValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber);
}

  
  return (
    <form className={classes.form} onSubmit={submitHandler } >
      <Input
        label='Amount'
        ref={amountInputRef  }
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountisValid && <p>Please enter valid</p>}
    </form>
  );
};

export default MealItemForm;
