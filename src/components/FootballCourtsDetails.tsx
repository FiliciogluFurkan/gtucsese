//import React from 'react'
import { useParams } from 'react-router-dom';


function FootballCourtsDetails() {
  const footballCourtId = useParams();
  console.log(footballCourtId);
  return (
    <div>
      Field details will be added
    </div>
  )
}

export default FootballCourtsDetails
