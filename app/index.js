import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, connect } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync
} from './Counter/reducer/actions';

import Counter from './Counter';

const App = ({ value, ...props}) => {
  const { value: testValue } = useSelector(state => state.count);

  useEffect(()=>{
    console.log( "testValue:", testValue );
  }, []);

  console.log( value );

  return (
    <div>
      <h1>Redux-Saga</h1>
      <Counter
        value={ value }
        onIncrement={props.handleIncrement}
        onDecrement={props.handleDecrement}
        onIncrementAsync={props.handleIncrementAsync}
        />
    </div>
  );
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleIncrementIfOdd: PropTypes.func.isRequired,
  handleIncrementAsync: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
}

const mapStateToProps = ( state ) => ({
  value: state.count.value,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleIncrement: () => ( dispatch(increment()) ),
  handleIncrementIfOdd: () => ( dispatch(incrementIfOdd()) ),
  handleIncrementAsync: () => ( dispatch(incrementAsync()) ),
  handleDecrement: () => ( dispatch(decrement()) )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);