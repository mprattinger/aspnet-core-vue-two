import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        // MenuComponent: require('../navmenu/navmenu.vue.html')
        CounterComponent: require("../counter/counter.vue.html")
    }
})
export default class AppComponent extends Vue {
}
