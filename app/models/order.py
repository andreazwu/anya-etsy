from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash

class Order(db.Model):
    __tablename__ = "orders"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    order_number = db.Column(db.String(10), nullable=False, unique=True)
    is_delivered = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=db.func.now())
#relationship
    # cartItems = db.relationship("CartItem", back_populates="order", cascade="all, delete")

#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'orderNumber': self.order_number,
            'isDelivered': self.is_delivered,
            'createdAt': self.created_at
        }
