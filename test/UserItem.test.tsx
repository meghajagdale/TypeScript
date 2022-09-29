import React from 'react';

import {userData} from './mockdata/userdata';
import {cleanup} from '@testing-library/react-native';
import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';
import {HomeContentType} from '../src/types/HomeType';
import UserItem from '../src/screens/Home/UserItem';

describe('When rendering user items', () => {
  afterEach(cleanup);
  const navigation = {navigation: jest.fn()};

  it('Should render correctly', () => {
    const props: HomeContentType = {
      item: userData,
      navigation: navigation,
    };

    renderWithRedux(<UserItem {...props} />);
  });
});
