import React, {useReducer} from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1};
    default:
      throw new Error();
  }
}

const Reduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
};

export default Reduce;
