import React from 'react';
import renderer from 'react-test-renderer';
import AttributedText from '..';

describe('AttributedText', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = renderer
        .create(<AttributedText>Welcome to Ahiho!</AttributedText>)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
  describe('Interaction', () => {
    it('attributed text onPress should be fire', () => {
      // TODO: add more test case
    });
  });
});
