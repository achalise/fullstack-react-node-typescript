import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { colourOptions } from '../data/data';

export const SelectExample: React.FC = (props: any) => {
  const [state, setState] = useState({} as ISelectState);
  useEffect(() => {
    setState({
      ...state,
      isClearable: true,
      isDisabled: false,
      isLoading: false,
      isRtl: false,
      isSearchable: true,
    });
  }, [state]);

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="colour"
        options={colourOptions}
        isDisabled={state.isDisabled}
        isLoading={state.isLoading}
        isClearable={state.isClearable}
        isRtl={state.isRtl}
        isSearchable={state.isSearchable}
      />
      <div>
        <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world">
          Tweet
        </a>
      </div>
    </>
  );
};

interface ISelectState {
  isClearable: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  isRtl: boolean;
  isSearchable: boolean;
}
