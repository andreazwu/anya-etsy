from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Image
from app.forms import ImageForm


image_routes = Blueprint('images', __name__)


#line 10
@image_routes.route("/<int:image_id>", methods=["DELETE"])
def delete_product_image():
  pass
