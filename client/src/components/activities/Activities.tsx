import React from 'react';
import { IActivity } from '../../domain/activity';
import { Link } from 'react-router-dom';

export const Activities: React.FC<ActivitiesProps> = (props) => {
  let activities: IActivity[] = [
    {
      id: '1',
      name: `test activity`,
      type: `test type`,
      created: new Date(),
    },
  ];
  const noResults = <div>No Activities found</div>;
  return activities ? (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex"><h1>Activities</h1></div>
        <div className="d-flex align-items-center"><Link to='/activity'> <button className="btn-sm btn-primary" >Add</button></Link></div>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => 
             (<tr key={activity.id}>
              <th scope="row">1</th>
              <td>{activity.name}</td>
              <td>{activity.type}</td>
              <td>{activity.created.toDateString()}</td>
            </tr>)
          )}
        </tbody>
      </table>
    </>
  ) : (
    noResults
  );
};
interface ActivitiesProps {}
