import {useState,useEffect} from 'react';

function Igazgatosag() {
  const [ig,setIg]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/igazgatosagok')
    .then(res=>res.json())
    .then(adat=>setIg(adat))
    .catch(err=>console.log(err));

  },[]);

  return (
    <div>
      <h1 className='text-5xl my-5 text-center'>Vízügyi igazgatóságok listája</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-stretch'>
        {
          ig.map((elem)=>(
            <div className='justify-self-center bg-sky-200 rounded-md w-96 my-1'  key={elem.id}>
            <div className='my-1  text-center'>{elem.nev}</div>
            <div className='my-1  text-center'>{elem.kozpont}</div>
            </div>
          ))
        }
        
      </div>

    </div>
  )
}

export default Igazgatosag;