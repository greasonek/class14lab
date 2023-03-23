/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
let cart = document.getElementById('tbody');
table.removeItem('tr');


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
let tbody = document.querySelector('#cart tbody');
for(let i = 0; i < cartItems.length; i ++) {
  let tr = document.createElement('td');
  td.textContent = state.cart[i];
  tr.appendChild(tbody); 

  var cell = row.insertcell(-1);
  cell.setAttribute(item);

}



 
// TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

// HOW TO TARGET INDEX FROM TABLE
// HOW ASSIGN CLASS TO USE OR PARENT NODE? TAKE DATA FROM TABLE AND UTILIZE
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
