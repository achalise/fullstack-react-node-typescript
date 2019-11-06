import React from 'react';
import {render, cleanup, waitForElement, wait, fireEvent, getByTestId, queryByAttribute} from '@testing-library/react'
import { Activity } from './Activity';

afterEach(cleanup);

describe(`Activity tests`, () => {
    it(`Should correctly load the activity entry form`, async (done) => {
        const {container, getByText} = render(<Activity/>);
        let element = await waitForElement(() => getByText('Name:'));
        expect(element).toMatchSnapshot();

        element = await waitForElement(() => getByText('Type:'));
        expect(element).toMatchSnapshot();
        done();
    })

    it(`Should correctly validate the text input field for name`, async(done) => {
        const byId = queryByAttribute.bind(null, 'id');
        const {container, getByText} = render(<Activity/>);
        let element = await waitForElement(() => byId(container, 'name'));
        expect(element).toMatchSnapshot();
        fireEvent.change(element, {
            target: {
                value: `as`
            }
        });
        let error = await waitForElement(() => getByText(`Name must be at least 3 characters`));
        expect(error).toMatchSnapshot();
        done();
    })
})
