import React from 'react';
import { shallow } from 'enzyme'
import { BreedContainer } from '../Components/BreedContainer';


describe('Test on Breed Container component', () => {
    test('Show BreedContainer correctly', () => {
        const wrapper = shallow(<BreedContainer />);
        expect(wrapper).toMatchInlineSnapshot(`
<div
  className="makeStyles-loader-1"
>
  <Memo(ForwardRef(AutorenewIcon))
    className="makeStyles-animatedItem-2"
  />
</div>
`)
    })
})