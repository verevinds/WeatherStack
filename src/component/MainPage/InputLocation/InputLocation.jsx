import React from 'react';

const InputLocation = props => {
  return (
    <div className={'search'}>
      <form onSubmit={props.handleSubmit}>
        <input
          placeholder="Введите название локации"
          defaultValue={props.query ? props.query : null}
          className={'search__input'}
          type={'search'}
          onChange={props.onChange}
        />

        <input value={'Посмотреть'} type={'submit'} className={'search__button'} />
      </form>
    </div>
  );
};

export default React.memo(InputLocation);
