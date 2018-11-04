import Home from './components/Home.vue';
import Products from './components/products/Products.vue';
import Cart from './components/cart/Cart.vue';

export const routes = [

      { path: '/', component: Home },
      { path: '/Products', component: Products },
      { path: '/Cart', component: Cart }

]