import { useState,useEffect } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import {getTestById,submitTest} from '../../services/testApi'

function TakeTestPage() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [test,setTest] = useState<any>(null)
    const [selectedAns,setSelectedAns] = useState<number[]>([])
    const [timeLeft,setTimeLeft] = useState<number>(0)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(()=>{
        getTestById(id as string)
        .then((data)=>{
            setTest(data);
            setTimeLeft(data.duration||300);
            setSelectedAns(Array(data.questions.length).fill(null))
        })
    },[id])

    useEffect(()=>{
        if(!timeLeft || isSubmitting) return;

        const timer = setInterval(()=>{
            setTimeLeft((prev)=>{
                if(prev < 1) {
                    clearInterval(timer);
                    handleSubmit();
                }
                return prev - 1;
            })
        },1000)

        return ()=> clearInterval(timer)
    },[timeLeft,isSubmitting])

    const handleOptionChange = (index:number,value:number)=>{
        const updated = [...selectedAns]
        updated[index] = value;
        setSelectedAns(updated)
    }

    const handleSubmit = async()=>{
        setIsSubmitting(true);
        try {
            const payload = {
                selectedAnswers:selectedAns,
                timeTaken:(test.duration || 0) - timeLeft
            };

            await submitTest(id as string,payload)
            navigate(`/student/tests/${id}/result`)

        } catch (error) {
            console.error("Submission failed:", error);
        }
    }

    if(!test) return <div className='p-4'>Loading Test...</div>


  return (
    <div className='p-4 max-w-3xl mx-auto'>
      <h2 className='text-xl font-bold mb-2'>{test.title}</h2>
      <div className='mb-4 text-red-600 font-medium'>
        Time Left: {Math.floor(timeLeft/60)}:{(timeLeft%60).toString().padStart(2,"0")}
      </div>

      {
        test.questions.map((q:any,idx:number)=>(
            <div key={idx} className='mb-4 p-3 border rounded-md bg-white dark:bg-gray-900'>
                <p className='font-medium mb-2'>
                    Q{idx+1}.{q.questionText}
                </p>
                <div className='space-y-2'>
                    {
                        q.options.map((opt:string,i:number)=>(
                            <label htmlFor="" key={i}>
                                <input type="radio" name={`q-${idx}`} value={i} checked={selectedAns[idx]=== i}onChange={()=>handleOptionChange(idx,i)}
                                className='mr-2'
                                 />
                                {opt}
                                
                            </label>
                        ))
                    }
                </div>
            </div>
        ))
      }
      <button disabled={isSubmitting} onClick={handleSubmit} className='mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700'>Submit Test</button>
    </div>
  )
}

export default TakeTestPage;
