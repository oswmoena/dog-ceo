import React from 'react';
import { shallow } from 'enzyme'
import { SubBreedContainer } from '../Components/SubBreedContainer';


describe('Test on SubBreed Container component', () => {
    test('Show SubBreedContainer correctly', () => {
        const wrapper = shallow(<SubBreedContainer />);
        expect(wrapper).toMatchInlineSnapshot(`
<div
  className="makeStyles-loader-1"
>
  <Memo(ForwardRef(AutorenewIcon)) />
</div>
`)
    })
})