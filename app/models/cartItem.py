from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash

class CartItem(db.Model):
    __tablename__ = "cart_items"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    order_id = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
#relationship
    user = db.relationship("User", back_populates="cartItems")
    product = db.relationship("Product", back_populates="cartItems")
#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'orderId': self.order_id,
            'quantity': self.quantity
        }

    def to_dict_current(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'orderId': self.order_id,
            'quantity': self.quantity,
            'message': "",
            'Product': {
                "id": self.product.id,
                'category': self.product.category,
                'name': self.product.name,
                'description': self.product.description,
                'price': self.product.price,
                'stock': self.product.stock,
                'sellerId': self.product.seller_id,
                'previewImage': self.product.images[0].url
            }
        }
