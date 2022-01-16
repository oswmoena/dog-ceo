import React from 'react';
import { shallow } from 'enzyme'
import { Home } from '../../Views/Home';
import { getAllBreeds } from '../../Providers/Provider';


describe('Test on Home view', () => {
    test('Show Home correctly', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot()
    })

    test('bring all breeds', async ()=>{
        const breeds = await getAllBreeds()

        expect(breeds.length).not.toBe(0)
    })
})