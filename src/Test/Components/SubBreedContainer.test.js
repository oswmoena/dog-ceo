import React from 'react';
import { shallow } from 'enzyme'
import { SubBreedContainer } from '../../Components/SubBreedContainer';
import { getBreed } from '../../Providers/Provider';


describe('Test on SubBreed Container component', () => {
    test('Show SubBreedContainer correctly', () => {
        const wrapper = shallow(<SubBreedContainer />);
        expect(wrapper).toMatchSnapshot()
    })

    test('get sub breed selected', async () => {
        const breed = await getBreed('hound', 'english')

        const { status, message } = breed

        expect(status).toBe('success')
        expect(message.length).toBe(3)

    })

    test('get only 3 sub breeds', async () => {
        const breed = await getBreed('hound', 'english')

        const { status, message } = breed

        expect(message.length).toBe(3)

    })
})