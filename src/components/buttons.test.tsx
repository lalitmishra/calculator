import * as React from "react";
import * as Enzyme from 'enzyme';
import Button from "./buttons";

describe('Suit for testing button component', () => {
    const wrapper = Enzyme.mount(<Button title='test Button' onClick={() => { /*Do nothing */}}/>);
    it('should test button render', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper).toBeDefined();
    });
});