import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listSalarys } from '../graphql/queries';
import { deleteSalary } from '../graphql/mutations';
import NewSalary from './newSalary';

function ReadSalary({ user }) {
  const [salary, setSalary] = React.useState();
  React.useEffect(() => {
    getSalary();
  }, []);

  const getSalary = async () => {
    try {
      let resp = await API.graphql(graphqlOperation(listSalarys));
      setSalary(resp.data.listSalarys.items[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const delSalary = async (e) => {
    // e.preventDefault()
    try {
      await API.graphql(
        graphqlOperation(deleteSalary, { input: { id: salary.id } })
      );
      getSalary();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {salary ? (
        <div>
          <h3>Your Salary Details is</h3>
          <ul>
            <li>Name: {salary.name}</li>
            <li>Position: {salary.position}</li>
            <li>Salary: {salary.wage}</li>
            <li>Currency: {salary.currency}</li>
          </ul>
          <button onClick={() => delSalary()}>Delete Salary</button>
        </div>
      ) : (
        <NewSalary user={user} />
      )}
    </div>
  );
}

export default ReadSalary;
