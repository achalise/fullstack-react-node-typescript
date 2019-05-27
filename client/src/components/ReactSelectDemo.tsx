import React from 'react';
import { SelectExample } from './SelectExample';
import { AsyncSelectExample } from './AsyncSelectExample';

export const ReactSelectDemo: React.FC = () => {
  return (
    <>
      <h1>React Select Demo</h1>
      <SelectExample />
      <h1>React Async Select Demo</h1>
      <AsyncSelectExample />
    </>
  );
};
