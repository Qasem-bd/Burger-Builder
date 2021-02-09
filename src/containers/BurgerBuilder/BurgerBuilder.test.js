import {BurgerBuilder } from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients = {() => {}}/>)
    });

    it('should render <BuildControls /> when Receiving Ingredients', () => {
        wrapper.setProps({ings: {salad : 0,meat : 1}})
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
})