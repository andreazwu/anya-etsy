from flask import Blueprint, jsonify, json
from flask_login import login_required
from app.models import db, Product, Image
from app.forms import ProductForm


product_routes = Blueprint('products', __name__)


#line 10
@product_routes.route("")
def get_all_products():
  products = Product.query.all()

  product_flatted = []

  if products is not None:
    for product in products:
      product = product.to_dict()

      product_id = product["id"]
      preview_img = db.session.query(Image).filter(Image.product_id == product_id).first()
      if preview_img is not None:
        product["previewImage"] = preview_img.url

      product['price'] = str(product['price'])
      
      product_flatted.append(product)

    return jsonify({"Products": product_flatted}), 200


#line 40: query filter







































# line 80
@product_routes.route("/current")
def get_my_products():
  pass














































#line 130
@product_routes.route("/<int:product_id>")
def get_one_product():
  pass
























































#line 190
@product_routes.route("", methods=["POST"])
def create_product():
  pass














































#line 240
@product_routes.route("/<int:product_id>/images", methods=["POST"])
def add_product_image():
  pass




































#line 280
@product_routes.route("/<int:product_id>", methods=["PUT"])
def edit_product():
  pass














































#line 330
@product_routes.route("/<int:product_id>", methods=["DELETE"])
def delete_product():
  pass
















#line 350
@product_routes.route("/<int:product_id>/reviews")
def get_product_reviews():
  pass


























#line 380
@product_routes.route("/<int:product_id>/reviews", methods=["POST"])
def create_review():
  pass


























#line 410 (add product<id> to cart)
@product_routes.route("/<int:product_id>/cart_items", methods=["POST"])
def create_cart_item():
  pass
