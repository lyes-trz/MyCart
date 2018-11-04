<template>
	
	<div >
		<dir class="box-start">
		<p style="font-size: 22px;font-family: Comfortaa;">Your Total to Pay : {{ total }} $</p>
	   </dir>
		<app-product 
		style=" margin-top: 120px;"
		v-for="product in products"
		:product="product"></app-product>
	</div>
</template>


<script>
	import {mapGetters} from 'vuex';
	import Product from './Product.vue';

	export default {
         computed: {
         	 ...mapGetters({
         	 	products: 'productCart'
         	 }),

         	 total() {
				return this.$store.getters.total;
			}
         },
         components: {
            appProduct: Product
         }
	}
</script>


<style >
	.box-start {

   position: absolute;
  margin-top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
   margin-bottom: 80px;
}
</style>