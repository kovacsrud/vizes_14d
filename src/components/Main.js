import Tiszakep from '../images/tisza2.JPG';

function Main() {
  return (
    
    <div className="hero min-h-screen bg-sky-100 my-3">
    <div className="hero-content flex-col lg:flex-row bg-sky-300 rounded-md ">
      <img src={Tiszakep} class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold text-sky-800">Frontend vizsga!</h1>
        <p className="py-6 text-sky-700">Tisza menti városok vízállás értékei.</p>
        <p className="py-6 text-sky-700">Vízügyi igazgatóságok adatai.</p>
        
      </div>
    </div>
    </div>
    
  )
}

export default Main;