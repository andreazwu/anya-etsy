from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, IntegerField, SubmitField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, Length, NumberRange


class CartItemForm(FlaskForm):
  quantity = IntegerField('quantity', validators=[DataRequired(), NumberRange(min=1, max=100, message="Quantity must be between 1 and 100")])
