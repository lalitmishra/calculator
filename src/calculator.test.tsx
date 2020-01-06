import * as React from "react";
import * as Enzyme from 'enzyme';
import Calculator from "./calculator";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducers/root';
import defaultStore from './model/initState';

const store = createStore(RootReducer, defaultStore);
const props = defaultStore;

describe('Suit for testing calculator component', () => {
    const wrapper = Enzyme.mount(<Provider store={store}>
        <Calculator {...props}/>
    </Provider>);
    it('should test calculator UI render', () => {
        expect(wrapper.find('button').length).toBe(20);
        expect(wrapper.find('p').length).toBe(2);
    });
});