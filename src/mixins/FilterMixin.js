// import _get from 'lodash/get'
import _filter from 'lodash/filter'

export default {
    methods: {
        filteredPosts(collection, field) {
            return _filter(collection, post => {
                return post[field].match(this.search)
            })
        }
    }
}
