import React from 'react';
import * as actions from '../../actions';
import { useFormValidator } from '../../form-utils/form-validator';
import { validate } from './activity-validator';
import { ErrorMessage } from '../ErrorMessage';
import { connect } from 'react-redux';
import { IActivity } from '../../domain/activity';

const InitialState = {
  name: '',
  type: '',
} as {
  name: string;
  type: string;
};

const Activity: React.FC<ActivityProps> = (props: ActivityProps) => {
  const [values, handleChange] = useFormValidator(InitialState, validate);
  const onClick = () => {
    console.log(props);
    console.log(`Submitting the form`, values);
    props.createActivity({type: values.type, name: values.name} as IActivity);
    props.history.push('/activities');
  };
  return (
    <div className="mt-5">
      <form>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name:
          </label>
          <div className="col-sm-10">
            <input
              id="name"
              type="text"
              name="name"
              className={'form-control'}
              onChange={handleChange}
              value={values.name}
            />
            {values.error && <ErrorMessage {...values.error['name']} />}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="type" className="col-sm-2 col-form-label">
            Type:
          </label>
          <div className="col-sm-10">
            <input
              id="type"
              type="text"
              name="type"
              className="form-control"
              onChange={handleChange}
              value={values.type}
            />
            {values.error && <ErrorMessage {...values.error['type']} />}
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12 d-flex justify-content-end">
            <input type="button" className="btn-sm btn-primary mr-2" value="Cancel" />
            <input type="button" className="btn-sm btn-primary" onClick={onClick} value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect(
  null,
  actions,
)(Activity);

interface ActivityProps {
  history?: any;
  createActivity: (activity: IActivity) => {};
}
