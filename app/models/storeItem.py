from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash

class StoreItem(db.Model):
    __tablename__ = "store_items"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    store_name = db.Column(db.String(255), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    store_location = db.Column(db.String(255), nullable=False)
#relationship
    user = db.relationship("User", back_populates="storeItems")
    product = db.relationship("Product", back_populates="storeItems")

#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'sellerId': self.seller_id,
            'storeName': self.store_name,
            'productId': self.product_id,
            'storeLocation': self.store_location
        }
