import React from 'react';
import { shallow } from 'enzyme'
import { Home } from '../Views/Home';


describe('Test on Home view', () => {
    test('Show Home correctly', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchInlineSnapshot(`
<div
  className="makeStyles-home-2"
>
  <ForwardRef(Paper)
    className="makeStyles-paper-1"
    elevation={2}
  >
    <ForwardRef(Grid)
      className="makeStyles-grid-3"
      container={true}
      justifyContent="space-between"
      spacing={3}
    >
      <ForwardRef(Grid)
        item={true}
        md={12}
        xs={12}
      >
        <ForwardRef(Typography)
          className="makeStyles-title-4"
          color="initial"
          variant="h3"
        >
          Dog-CEO
        </ForwardRef(Typography)>
      </ForwardRef(Grid)>
      <ForwardRef(Grid)
        item={true}
        md={5}
        xs={12}
      >
        <ForwardRef(Autocomplete)
          getOptionLabel={[Function]}
          id="breeds"
          multiple={true}
          noOptionsText="Error en la comunicación con el servidor"
          onChange={[Function]}
          options={Array []}
          renderInput={[Function]}
        />
      </ForwardRef(Grid)>
      <ForwardRef(Grid)
        item={true}
        md={5}
        xs={12}
      >
        <ForwardRef(Autocomplete)
          getOptionLabel={[Function]}
          groupBy={[Function]}
          id="sub-breeds"
          multiple={true}
          noOptionsText="Error en la comunicación con el servidor"
          onChange={[Function]}
          options={Array []}
          renderInput={[Function]}
        />
      </ForwardRef(Grid)>
    </ForwardRef(Grid)>
    <ForwardRef(Grid)
      className="makeStyles-imageBlock-5"
      container={true}
      justifyContent="space-between"
      spacing={3}
    />
  </ForwardRef(Paper)>
</div>
`)
    })
})