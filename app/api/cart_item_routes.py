from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import CartItem, db, Product
from app.forms import CartItemForm, ProductForm, CartItemCheckoutForm
from app.api.auth_routes import validation_errors_to_error_messages

cart_item_routes = Blueprint('cart_items', __name__)


#line 10
@cart_item_routes.route("/current")
@login_required
def get_my_cart_items():
  """
  logged in user can view items in their cart (that has not been checked out before (aka current order_id == 0)
  """
  user_id = current_user.id
  cartItems = CartItem.query.filter(CartItem.user_id == user_id).filter(CartItem.order_id == 0).all()
  return {
      "CartItems":[
        cartItem.to_dict_current() for cartItem in cartItems
      ]
    }, 200






#line 30
@cart_item_routes.route("/checkout", methods=["DELETE"])
@login_required
def checkout_cart_items():
    """
    logged in user can checkout items in their cart (that has not been checked out before (aka current order_id == 0); checking out a cart item will update the product's stock, and change the cart item's order_id to 1, indicating that is has been checked out.
    """

    cart_items = CartItem.query.filter(CartItem.user_id == current_user.id).filter(CartItem.order_id == 0).join(Product).all() #<<<<<<<<

    out_of_stock_message = []
    for cart_item in cart_items:
      if cart_item.product.stock < cart_item.quantity:
        out_of_stock_message.append(f"not enough stock for product: {cart_item.product.name}")
    if len(out_of_stock_message):
      return {"errors": out_of_stock_message}, 400

    purchased = []
    for cart_item in cart_items:
      purchased.append({
        "product_id": cart_item.product.id,
        "quantity": cart_item.quantity,
        "name": cart_item.product.name,
      })
      cart_item.order_id = 1
      cart_item.product.stock -= cart_item.quantity
      # db.session.add(cart_item.product)
      db.session.commit()
    return {"message": f"these items have been purchased: {purchased}",}, 200

# fetch("http://localhost:3000/api/cart_items/checkout", {
#    method: 'DELETE',
#    headers: {
#     'Content-type': 'application/json'
#   }
#  })
#  .then(res => res.json())
#  .then(console.log)






#line 80
@cart_item_routes.route("/<int:cart_item_id>", methods=["PUT"])
@login_required
def edit_cart_item(cart_item_id):
  item = CartItem.query.get(cart_item_id)
  form = CartItemForm()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if item is None:
    return {"errors" : "Cart item couldn't be found"}, 404

  if form.validate_on_submit():


    item.quantity = form.data["quantity"]
    item.order_id = 0


    db.session.commit()
    return item.to_dict(), 200
  else:
      return {"errors" : validation_errors_to_error_messages(form.errors)}, 400



#  fetch("http://localhost:3000/api/cart_items/1", {
#    method: 'PUT',
#    body: JSON.stringify({
#     "quantity": 6
#   }),
#    headers: {
#     'Content-type': 'application/json'
#   }
#  })
#  .then(res => res.json())
#  .then(console.log)





#line 120
@cart_item_routes.route("/<int:cart_item_id>", methods=["DELETE"])
@login_required
def delete_cart_item(cart_item_id):
  item = CartItem.query.get(cart_item_id)
  if not item:
    return {"errors": "Cart Item couldn't be found"}, 404
  if item.user_id == current_user.id:
    db.session.delete(item)
    db.session.commit()
    return {"message" : "Item in cart successfully deleted!"}, 200
  else:
    return {"errors" : " You are not the owner of this cart-item"}, 400

#  fetch("http://localhost:3000/api/cart_items/1", {
#    method: 'DELETE',
#    headers: {
#     'Content-type': 'application/json'
#   }
#  })
#  .then(res => res.json())
#  .then(console.log)
