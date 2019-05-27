import React from 'react';
import { colourOptions } from '../data/data';
import AsyncSelect from 'react-select/lib/Async';
export const AsyncSelectExample: React.FC = (props: any) => {
    const filter = (inputValue: string) => colourOptions.filter(colour => {
        return inputValue && colour.label.toLowerCase().includes(inputValue.toLocaleLowerCase());
    });
    const loadOptions = (inputValue: string) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(filter(inputValue));
            }, 3000)
        });

    }
  return <AsyncSelect cacheOptions defaultOptions 
  loadingMessage={() => "Please wait .."}
  loadOptions={loadOptions} noOptionsMessage={(inputValue) => {
      return  inputValue && inputValue.inputValue.length >= 3 ? 'no values' : 'no options';
    }}/>
};
