//import React from 'react'
import { useParams } from 'react-router-dom';


function FieldDetails() {
  const patchId = useParams();
  console.log(patchId);
  return (
    <div>
      Field details will be added
    </div>
  )
}

export default FieldDetails
