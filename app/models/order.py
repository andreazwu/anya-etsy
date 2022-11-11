from .db import db

class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    order_number = db.Column(db.String(10), nullable=False, unique=True)
    is_delivered = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
#relationship
    cartItems = db.relationship("CartItem", back_populates="order", cascade="all, delete")

#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'orderNumber': self.order_number,
            'isDelivered': self.is_delivered,
            'createdAt': self.created_at
        }
