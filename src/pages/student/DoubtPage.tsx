import { useEffect, useState } from "react"
import { createDoubt, deleteDoubt, getMyDoubts } from "../../services/DoubApi"
import DoubtCard from "../../components/DoubtCard"

type Doubt = {
    _id:string,
    question:string,
    answer?:string
}

const DoubtPage = ()=>{
    const [doubts,setDoubts] = useState<Doubt[]>([])
    const [question,setQuestion] = useState<string>("")
    const [loading,setLoading] = useState<boolean>()

    const fetchDoubts = async ()=>{
        setLoading(true)
        const res = await getMyDoubts();

        setDoubts(res)
        setLoading(false)
    };

    const handleAsk = async()=>{
        if(!question.trim()) return;
        await createDoubt(question);
        setQuestion("")
        fetchDoubts()
    }

    const handleDelete = async(id:string)=>{
        await deleteDoubt(id)
        fetchDoubts()
    };

    //just run during the component mounting
    useEffect(()=>{
        fetchDoubts()
    },[])

    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Ask a doubt</h1>

            <div className="mb-6 flex flex-col sm:flex-row gap-2">
            <input type="text" placeholder="Type your doubt..." value={question} onChange={(e)=>setQuestion(e.target.value)} className="border p-2 rounded-md flex-1" name="" id="" />

            <button onClick={handleAsk} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Submit</button>
            </div>

            <h2 className="text-xl font-semibold mb-2">Your Doubts</h2>

            {loading ?(<p>Loading...</p>) : doubts.length===0 ? (<p>No doubts yet!</p>):(
                <div className="grid gap-4">
                    {doubts.map(d=>(
                        <DoubtCard key={d._id} 
                        question={d.question}
                        answer={d.answer}
                        onDelete={()=>handleDelete(d._id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default DoubtPage;