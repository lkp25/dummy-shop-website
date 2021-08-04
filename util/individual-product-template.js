const fs = require('fs')
// const path = require('path');
// const rootDir = require('../util/path')
const allProducts = require('../public/products-json/products.json')


// const a = fs.readFileSync((path.join(rootDir, 'public/products-json', 'products.json')), 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
    
//   });
//   console.log(typeof a);

class Template  {
    constructor(id){
      //substring because it begins with colon ':2343432423432'
        this.id = id.substring(1, id.length)
        this.productData = this.getIndividualProductData()
    }
    getIndividualProductData(){
        return [...allProducts].find(item => item.id === this.id)
    }
    render(){
        return `
        
        
        
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact</title>
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/css/cart.css">
  <link rel="stylesheet" href="/css/order-modal.css">
  
  <link rel="stylesheet" href="/css/individual-product-page.css">

  <script src="../js/sanitize-user-input.js" defer></script>
  <script src="../js/main.js" defer></script>
  <script src="../js/cart.js" defer></script>
  <script src="../js/individual-product-page.js" defer></script>
  


</head>
<body>

  <div class="order-modal">
    <div class="order-modal-main-section">
      <h1>You are about to order:</h1>
      <div id="order-table">     
        <div id="order-table-header" class="order-table-single-item">
          <div>Item</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
        <template id="order-table-single-item-template">
          <div class="order-table-single-item">
            <div >Item</div>
            <div>3333</div>
            <div>42</div>
          </div>
        </template>
             
      </div>
  
      <div class="order-modal-total">Total: <span id='grand-total'>453453</span></div>
      <button class=" order-modal-resign-btn">I'm not ready yet</button>
  
      <form class="order-form" action="">
        <p>If order is correct, please fill out the form:</p>
        <div>
            <label>Name</label><br>
            <input type="text" class="order-form-name" required placeholder="">
        </div>
        <div>
            <label>Surname</label><br>
            <input type="text" class="order-form-surname" required placeholder="">
        </div>
        <div>
            <label>E-mail</label><br>
            <input type="email" class="order-form-email" required placeholder="">
        </div>
        <div>
            <label>E-mail (confirm)</label><br>
            <input type="email" class="order-form-email-conf" required placeholder="">
        </div>
        <div>
            <label>City</label><br>
            <input type="text" class="order-form-city" required placeholder="">
        </div>
        <div>
            <label>Street</label><br>
            <input type="text" class="order-form-street" required placeholder="">
        </div>
        <div>
            <label>House number</label><br>
            <input type="number" class="order-form-house-number" required placeholder="">
        </div>
        <div>
            <label>Postal code</label><br>
            <input type="number" class="order-form-postal-code" required placeholder="">
        </div>
        
        <input type="submit" class="order-now-btn" value="ORDER NOW">
      </form>
  
    </div>
  </div>

<header>
  <nav class="hide-links">
    <div class="logo">LOGO</div>
    <ul class="nav-links">
      <a href="/index"><li class="nav-link">Home</li></a>
      <a href="/shop"><li class="nav-link">Shop</li></a>
      <a href="/contact"><li class="nav-link">Contact</li></a>      
    </ul>
    <div class="menu-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"/></svg>
    </div>
    <div class="cart-icon">
      <svg class="cart-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/></svg>
      <div class="cart-counter">45</div>
    </div>
  </nav>
</header>

<!-- CART CONTENT -->
<div class="cart-content">
  <div class="sum">Total:  <span class="cart-total">543</span></div>
  <button class="place-order-btn">PLACE ORDER</button>
  <button class="clear-cart-btn">CLEAR CART</button>
  <!-- templ -->
  <template id="item-in-cart-template">
    <div class="product-in-cart">
      <div class="product-in-cart-mini-img">
        <img src="./img/img-large/orange.png" alt="">
      </div>
      <div class="product-in-cart-name">ORANGE</div>
      <div class="product-in-cart-quantity">
        <p>quantity:</p>
        <div class="quantity-modifier">
          <button class="sub-one-btn">-</button>
          <span class="quantity">
            5
          </span>
          <button class="add-one-btn">+</button>

        </div>
      </div>
      <div class="product-in-cart-price">120.00</div>
      <button class="remove-from-cart">Remove product</button>
  
    </div>
  </template>  
  <!-- templ END -->
  

  </div>
  
  <main>
  
  <div class="indprod-container">
    <h1 class="indprod-name">PRODUCT NAME</h1>
    <p class="indprod-category">category</p>
    <div class="indprod-desc-card">
      <div class="indprod-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas libero natus repellendus esse. Non, odit. Enim recusandae minima nobis sapiente, excepturi fugit officia quos voluptates dolores numquam voluptatibus perferendis iste repudiandae in veniam facere asperiores dolore, velit neque, cumque nostrum quibusdam. Dolorem, vero recusandae fugit quas perspiciatis repudiandae et? Provident tempore incidunt illo autem vel dolores voluptatem dicta nesciunt quisquam!</div>
      <div class="indprod-image-preview">
        <img src="../img/img-large/black.png" alt="">
      </div>
    </div>
    <div class="indprod-footer">
    <button class="indprod-buynow-btn">BUY NOW</button>
      <span class="indprod-price">$ 2444</span>
    </div>
  </div>
</main>

<footer>
  <ul class="nav-links footer-links">
    <a href="/index"><li class="nav-link">Home</li></a>
    <a href="/shop"><li class="nav-link">Shop</li></a>
    <a href="/contact"><li class="nav-link">Contact</li></a>     
  </ul>
  <p class="copyright">@copyright lkp25 <span class="date"></span></p>
</footer>

</body>

</html>
        `
    }
    
}

module.exports = Template