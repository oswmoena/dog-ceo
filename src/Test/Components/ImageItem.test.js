import React from 'react';
import { shallow } from 'enzyme'
import { ImageItem } from '../../Components/ImageItem';


describe('Test on Image Item component', () => {
    test('Show ImageItem correctly', () => {
        const wrapper = shallow(<ImageItem />);
        expect(wrapper).toMatchSnapshot()
    })
})