import { createSpace } from '../../../utils/clientHelper';

export default {
  mapPropsToValues: () => ({ name: '' }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};



    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: async (values, { setSubmitting }) => {
    const name = values.name;
    const res = await createSpace({ name });
  },

  displayName: 'Space',
};
