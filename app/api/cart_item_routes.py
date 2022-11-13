from flask import Blueprint, jsonify
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
def edit_cart_item():
  














































#line 110
@cart_item_routes.route("/<int:cart_item_id>", methods=["DELETE"])
def delete_cart_item():
  pass
