<template>
	     
		<div >
			<app-product v-for="product in products" :product="product">	
			</app-product>
		</div>
	
</template>



<script>
	import Product from './Product.vue';
	export default {
          
          components: {
          	appProduct: Product
          },

          computed: {
             products() {
               return this.$store.getters.products;
             }
          }

	}

</script>