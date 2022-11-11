from .db import db

class Image(db.Model):
    __tablename__ = "images"
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(2000), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    review_id = db.Column(db.Integer, db.ForeignKey('reviews.id'))
#relationship
    review = db.relationship("Review", back_populates="images")
    product = db.relationship("Product", back_populates="images")

#####################################
    def to_dict(self):
        return {
            'id': self.id,
            'url': self.url,
            'productId': self.product_id,
            'reviewId': self.review_id
        }
