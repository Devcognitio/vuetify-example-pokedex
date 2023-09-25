// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchAnimeView from '../views/SearchPokemonView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/search-pokemon',
        name: 'search-pokemon',
        component: SearchAnimeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
