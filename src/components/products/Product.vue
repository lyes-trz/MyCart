<template>
	<dir class="col-sm-6 col-md-3">
		<dir  style="text-align: center; margin-bottom: -30px;">
			
			<div class="panel-body">
				<img v-bind:src="product.pic" style="height: 150px;
		width: auto; text-align:center;">
         <p style=" font-family: Comfortaa; font-size: 14px; margin-top: -20px ">{{ product.name }}</p>
				<p style="color: #DB0960; font-size: 15px;margin-top: -10px">{{ product.price }} $</p>
        
			</div>

			<div style="margin-top: -5px;">
				    <input 
             style="width: 40px; height: 18px ;text-align: center;" 
				     type="number" 
				     
				     placeholder="	Quantity"
				     v-model="quantity">
			
            	<button 
            	class="buy"
            	@click="buyProduct"
            	:disabled="quantity <= 0"
            	>Add To Cart</button>
          </div>

		</dir>
	</dir>
</template>


<script>
	
   export default {
   	props: ['product'],
   	data() {
   		return {
   			quantity: 0
   		}
   	},

     

     

   	methods: {
   		buyProduct() {
   			const order = {
                productId: this.product.id,
                productPrice: this.product.price,
                quantity: this.quantity


   			};
   			
   			this.$store.dispatch('buyProduct', order);
   			this.quantity = 0;
   		}
   	}
   }



</script>




<style>
	.img {
		height: 100px;
		width: auto;
	}

  .buy {
    color: #575757;
    background-color: transparent;
    border:1px solid #575757;
    font-size: 11.5px;
    border-radius: 4px;
    margin-top: -20px;
  }
  .buy:hover {
    color: white;
    background-color: #DB0960;
    border-color: #DB0960;
    
  }


</style>