import React from 'react';
import { shallow } from 'enzyme'
import { BreedContainer } from '../../Components/BreedContainer';
import { getBreed } from '../../Providers/Provider';


describe('Test on Breed Container component', () => {
    test('Show BreedContainer correctly', () => {
        const wrapper = shallow(<BreedContainer />);
        expect(wrapper).toMatchSnapshot()
    })

    test('get breed selected', async () => {
        const breed = await getBreed('akita')

        const { status, message } = breed
        
        expect(status).toBe('success')
        expect(message.length).toBe(3)

    })

    test('get only 3 breed', async () => {
        const breed = await getBreed('akita')

        const { status, message } = breed
        
        expect(message.length).toBe(3)

    })
})