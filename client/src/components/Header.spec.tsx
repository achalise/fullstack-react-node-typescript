import React from 'react';
import Navigation from './Navigation';
import { createTestStore } from '../test-utils/store-utils';
import { BrowserRouter } from 'react-router-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import { AppState } from '../store/types';

const initialState: AppState = {
  auth: { id: '' },
};

const setUp = (state: AppState): any => {
  const store = createTestStore(state);
  const component = TestUtils.renderIntoDocument(
    <BrowserRouter>
      <Navigation store={store} />
    </BrowserRouter>,
  );
  return component;
};

const setUpWithEnzyme = (props = {}): any => {
  const store = createTestStore(initialState);
  const wrapper = shallow(<Navigation store={store} />);
  return wrapper;
};

describe(`Header Component Tests`, () => {
  it(`Should display Login in Header component when user not logged in`, () => {
    const wrapper = setUp(initialState);
    const nodes = TestUtils.scryRenderedDOMComponentsWithClass(wrapper, 'nav-link');
    expect(nodes[2].textContent).toEqual('Log in');
  });

  it(`Should display Dashboard in Header component when user logged in`, () => {
    const wrapper = setUp({...initialState, auth: {...initialState.auth, id: 'something'}});
    const nodes = TestUtils.scryRenderedDOMComponentsWithClass(wrapper, 'nav-link');
    expect(nodes[2].textContent).toEqual('Dashboard');
  });
});

describe(`Header Component Tests with Enzyme`, () => {
  it(`Should successfully render the Header component`, () => {
    const wrapper = setUpWithEnzyme();
    console.log(`The wrapper from enzyme `, wrapper);
    expect(wrapper.exists()).toBeTruthy();
    const vals = wrapper.find(Navigation);
    console.log(vals.debug());
    //console.log(wrapper.debug());
  });
});
export default undefined;
