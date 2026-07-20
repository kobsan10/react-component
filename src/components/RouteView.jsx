import { useLocation } from 'react-router-dom'
import { routeContent } from '../data/routeContent'

// The single shared component rendered by every route (see src/App.jsx).
// It figures out which page it is by reading the current route name from
// the URL, then looks up that route's data and decides how to display it.
// Same component, different output — driven entirely by the route.
function RouteView() {
  const location = useLocation()
  const routeName = location.pathname.replace(/^\/+|\/+$/g, '') || 'greetings'
  const data = routeContent[routeName]

  if (!data) {
    return (
      <div className="card">
        <h1>Not found</h1>
        <p>No content is registered for the route "{routeName}".</p>
      </div>
    )
  }

  return (
    <div className="card">
      <span className="eyebrow">/{data.routeName}</span>
      <h1>{data.heading}</h1>

      {data.type === 'message' && <p className="body-text">{data.body}</p>}

      {data.type === 'profile' && (
        <dl className="profile-fields">
          {data.fields.map((field) => (
            <div className="profile-field" key={field.label}>
              <dt>{field.label}</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {data.type === 'list' && (
        <ul className="hobby-list">
          {data.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RouteView
