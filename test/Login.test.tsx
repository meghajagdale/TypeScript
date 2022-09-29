import 'react-native';
import React from 'react';
import {cleanup, waitFor} from '@testing-library/react-native';

import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';
import Login from '../src/screens/Login';

// import renderer from 'react-test-renderer';

describe('When rendering home', () => {
  afterEach(cleanup);
  // beforeEach(jest.useFakeTimers());
  it('Should render correctly', async () => {
    await waitFor(() => {
      renderWithRedux(<Login />);
    });
  });
});
