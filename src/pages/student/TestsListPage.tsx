import { useState,useEffect } from 'react'
import {getAllTests} from '../../services/testApi'
import { Link } from 'react-router-dom'

function TestsListPage() {

    const [tests,setTests] = useState([])

    useEffect(()=>{
        getAllTests()
        .then(setTests)
    },[])

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Available Tests</h2>
      <div className='grid gap-4'>
        {tests.map((test:any)=>(
            <div key={test._id} className='border rounded-md p-4 bg-white dark:bg-gray-800'>
                <h3 className='text-lg font-semibold'>{test.title}</h3>
                <p>Duration : {test.duration} minutes</p>
                <p>{test.paid ? "🔒 Paid":"🆓 Free"}</p>
                <Link className='mt-2 inline-block text-purple-600 hover:underline' to={`student/tests/${test._id}`}>Start Test</Link>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TestsListPage;
