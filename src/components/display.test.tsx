import * as React from "react";
import * as Enzyme from 'enzyme';
import Display from "./display";

describe('Suit for testing display component', () => {
    const wrapper = Enzyme.mount(<Display className='testClass' value='someValue'/>);
    it('should test display render', () => {
        expect(wrapper.find('p').length).toBe(1);
    });
});