import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ac74d4f = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _03853b5b = () => interopDefault(import('../pages/hosting-guide/index.vue' /* webpackChunkName: "pages/hosting-guide/index" */))
const _132f317b = () => interopDefault(import('../pages/hosting-upgrade/index.vue' /* webpackChunkName: "pages/hosting-upgrade/index" */))
const _5debfd7b = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _0c605e50 = () => interopDefault(import('../pages/terms-and-conditions/index.vue' /* webpackChunkName: "pages/terms-and-conditions/index" */))
const _ae8564fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact-us",
    component: _0ac74d4f,
    name: "contact-us"
  }, {
    path: "/hosting-guide",
    component: _03853b5b,
    name: "hosting-guide"
  }, {
    path: "/hosting-upgrade",
    component: _132f317b,
    name: "hosting-upgrade"
  }, {
    path: "/privacy-policy",
    component: _5debfd7b,
    name: "privacy-policy"
  }, {
    path: "/terms-and-conditions",
    component: _0c605e50,
    name: "terms-and-conditions"
  }, {
    path: "/",
    component: _ae8564fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
