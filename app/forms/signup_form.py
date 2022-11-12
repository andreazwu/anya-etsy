from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists, Length(max=255, message="Username must be fewer than 255 characters")])
    email = StringField('email', validators=[DataRequired(), user_exists, Length(max=255, message="Email must be fewer than 255 characters"), Email()])
    firstName = StringField('first_name', validators=[DataRequired(), Length(max=50, message="First Name must be fewer than 50 characters")])
    lastName = StringField('last_name', validators=[DataRequired(), Length(max=50, message="Last Name must be fewer than 50 characters")])
    password = StringField('password', validators=[DataRequired(), Length(min=6, max=255, message="Password must be between 6 and 255 characters long")])
    # confirm_password = StringField('password', validators=[DataRequired(), Length(min=6, max=255, message="Password must be between 6 and 255 characters long")])
