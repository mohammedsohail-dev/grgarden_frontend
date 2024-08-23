import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue';
import Photos from '../src/views/Photos.vue';
import Booking from '../src/views/Booking.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/photos',
        name: 'Photos',
        component: Photos
    },
    {
        path: '/booking',
        name: 'Booking',
        component: Booking
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;