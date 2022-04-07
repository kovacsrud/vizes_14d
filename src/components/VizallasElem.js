
function VizallasElem({elem}) {
  return (
    <div className="indicator m-3">
    <span className="indicator-item badge badge-primary">{elem.varos}</span> 
    <div className="grid w-32 h-32 bg-base-300 place-items-center">{elem.nap}</div>
    <div className="grid w-32 h-32 bg-base-300 place-items-center">{elem.ido}</div>
    <div className="grid w-32 h-32 bg-base-300 place-items-center">Vízállás:{elem.vizAllas} cm</div>
    </div>
  )
}

export default VizallasElem;