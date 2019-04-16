import React from 'react';
import { Input, Button } from 'reactstrap';

const Presentation = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} name="name" />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}

      <Button type="submit">Save</Button>
    </form>
  );
};

export default Presentation;
