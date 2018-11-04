const state = {
     total: 0,
     products: []
};



const mutations = {
   'BUY_PRODUCT' (state, {productId, quantity, productPrice}) {
   	   const record = state.products.find(element => element.id == productId);
       if (record) {
       	record.quantity += quantity;
       }
       else {
       	state.products.push({
               id: productId,
               quantity: quantity
       	  });
       }
       
   },



   'SELL_PRODUCT' (state, {productId, quantity, productPrice}) {
   	   const record = state.products.find(element => element.id == productId);
       if (record.quantity > quantity) {
       	record.quantity -= quantity;
       }
       else {
       	state.products.splice(state.products.indexOf(record), 1);
       }
       state.total += productPrice * quantity;
   }


};


const actions = {
	sellProduct ({commit}, order) {
		commit('SELL_PRODUCT', order);
	}
};


const getters = {
	productCart (state, getters) {

		return state.products.map(product => {
              const record = getters.products.find(element => element.id == product.id);
              return {
              	id: product.id,
              	quantity: product.quantity,
              	name: record.name,
                pic: record.pic,
              	price: record.price
              }
		});
	},

	total (state) {
		return state.total;
	}
};


export default {
	state,
	mutations,
	actions,
	getters

}