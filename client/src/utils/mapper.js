import * as actions from '../actions/mainActions';
import * as commonActions from '../actions/commonActions';
import * as initializationActions from '../actions/initializationActions';
import { isInitializing } from '../utils/selectors';

export const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const props = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
  return { ...props };
};

export function mapStateToProps(state) {
  return {
    isInitializing: isInitializing(state.app.init),
    auth: state.app.main.auth,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setInitializing: data => dispatch(initializationActions.setInitializing(data)),
    setError: data => dispatch(commonActions.setError(data)),
    setAuth: data => dispatch(actions.setAuth(data)),
  };
}
