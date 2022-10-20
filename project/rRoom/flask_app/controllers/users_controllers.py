from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user_model import User
from flask_app.models.review_model import Review
from flask_app.models.restroom_model import Restroom
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# rendering the home page, which is the login and register part
@app.route('/')
def landing():
    return render_template('index.html')

# once you are logged, this will show you the content on dashboard
@app.route('/dashboard')
def dash():
    if not "user_id" in session:
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    all_reviews = Review.get_all()
    all_restrooms = Restroom.get_all()
    return render_template("dashboard.html", logged_user = logged_user, all_reviews=all_reviews, all_restrooms=all_restrooms)

# form to register a new user, hhas bcypt to be able to secure password in DB,
# in data it will show all from request form and our bcrypt has for password
@app.route('/users/register', methods=["POST"])
def reg_user():
    if not User.validator(request.form):
        return redirect('/')
    hash_browns = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        'password' : hash_browns
    }
    new_id = User.create(data)
    session['user_id'] = new_id
    return redirect('/dashboard')

# login part to be able to login to dashboard,
# will display flash message if there is an issue with logging in
@app.route('/users/login', methods=['POST'])
def log_user():
    data = {
        'email' : request.form['email']
    }
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("Invalid password or email.... you tell me", "log")
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid password or email.... you tell me", "log")
        return redirect('/')
    session['user_id'] = user_in_db.id
    return redirect('/dashboard')


# will logout and clear session so you cant go back to /dashboard
@app.route('/users/logout')
def log_out_user():
    del session['user_id']
    return redirect('/')