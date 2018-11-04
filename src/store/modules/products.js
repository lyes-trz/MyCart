import products from '../../data/products';


const state = {
    products: []
};

const mutations = {
	'SET_PRODUCTS' (state, products) {
         state.products = products;
	},

	'RND_PRODUCTS' (state) {

	}
};



const actions = {
    buyProduct: ({commit}, order) => {
    	commit('BUY_PRODUCT', order);
    },
    initProducts: ({commit}) => {
    	commit('SET_PRODUCTS', products);
    },
    randomizeProducts: ({commit}) => {
    	commit('RND_PRODUCTS');
    }
};

const getters = {
	products: state => {
		return state.products;
	}
};



export default  {
     state,
     mutations,
     actions,
     getters
};






























