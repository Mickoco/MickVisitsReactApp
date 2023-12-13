import { FilterVisitsForDisplay } from "../visitTypes/ourTypes"


type Props = {
    visits: FilterVisitsForDisplay[]
};

const ListVisits = ({ visits }: Props) => {
    return (
      <div className="blog-list">
        {visits.map(visit => (
          <div className="blog-preview" >
            <h2>Dept: { visit.departmentName } - Patient { visit.patientFirstName } { visit.patientLastName }</h2>
            <p>Appointment: { visit.description }</p>
            <p>Time: { visit.time }</p>
            <p>Completed: { visit.completed }</p>
            <p>No Show: { visit.noShowByPatient }</p>
            <p>Canceled by Dept: { visit.cancelledByHospitalDepartment }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default ListVisits;