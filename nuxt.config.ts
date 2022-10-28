import { defineNuxtConfig } from 'nuxt'
import colors from 'tailwindcss/colors.js'

export default defineNuxtConfig({
  extends: ['./node_modules/@docus/docs-theme'],
  github: {
    owner: 'mockgee',
    repo: 'mockgee-docs',
    branch: 'main',
    releases: false
  },
  theme: {},
  modules: ['@nuxthq/admin', '@docus/github', 'vue-plausible'],
  plausible: {
    domain: 'mockgee.com'
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: colors.sky
          }
        }
      }
    }
  }
})
