import React from 'react';

import {userData} from './mockdata/userdata';
import {cleanup} from '@testing-library/react-native';
import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';

import UserDetails from '../src/screens/UserDetails';

describe('When rendering user items', () => {
  afterEach(cleanup);

  it('Should render correctly', () => {
    const route = {
      params: {
        item: userData,
      },
    };

    renderWithRedux(<UserDetails route={route} />);
  });
});
