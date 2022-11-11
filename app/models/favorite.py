from .db import db

class Favorite(db.Model):
    __tablename__ = "favorites"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    is_favorite = db.Column(db.Boolean, nullable=False)
#relationship
    user = db.relationship("User", back_populates="favorites")
    product = db.relationship("Product", back_populates="favorites")

#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'isFavorite': self.is_favorite
        }
