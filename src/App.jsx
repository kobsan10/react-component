import { HashRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import RouteView from './components/RouteView'
import { routes } from './data/routeContent'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="page">
        <nav className="nav">
          {routes.map((route) => (
            <NavLink
              key={route.routeName}
              to={`/${route.routeName}`}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              {route.title}
            </NavLink>
          ))}
        </nav>

        <main className="stage">
          <Routes>
            <Route path="/" element={<Navigate to="/greetings" replace />} />
            {routes.map((route) => (
              <Route key={route.routeName} path={`/${route.routeName}`} element={<RouteView />} />
            ))}
            <Route path="*" element={<Navigate to="/greetings" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
