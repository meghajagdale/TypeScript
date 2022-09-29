import {configureStore} from '@reduxjs/toolkit';

import authReDucer from '../../../src/slices/authSlice';
import usersReducer from '../../../src/slices/userSlice';
import themeReducer from '../../../src/slices/themeSlice';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';

export function renderWithRedux(renderedComponent) {
  const store = configureStore({
    reducer: {
      userAuth: authReDucer,
      users: usersReducer,
      theme: themeReducer,
    },
  });

  return render(<Provider store={store}>{renderedComponent}</Provider>);
}
