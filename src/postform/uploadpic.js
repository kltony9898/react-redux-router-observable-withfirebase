import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import FileField from '../component/fileField';
//makeField(Input);

const Uploadpic = (props) => {
    const { handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
        <Field
            lebel = "Picture"
            name="userNickname"
            component={FileField}
            type="text"
            placeholder="Name"
            require = {true}
          />
    </form>
  );
};

export default reduxForm({
  form: 'simple',
})(Uploadpic);

Uploadpic.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
