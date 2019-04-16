import { withFormik } from 'formik';
import handlers from './handlers';
import Presentation from './Presentation';

export default withFormik(handlers)(Presentation);
