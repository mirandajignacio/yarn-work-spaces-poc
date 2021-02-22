import React, { FunctionComponent } from 'react';
import { useAppDispatch } from '../../context/AppContext';

const Chapter: FunctionComponent = () => {
  console.log('Chapter');
  const dispatch = useAppDispatch();
  console.log({ dispatch });

  return (
    <div>
      Chapter
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>Click!</button>
    </div>
  );
};

export default Chapter;
