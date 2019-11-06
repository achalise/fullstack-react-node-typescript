import React from 'react';
import {render, cleanup, waitForElement, wait} from '@testing-library/react'
import {Activities} from './Activities';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe(`Activities tests`, () => {
    it(`Should display the list of activities`, async (done) => {
        const {container, getByText} = render(<BrowserRouter><Activities/></BrowserRouter> );
        const element = await waitForElement(() => getByText('Activities'));
        expect(element).toMatchSnapshot();
        done();
    })
});
