import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'

import PostPage from '@/views/PostPage.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Tests the PostPage.vue', () => {
  let store

  let state = {
    posts: [
      {
        title: 'First',
        id: 1
      },
      {
        title: 'Second',
        id: 2
      },
    ]
  }

  beforeEach(() => {
    store = new Vuex.Store({
      state
    })
  })

  it('Tests if the filter works', async () => {

    const wrapper = mount(PostPage, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      store,
      localVue
    })

    expect(wrapper.text()).toContain('Second')

    await wrapper.setData({ search: 'First' })

    expect(wrapper.text()).not.toContain('Second')
  })

  it('Tests if the posts render', () => {

    const wrapper = mount(PostPage, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      store,
      localVue
    })

    expect(wrapper.find('.link-wrapper').element).toBeTruthy()

    expect(wrapper.text()).toContain('First', 'Second')
  })
})
