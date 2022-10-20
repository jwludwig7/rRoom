from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.review_model import Review
from flask_app.models.restroom_model import Restroom
from flask_app.models.user_model import User

@app.route('/restrooms/new')
def new_restroom_form():
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    return render_template("restroom_new.html", logged_user=logged_user)

@app.route('/restrooms/create', methods=['POST'])
def create_restroom():
    if 'user_id' not in session:
        return redirect('/')
    if not Restroom.validator(request.form):
        return redirect('/restrooms/new')
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    Restroom.create(data)
    return redirect('/restrooms/submission')

@app.route('/restrooms/submission')
def thank_you():
    if not "user_id" in session:
        return redirect('/')
    return render_template('restroom_submit_info.html')


@app.route('/restrooms/<int:id>/edit')
def edit_restrooms(id):
    if 'user_id' not in session:
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)    
    this_restroom = Restroom.get_by_id({'id':id})
    return render_template('restroom_edit.html', this_restroom = this_restroom, logged_user=logged_user)

@app.route('/restrooms/<int:id>/update', methods=['POST'])
def update_restroom(id):
    if not Restroom.validator(request.form):
        return redirect(f"/restrooms/{id}/edit")
    restroom_data = {
        **request.form,
        'id': id,
    }
    Restroom.update(restroom_data)
    return redirect('/dashboard')

@app.route('/restrooms/<int:id>/delete')
def delete_restroom(id):
    this_restroom = Restroom.get_by_id({'id':id})
    if not this_restroom.user_id == session['user_id']:
        flash("NAUGHTY NAUGHTY NAUGHTY!!!!!")
        return redirect('/dashboard')
    Restroom.delete({'id':id})
    return redirect('/dashboard')


