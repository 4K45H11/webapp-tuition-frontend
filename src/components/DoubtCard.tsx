import React from "react";
import {Trash2} from 'lucide-react'

type props ={
    question: string,
    answer?:string,
    onDelete?:()=>void
};

const DoubtCard:React.FC<props> = ({question,answer,onDelete})=>{
    return(
        <div className="bg-white dark:bg-grey-800 p-4 rounded-xl shadow flex flex-col gap-2 relative">
            <p className="text-md font-semibold">{question}</p>
            {answer ? (<p>{answer}</p>):(<p>Waiting for reply...</p>)}

            {onDelete && (
                <button className="absolute top-2 right-2 text-red-500 hover:text-red-700" onClick={onDelete}>
                    <Trash2 size={16}/>
                </button>
            )}
        </div>
    )
}

export default DoubtCard;