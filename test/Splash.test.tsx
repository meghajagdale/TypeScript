import 'react-native';
import React from 'react';

import {cleanup, waitFor} from '@testing-library/react-native';

import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';

import SplashScreen from '../src/screens/Splash';

// import renderer from 'react-test-renderer';

const navigation = {
  navigation: jest.fn(),
  route: jest.fn(),
};

describe('When rendering home', () => {
  afterEach(cleanup);
  // beforeEach(jest.useFakeTimers());
  it('Should render correctly', async () => {
    await waitFor(() => {
      renderWithRedux(<SplashScreen navigation={navigation} />);
    });
  });
});
