from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.restroom_model import Restroom
from flask_app.models.user_model import User
from flask_app.models.review_model import Review


@app.route('/reviews/new')
def new_reviews_form():
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    all_restrooms = Restroom.get_all()
    return render_template("review_new.html", logged_user=logged_user, all_restrooms=all_restrooms)

@app.route('/reviews/create', methods=['POST'])
def create_review():
    if 'user_id' not in session:
        return redirect('/')
    if not Review.validator(request.form):
        return redirect('/reviews/new')
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    Review.create(data)
    return redirect('/dashboard')

@app.route('/reviews/<int:id>')
def one_review(id):
    if 'user_id' not in session:
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    this_review = Review.get_by_id({'id':id})
    logged_user = User.get_by_id(user_data)
    return render_template('review_one.html', this_review = this_review, logged_user=logged_user )

@app.route('/reviews/<int:id>/edit')
def edit_review(id):
    if 'user_id' not in session:
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)    
    this_review = Review.get_by_id({'id':id})
    all_restrooms = Restroom.get_all()
    return render_template('review_edit.html', this_review = this_review, logged_user=logged_user, all_restrooms=all_restrooms)
@app.route('/reviews/<int:id>/update', methods=['POST'])
def update_review(id):
    if not Review.validator(request.form):
        return redirect(f"/reviews/{id}/edit")
    review_data = {
        **request.form,
        'id': id,
    }
    Review.update(review_data)
    return redirect('/dashboard')

@app.route('/reviews/<int:id>/delete')
def delete_review(id):
    this_review = Review.get_by_id({'id':id})
    if not this_review.user_id == session['user_id']:
        flash("NAUGHTY NAUGHTY NAUGHTY!!!!!")
        return redirect('/dashboard')
    Review.delete({'id':id})
    return redirect('/dashboard')
