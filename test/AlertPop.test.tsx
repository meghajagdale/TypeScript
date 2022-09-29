import 'react-native';
import {cleanup, waitFor} from '@testing-library/react-native';
import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';
import {createSingleButtonAlert} from '../src/component/AlertPop';
import {OKAY, USER_PASSWORD_EMPTY, WRONG_INPUT} from '../src/utils/Constants';

// import renderer from 'react-test-renderer';
describe('When rendering home', () => {
  afterEach(cleanup);
  // beforeEach(jest.useFakeTimers());
  it('Should render correctly', async () => {
    await waitFor(() => {
      renderWithRedux(
        createSingleButtonAlert({
          AlertTitle: WRONG_INPUT,
          AlertMeassge: USER_PASSWORD_EMPTY,
          FirstButtonText: OKAY,
        }),
      );
    });
  });
});
