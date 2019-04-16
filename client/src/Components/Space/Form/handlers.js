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

  handleSubmit: (values, { setSubmitting }) => {},

  displayName: 'Space',
};
