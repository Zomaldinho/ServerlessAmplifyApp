import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import AdminAccess from './components/AdminAccess';
import { listSalarys, salaryByName } from './graphql/queries';
import { deleteSalary } from './graphql/mutations';
import NewSalary from './components/newSalary';

Amplify.configure(awsconfig);

let ffPrams = [
  { type: 'username' },
  {
    type: 'password',
    label: 'Password *',
    placeholder: 'Enter your password',
    required: true,
  },
  { type: 'email' },
  {
    type: 'name',
    label: 'First Name *',
    placeholder: 'Enter your First Name',
    required: true,
  },
  {
    type: 'family_name',
    label: 'Family Name *',
    placeholder: 'Enter your family name',
    required: true,
  },
  {
    type: 'gender',
    label: 'Gender *',
    placeholder: 'Enter your gender',
    required: true,
  },
  {
    type: 'birthdate',
    label: 'Birthdate *',
    placeholder: 'Enter your birthdate',
    required: true,
  },
  ,
  {
    type: 'phone_number',
    label: 'Phone Number *',
    placeholder: 'Enter your phone number',
    required: true,
  },
];

function App() {
  const [user, setUser] = useState('');
  const [salary, setSalary] = useState();

  const fetchUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log(user.username);
    setUser(user.username);
    let resp = await API.graphql(graphqlOperation(salaryByName,{name:user.username}));
    console.log(resp)
    setSalary(resp.data.salaryByName.items[0])
  }

  // const getSalary = async () => {
  //   try {
  //     let resp = await API.graphql(graphqlOperation(listSalarys));
  //     setSalary(resp.data.listSalarys.items[0]);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const delSalary = async (e) => {
    // e.preventDefault()
    try {
      await API.graphql(
        graphqlOperation(deleteSalary, { input: { id: salary.id } })
      );
      // getSalary();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
    
  });

  useEffect(() => {
    
    // getSalary();
  });

  const signOut = () => {
    return setUser('');
  };

  // async function fetchUser() {
  //   let currentUser = await Auth.currentAuthenticatedUser();
  //   setUser(currentUser.username)
  // }

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp slot="sign-up" formFields={ffPrams} />
      <div className="App">
        <AmplifySignOut onClick={()=>setUser('')} />
        <h1 onClick={()=> fetchUser()}>Hello {user}</h1>
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
        {/* <AdminAccess /> */}
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
