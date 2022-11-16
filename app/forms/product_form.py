from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, IntegerField, SubmitField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, Length, NumberRange, InputRequired


HOLIDAYS = ["Halloween", "Valentine", "Thanksgiving", "Christmas", "Easter", "Spring Festival"]


class ProductForm(FlaskForm):
    category = SelectField('category', choices=HOLIDAYS, validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired(), Length(min=10, max=255, message="Name must be between 10 and 255 characters long")])
    description = TextAreaField('description', validators=[DataRequired(), Length(min=10, max=2000, message="Description must be between 10 and 2000 characters long")])
    price = DecimalField('price', places=2, validators=[InputRequired(), NumberRange(min=0.10, max=1000000, message="Price must be between $0.10 and $1,000,000")])
    stock = IntegerField('stock', validators=[InputRequired(), NumberRange(min=1, max=10000, message="Stock must be between 1 and 10000")])
