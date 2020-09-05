import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createSalary } from '../graphql/mutations';

function NewSalary({user}) {
  const [name, setName] = React.useState();
  const [position, setPosition] = React.useState();
  const [wage, setWage] = React.useState();
  const [currency, setCurrency] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let input = {
        name: user,
        position,
        wage,
        currency
      };
      let newSalary = await API.graphql(graphqlOperation(createSalary, { input }));
      setName('');
      setPosition('');
      setWage('');
      setCurrency('');
      console.log('new salary created ->>', newSalary);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div> */}
        <div>
          <label>
            Position:
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Wage:
            <input
              type="text"
              value={wage}
              onChange={(e) => setWage(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Currency:
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewSalary;
