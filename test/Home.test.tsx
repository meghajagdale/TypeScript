import 'react-native';
import React from 'react';
import Home from '../src/screens/Home/Home';

import {cleanup, waitFor} from '@testing-library/react-native';

import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';

// import renderer from 'react-test-renderer';

const navigate = jest.fn();

describe('When rendering home', () => {
  afterEach(cleanup);
  // beforeEach(jest.useFakeTimers());
  it('Should render correctly', async () => {
    await waitFor(() => {
      renderWithRedux(<Home navigation={navigate} />);
    });
  });
});
