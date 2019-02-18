import { Router } from '@vaadin/router';
import "./views/Home"
import "./views/PageOne"
import "./views/PageTwo"

window.addEventListener('load', () => {
    const router = new Router(document.getElementById('main'));
    router.setRoutes([
        {
            path: '/',
            component: 'view-home'
        },
        {
            path: '/ViewOne',
            component: 'view-one'
        },
        {
            path: '/ViewTwo',
            component: 'view-two'
        }
    ])
})