<template>
	
  <nav>
   
    <router-link to="/" class="logo">MyCart</router-link>
    <router-link to="/Cart" class="products"><span class="glyphicon glyphicon-shopping-cart"></span></router-link>
    <router-link to="/Products" class="products" id="all">ALL Products</router-link>
    
  </nav>

</template>


<style>

    
     .logo {
      margin-left: 1.2em;
      margin-top: 0.3em;
      float: left;
      font-size: 40px;
     font-family: Confetti Stream;
     font-style: bolder;
      outline: none;
      color: black;
      text-decoration: none;
      margin-bottom: 0px;
     }

     .logo:hover {
      
      outline: none;
      color: #DB0960;
      text-decoration: none;
     }
     .logo:focus {
      
      outline: none;
      color: #DB0960;
      text-decoration: none;
     }

     .products{
      margin-top: 1.3em;
       float: right;
       margin-left: 20px;
       outline: none;
       font-size: 18px;
      color: black; #DB0960
      font-family: comfortaa;
      text-decoration: none;



      
     }


     .products:hover {
      
      outline: none;
      color: #DB0960;
      text-decoration: none;
     }

     .products:focus {
      
      outline: none;
      color: #DB0960;
      text-decoration: none;
     }
     .products:actived {
      
      outline: none;
      color: #DB0960;
      text-decoration: none;
     }



     #all {
      border:1px solid ;
      border-color: black;
      border-radius: 5px;
      padding: 5px;
      font-size: 14px;
     }
     #all:hover {
      background-color: #DB0960;
      border-color: #DB0960;
       outline: none;
      color:white;
      text-decoration: none;
     }
     #all:focus {
      background-color: #DB0960;
      border-color: #DB0960;
       outline: none;
      color:white;
      text-decoration: none;
     }






</style>