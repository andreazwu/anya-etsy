from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash



class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    price = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    seller_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

# relationship attributes
    user = db.relationship("User", back_populates="products")
    favorites = db.relationship("Favorite", back_populates="product", cascade="all, delete")
    reviews = db.relationship("Review", back_populates='product', cascade="all, delete")
    cartItems = db.relationship("CartItem", back_populates='product', cascade="all, delete")
    images = db.relationship("Image", back_populates="product", cascade="all, delete")
    storeItems = db.relationship("StoreItem", back_populates="product", cascade="all, delete")

#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'stock': self.stock,
            'sellerId': self.seller_id
        }
