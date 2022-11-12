from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, IntegerField, SubmitField, TextAreaField, SelectField, URLField
from wtforms.validators import DataRequired, Email, ValidationError, Length, NumberRange


class ImageForm(FlaskForm):
  # product_id = IntegerField('product_id', validators=[DataRequired()])
  # review_id = IntegerField('review_id', validators=[DataRequired()])
  url = URLField('url', validators=[DataRequired()])
