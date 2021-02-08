import React from 'react';
import {configure,shallow} from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() });

describe('<NavigationItems/>',() => {
    let wrapper;
    // it will be excuted befor every Testing
    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>);
    })

    it('should render three(3) <NavigationItems/> elements if not authenticated ', () => {
        // const wrapper = shallow(<NavigationItems/>);

        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

     it('should render four(4) <NavigationItems/> elements if is authenticated ', () => {
        // const wrapper = shallow(<NavigationItems isAuth/>);
        wrapper.setProps({isAuth : true})
        expect(wrapper.find(NavigationItem)).toHaveLength(4);
    })
});