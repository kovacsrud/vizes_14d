import {NavLink,Link} from 'react-router-dom';

function Navigation() {
  return (
    <div className="navbar bg-sky-300">
  <div className="flex-1">
    <NavLink to={'/'} className="btn btn-ghost normal-case text-xl text-sky-900">Főoldal</NavLink>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 text-sky-900">
      <li><NavLink to={'/vizallas'}>Vízállás lekérdezés</NavLink></li>
      <li><NavLink to={'/igazgatosag'}>Igazgatóságok</NavLink></li>
    </ul>
  </div>
</div>
  )
}

export default Navigation;