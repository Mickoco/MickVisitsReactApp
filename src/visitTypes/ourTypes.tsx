
// types

// To help with POST to get filter data from endpoint ( e.g. https://mickspatientvisitwebapi.azurewebsites.net/api/Visit/FlterByPostBody )
export type ParamsToFilterVisitsBy = {
    patientFirstName?: string,
    patientLastName?: string,
    patientPhoneNumber?: string,
    patientAddress?: string,
    patientEmailAddress?: string,
    hospitalDepartmentName?: string,
    completed?: boolean,
    noShowByPatient?: boolean,
    cancelledByHospitalDepartment?: boolean
}
  
// POST response type from our filter data from endpoint ( e.g. https://mickspatientvisitwebapi.azurewebsites.net/api/Visit/FlterByPostBody )
export type FilterVisitsForDisplay = {
    time: string,
    departmentName: string,
    patientFirstName: string,
    patientLastName: string,
    description: string,
    completed: true,
    noShowByPatient: true,
    cancelledByHospitalDepartment: true
}


// general response from our usePostDataToUrl hook
export type ResponseFromUsePostDataToUrl = {
    data:any, 
    isPending:boolean, 
    error:string|null 
}
