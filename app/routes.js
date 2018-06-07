
export default {
  routes: {
    '/': {
      component: () => import('./pages/Home.radi'),
    },
    '/foo': {
      component: () => import('./pages/Foo.radi'),
    },
  },
  beforeEach(to, from, next) {
    next()
    // if (to === '/restricted') {
    //   next(false)
    // } else {
    //   next()
    // }
  },
}
