import { createRouter, createWebHistory } from 'vue-router';
import AuthLayout from '../layouts/AuthLayout.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/auth/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import BookView from '../views/BookView.vue';
import ChapterView from '../views/ChapterView.vue';


const routes = [
    {
        path:'/',
        component: DefaultLayout,
        children:[
            {
                path: '',
                name: 'Home',
                component: HomeView,
                meta: { title: 'Home', requiresAuth: false }
            },
            {
                path:'serie/:title',
                name:'Serie',
                component:BookView,
            },
            {
                path:'serie/:title/chapter/:chapterId',
                name:'Chapter',
                component:ChapterView,
            }
        ]
    },
    {
        path:'/auth',
        component:AuthLayout,
        children:[
            {
                path:'login',
                name:'Login',
                component:LoginView,
                meta:{title:'Login',requiresAuth:false}
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component:NotFoundView,
        meta: { title: '404' }
    },
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

router.beforeEach((to, from, next) => {
    // Logic to update the document title based on meta
    document.title = to.meta.title || 'Project Reader';

    if (to.meta.requiresAuth && !localStorage.getItem('user_token')) {
        // Redirect to Login if a protected route is accessed
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;