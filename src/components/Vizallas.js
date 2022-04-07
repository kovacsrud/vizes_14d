import {useState} from 'react';
import VizallasElem from './VizallasElem';

function Vizallas() {
  const [vizallas,setVizallas]=useState([]);
  const [varos,setVaros]=useState("");
  const keres=()=>{
    fetch(`http://localhost:8000/vizallas/${varos}`)
    .then(res=>res.json())
    .then(adat=>setVizallas(adat))
    .catch(err=>console.log(err));
  }

  return (
   
    <div className='py-5'>
      <div className='flex flex-row items-center justify-center'>
        <div className='mx-2'><input onChange={(e)=>setVaros(e.target.value)} type="text" placeholder="Város neve" className="input w-full max-w-xs" /></div>
        <div className='mx-2'><button onClick={()=>keres()} className="btn btn-ghost">Keresés</button></div>
        <div className='flex flex-row flex-wrap items-center justify-center'>
          {
            vizallas.map((elem,index)=>(<VizallasElem key={index} elem={elem} />))
          }

        </div>

      </div>
    </div>
  )
}

export default Vizallas;