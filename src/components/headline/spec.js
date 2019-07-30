import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttribute } from './../../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Description'
      };
      wrapper = setUp(props);
    });
    it('Should render without errors', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a H1', () => {
      const h1 = findByTestAttribute(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('Shoud render a desc', () => {
      const desc = findByTestAttribute(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
