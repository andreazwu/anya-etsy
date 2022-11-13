from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange


class ReviewForm(FlaskForm):
    stars = IntegerField('stars', validators=[DataRequired(), NumberRange(min=1, max=5, message="Stars must be between 1 and 5")])
    review = TextAreaField('review', validators=[Length(max=2000, message="Review must shorter than 2000 characters")])
