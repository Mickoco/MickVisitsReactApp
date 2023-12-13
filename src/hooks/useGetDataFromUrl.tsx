import { useState, useEffect } from 'react';

  //use like .... const { error, isPending, data: visits } = useGetDataFromUrl('http://mickspatientvisitwebapi.azurewebsites.net/api/Visit/All');

const useGetDataFromUrl = (url: string): {data:any, isPending:boolean, error:string|null } => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //
    fetch(url)
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
  }, [url])

  return { data, isPending, error };
}
 
export default useGetDataFromUrl;