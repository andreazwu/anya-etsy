from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import CartItem, db, Product
from app.forms import CartItemForm
from app.api.auth_routes import validation_errors_to_error_messages

cart_item_routes = Blueprint('cart_items', __name__)


#line 10
@cart_item_routes.route("/current")
@login_required
def get_my_cart_items():
  user_id = current_user.id
  cartItems = CartItem.query.filter(CartItem.user_id == user_id).all()
  return {
      "CartItems":[
        cartItem.to_dict_current() for cartItem in cartItems
      ]
    }, 200
















































#line 60
@cart_item_routes.route("/<int:cart_item_id>", methods=["PUT"])
@login_required
def edit_cart_item(cart_item_id):
  item = CartItem.query.get(cart_item_id)
  form = CartItemForm()
  form["csrf_token"].data = request.cookies["csrf_token"]
  if item is None:
    return {"errors" : "Cart item couldn't be found"}, 404
  if form.validate_on_submit():
    data = CartItem(
      id = item.id,
      user_id = current_user.id,
      product_id = item.product_id,
      quantity = form.data["quantity"],
      order_id = 0
    )

    db.session.commit()
    return data.to_dict(), 200
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





#line 110
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
