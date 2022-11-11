from .db import db

class CartItem(db.Model):
    __tablename__ = "cart_items"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
#relationship
    order = db.relationship("Order", back_populates="cartItems")
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
