import { withFormik } from 'formik';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import handlers from './handlers';
import Presentation from './Presentation';

export default compose(
  graphql(gql`
    query {
      spaces {
        name
      }
    }
  `),
  withFormik(handlers)
)(Presentation);
