import { useEffect, useState } from "react";
//
import ListVisits from "./ListVisits"
//import useGetDataFromUrl from "../hooks/useGetDataFromUrl"
import usePostDataToUrl from "../hooks/usePostDataToUrl"
// types
import { ParamsToFilterVisitsBy, ResponseFromUsePostDataToUrl } from "../visitTypes/ourTypes"


const DisplayVisits = () => {
  //
  const [hospitalDept, setHospitalDept] = useState("")
  const [lastName, setLastName] = useState("")

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function findVisits() {
    let filterdata: ParamsToFilterVisitsBy = {};
    filterdata.hospitalDepartmentName = hospitalDept;
    filterdata.patientLastName = lastName;

    let postUrl: string = 'http://mickspatientvisitwebapi.azurewebsites.net/api/Visit/FlterByPostBody'

    // Try to get the matching Visits from the endpoint
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filterdata)
    };
    //
    // Now POST it to the endpoint      
    fetch(postUrl, requestOptions)
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('Sorry we could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      setData(data);
      setError(null);
    })
    .catch(err => {
      // catch network / connection error
      setError(err.message);
    })
    //
  }

  return (
    <>
      <div className="form-row">
        <label htmlFor="hospitalDeptTextInput">Filter by Dept</label>
        <input value={hospitalDept} type="text" id="hospitalDeptTextInput" onChange={e => setHospitalDept(e.target.value)} />
        <label htmlFor="patientLastNameInput">Filter by LastName</label>
        <input value={lastName} type="text" id="patientLastNameInput" onChange={e => setLastName(e.target.value)} />
        <button className="btn" onClick={findVisits}>Show Visits</button>
      </div>

      <div className="home">
        { error && <div>{ error }</div> }
        { data && <ListVisits visits={data} />}
      </div>
    </>
  );  

}
 
export default DisplayVisits;