import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '@styles/Alert/Alert.css';
import { onRequestError } from '../../redux/actionCreators.jsx';

const Alert = () => {
  const error = useSelector(state => state.initialState.error);
  const dispatch = useDispatch();

  if (error)
    return (
      <div className={'alert'}>
        <pre>
          Внимание! Ошибка {error.code}: {error.info}
        </pre>
        <pre className={'alert-exit'} onClick={() => dispatch(onRequestError(null))}>
          &#10006;
        </pre>
      </div>
    );

  return null;
};

export default React.memo(Alert);
