from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    review = db.Column(db.String(2000))
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=db.func.now())

#relationship
    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="reviews")
    images = db.relationship("Image", back_populates="review", cascade="all, delete")

#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'review': self.review,
            'stars': self.stars,
            'createdAt': self.created_at,
            'User': { #<<<<<<<<<<<<< new
                "id": self.user.id,
                "first_name": self.user.first_name,
                "last_name": self.user.last_name
            }
        }

    def to_dict_my_reviews(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'review': self.review,
            'stars': self.stars,
            'createdAt': self.created_at,
            'User': {
                "id": self.user.id,
                "first_name": self.user.first_name,
                "last_name": self.user.last_name
            },
            'Product': {
                "id": self.product.id,
                "seller_id": self.product.seller_id,
                "category": self.product.category,
                "name": self.product.name,
                "description": self.product.description,
                "price": self.product.price,
                "stock": self.product.stock,
                "previewImage": self.product.images[0].url
            }
    }
