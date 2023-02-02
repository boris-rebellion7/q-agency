import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'

import PageHeader from '@/components/header/PageHeader.vue'
import SmallLink from '@/components/posts/SmallLink.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Tests the PageHeader.vue', () => {
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
      {
        title: 'Third',
        id: 3
      },
      {
        title: 'Fourth',
        id: 4
      },
      {
        title: 'Fifth',
        id: 5
      },
      {
        title: 'Sixth',
        id: 6
      },
    ]
  }

  beforeEach(() => {
    store = new Vuex.Store({
      state
    })
  })

  it('Tests if the posts render', () => {

    const wrapper = mount(PageHeader, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      store,
      localVue
    })

    const smallLinks = wrapper.findAllComponents(SmallLink)

    expect(smallLinks).toHaveLength(4)

  })
})
