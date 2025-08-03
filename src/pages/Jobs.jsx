import React from 'react'
import { useLoaderData } from 'react-router'

function Jobs() {
  const jobs=useLoaderData();
  console.log(jobs);
  return (
    <div>
      

    </div>
  )
}

export default Jobs