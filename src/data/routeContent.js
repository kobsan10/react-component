// Content for every route, keyed by the route's URL segment (its "route name").
// RouteView (src/components/RouteView.jsx) reads the current route name and
// looks the matching entry up here, so one component can render three
// completely different data shapes.
export const routeContent = {
  greetings: {
    routeName: 'greetings',
    title: 'Greetings',
    type: 'message',
    heading: 'Hello there! 👋',
    body: 'Welcome to this little React Router demo. Use the tab above to jump between pages — every page you visit is rendered by the exact same component, it just receives different data.',
  },

  profiles: {
    routeName: 'profiles',
    title: 'Profiles',
    type: 'profile',
    heading: 'Profile',
    fields: [
      { label: 'Name', value: 'Bhone Pyae San' },
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'Location', value: 'Remote' },
      { label: 'Bio', value: 'Enjoys building clean, small UIs and learning new frameworks.' },
    ],
  },

  hobbies: {
    routeName: 'hobbies',
    title: 'My Hobbies',
    type: 'list',
    heading: 'Things I enjoy',
    items: [
      'Watching Sci-fi movies',
      'Photography',
      'Playing football',
      'Building small side projects',
      'Playing video games',
    ],
  },
}

export const routes = Object.values(routeContent)