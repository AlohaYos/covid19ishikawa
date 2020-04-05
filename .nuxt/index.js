import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_workbox_64267e07 from 'nuxt_plugin_workbox_64267e07' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_71b2f47d from 'nuxt_plugin_nuxticons_71b2f47d' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_plugin_18ae7ef9 from 'nuxt_plugin_plugin_18ae7ef9' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_vuescrollto_0494d7fe from 'nuxt_plugin_vuescrollto_0494d7fe' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_pluginrouting_6749e33b from 'nuxt_plugin_pluginrouting_6749e33b' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_3a454a14 from 'nuxt_plugin_pluginmain_3a454a14' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_googleanalytics_3d25279b from 'nuxt_plugin_googleanalytics_3d25279b' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_vuechart_2d0fe6ea from 'nuxt_plugin_vuechart_2d0fe6ea' // Source: ../plugins/vue-chart.ts (mode: 'all')
import nuxt_plugin_axe_caeadecc from 'nuxt_plugin_axe_caeadecc' // Source: ../plugins/axe (mode: 'all')
import nuxt_plugin_vuetify_7b7634d3 from 'nuxt_plugin_vuetify_7b7634d3' // Source: ../plugins/vuetify.ts (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"prefix":"og: http:\u002F\u002Fogp.me\u002Fns#","lang":"en"},"titleTemplate":"%s | 石川県 新型コロナウイルス感染症対策サイト（非公式）","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fstopcovid19.metro.tokyo.lg.jp"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:site","name":"twitter:site","content":"@tokyo_bousai"},{"hid":"twitter:creator","name":"twitter:creator","content":"@tokyo_bousai"},{"hid":"fb:app_id","property":"fb:app_id","content":"2879625188795443"},{"hid":"note:card","property":"note:card","content":"summary_large_image"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"石川県 新型コロナウイルス感染症対策サイト（非公式）"},{"hid":"author","name":"author","content":"YOS"},{"hid":"description","name":"description","content":"石川県 新型コロナウイルス感染症対策サイト（非公式）"},{"hid":"theme-color","name":"theme-color","content":"#00a040"},{"hid":"og:title","name":"og:title","property":"og:title","content":"石川県 新型コロナウイルス感染症対策サイト（非公式）"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"石川県 新型コロナウイルス感染症対策サイト（非公式）"},{"hid":"og:description","name":"og:description","property":"og:description","content":"石川県 新型コロナウイルス感染症対策サイト（非公式）"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-icon","href":"\u002Fapple-touch-icon-precomposed.png"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.6.1\u002Fcss\u002Fall.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.7e92bcd1.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.9c74d6.png"}],"style":[],"script":[],"title":"石川県 新型コロナウイルス感染症対策サイト（非公式）"},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_64267e07 === 'function') {
    await nuxt_plugin_workbox_64267e07(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_71b2f47d === 'function') {
    await nuxt_plugin_nuxticons_71b2f47d(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_18ae7ef9 === 'function') {
    await nuxt_plugin_plugin_18ae7ef9(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_0494d7fe === 'function') {
    await nuxt_plugin_vuescrollto_0494d7fe(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_6749e33b === 'function') {
    await nuxt_plugin_pluginrouting_6749e33b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_3a454a14 === 'function') {
    await nuxt_plugin_pluginmain_3a454a14(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_3d25279b === 'function') {
    await nuxt_plugin_googleanalytics_3d25279b(app.context, inject)
  }

  if (typeof nuxt_plugin_vuechart_2d0fe6ea === 'function') {
    await nuxt_plugin_vuechart_2d0fe6ea(app.context, inject)
  }

  if (typeof nuxt_plugin_axe_caeadecc === 'function') {
    await nuxt_plugin_axe_caeadecc(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetify_7b7634d3 === 'function') {
    await nuxt_plugin_vuetify_7b7634d3(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
