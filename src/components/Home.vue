<template >
	<div class="box-start">
		<p class="t1">Welcome To MyCart</p>
		
		<p class="t2">Your Shopping Cart</p>

		<router-link to="/Products" class="btn-main"><span class="glyphicon glyphicon-tags" style="margin-right: 5px;"></span> Start Shopping</router-link>
	</div>
</template>
<script >
	export default {
		computed: {
			total() {
				return this.$store.getters.total;
			}
		}
	}
</script>



<style>
	.t1 {
	font-size: 40px;
	}
	.t2 {
		margin-top: -12px;
		margin-bottom: 16px;
	font-size: 20px;
	}

	.box-start {

   position: absolute;
  margin-top: 220px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

   .btn-main {
   	    background-color: transparent;
    border:1px solid ;
    border-color: black;
    font-size: 12px;
    color: black;
    text-decoration: none;
    padding: 10px;
   }
   .btn-main:hover {
   	    background-color: black;
    
    
    
    color: white;
    text-decoration: none;
}
    
</style>