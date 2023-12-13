import { useState, useEffect } from 'react';
//
import { ParamsToFilterVisitsBy, ResponseFromUsePostDataToUrl } from "../visitTypes/ourTypes"

//  //use like .... 
//const [responseObject, setResponseObject] = useState<ResponseFromUsePostDataToUrl | null>(null);
// and
//let responseFromPost: ResponseFromUsePostDataToUrl = usePostDataToUrl('http://mickspatientvisitwebapi.azurewebsites.net/api/Visit/FlterByPostBody', filterdata)
//setResponseObject(responseFromPost);


const usePostDataToUrl = (postUrl: string, jsonPayload: ParamsToFilterVisitsBy): ResponseFromUsePostDataToUrl => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    //
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonPayload)
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
      setIsPending(false);
      setData(data);
      setError(null);
    })
    .catch(err => {
      // catch network / connection error
      setIsPending(false);
      setError(err.message);
    })
  }, [postUrl,jsonPayload])

  return { data, isPending, error };
}
 
export default usePostDataToUrl;