import React, {useState, useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listSalarys } from '../graphql/queries';

const AdminAccess = ()=>{
  let [salaries, setSalaries] = useState()
  const getAllSalaries = async() => {
    try{
      let res = await API.graphql(graphqlOperation(listSalarys))
      setSalaries(res.data.listSalarys.items)
    } catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getAllSalaries()
  },[])
  
  return (
    <div>
      {console.log(salaries)}
    </div>
  )
}

export default AdminAccess;