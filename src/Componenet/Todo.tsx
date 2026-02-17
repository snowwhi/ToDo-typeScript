import React, { useState ,useRef} from 'react'
import 'remixicon/fonts/remixicon.css'
 interface TodoItem {
  msg: string;
}
const Todo = () => {
  const ref =useRef<(HTMLHeadingElement | null)[]>([]);
    const delref =useRef<(HTMLHeadingElement | null)[]>([]);

  const [msg,setMsg] =useState('')
   const [isChecked, setIsChecking] = useState(false);
  const [list,setList]=useState<TodoItem[]>([]);
  const HandleSubmit =(event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      console.log(msg)
      const CopyList=[...list]
      CopyList.push({msg})
      setList(CopyList)
      setMsg('')
    }
  }
  const handlecomplete =(idx:number)=>{
    const completed = !isChecked
       setIsChecking(completed)
       const h1ref = ref.current[idx];
     if (completed) {
        
        h1ref!.style.textDecoration = 'line-through';
        h1ref!.style.color = 'gray'; 
      } else {
        h1ref!.style.color='white';
        h1ref!.style.textDecoration = 'none';
      }
  }
  const handleDelete =(idx:number)=>{
   delref.current[idx]!.remove()
  }
 const handleEdit = (idx: number) => {
  const title = ref.current[idx];
  if (title) {
    title.contentEditable = "true"; 
    title.focus(); 
    console.log(`Index ${idx} is now editable`);
  }
};
  return (
    <div className='w-2/3 min-h-1/2 rounded-2xl bg-white p-4'>
     <h1 className='text-3xl font-bold text-slate-950'>Todo List</h1>
     <input className='w-full px-4 py-2 outline-2 rounded-2xl'  type="text" placeholder='Whats the agenda of Today babe' onKeyDown={HandleSubmit}  value={msg} onChange={(e)=>setMsg(e.target.value)}/>
     <div className='flex gap-2 flex-col' >

     {list.map(function (element,idx) {
       return(
         <div key={idx} className='mt-2 w-full h-10 bg-slate-950 rounded-2xl px-4 py-1 flex gap-2 relative' ref={(el) => {delref.current[idx] = el; }}>
          <input type="checkbox" name="Check" id="check"  onChange={() => handlecomplete(idx)}/>
          <h2 
  ref={(el) => (ref.current[idx] = el)}
  className='text-2xl text-white font-bold'
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.blur(); 
    }
  }}
  onBlur={(e) => {
    e.currentTarget.contentEditable = "false";
    e.currentTarget.style.outline = "none";
    e.currentTarget.style.backgroundColor = "transparent";
    const newList = [...list];
    newList[idx].msg = e.currentTarget.innerText;
    setList(newList);
  }}
>
  {element.msg}
</h2>
          <div className='absolute right-2 text-white flex gap-2  text-lg ' >

           <button  className='p-1 ' type="button" onClick={()=>handleEdit(idx)}><i className="ri-edit-2-fill"></i></button>
           <button  className='p-1 ' type="button" onClick={()=>handleDelete(idx)}><i className="ri-close-circle-fill"></i></button>
          </div>
          </div>
        )
      })}
    </div>
      </div>
  )
}

export default Todo