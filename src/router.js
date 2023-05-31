import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter ({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome,
        },

        {
            path: '/about-us',
            name: 'about',
            component: AppAbout,

        },

        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
        },

        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: SingleProject,
        }
    ],

});

export { router};