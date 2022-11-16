from flask_wtf import FlaskForm
from wtforms.fields.html5 import URLField
from wtforms.validators import DataRequired, Email, ValidationError, Length, NumberRange, InputRequired


class ImageForm(FlaskForm):
  # product_id = IntegerField('product_id', validators=[DataRequired()])
  # review_id = IntegerField('review_id', validators=[DataRequired()])
  url = URLField('url', validators=[InputRequired()])
