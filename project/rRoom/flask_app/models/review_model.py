from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE
from flask_app.models import user_model
from flask_app.models import restroom_model

class Review:
    def __init__(self, data):
        self.id = data['id']
        self.date = data['date']
        self.cleanliness = data['cleanliness']
        self.privacy = data['privacy']
        self.rating = data['rating']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.restroom_id = data['restroom_id']
        self.user_id = data['user_id']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO reviews (date, cleanliness, privacy, rating, comment, restroom_id, user_id) VALUES (%(date)s, %(cleanliness)s, %(privacy)s, %(rating)s, %(comment)s, %(restroom_id)s, %(user_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM reviews JOIN users on reviews.user_id = users.id JOIN restrooms on reviews.restroom_id = restrooms.id;"
        results = connectToMySQL(DATABASE).query_db(query)
        if len(results) >  0:
            all_reviews = []
            for row_in_db in results:
                this_review = cls(row_in_db)
                user_data = {
                    **row_in_db,
                    'id': row_in_db['users.id'],
                    'restroom_id': row_in_db['restrooms.id'],
                    'created_at': row_in_db['users.created_at'],
                    'updated_at': row_in_db['users.updated_at']                    
                }
                this_user = user_model.User(user_data)
                this_restroom = restroom_model.Restroom(user_data)
                this_review.planner = this_user
                this_review.restroom = this_restroom
                all_reviews.append(this_review)
                # all_reviews.append(this_restroom)
            return all_reviews
        return []

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM reviews JOIN users ON reviews.user_id = users.id JOIN restrooms ON reviews.restroom_id = restrooms.id WHERE reviews.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 1:
            return False
        row_in_db = results[0]
        for row_in_db in results:
            this_review = cls(row_in_db)
            user_data = {
                ** row_in_db,
                'id': row_in_db['users.id'],
                'created_at': row_in_db['users.created_at'],
                'updated_at': row_in_db['users.updated_at'],
            }
            this_user = user_model.User(user_data)
            this_restroom = restroom_model.Restroom(user_data)
            this_review.planner = this_user
            this_review.restroom = this_restroom
            return this_review

    @classmethod
    def update(cls, data):
        query = "UPDATE reviews SET date = %(date)s, cleanliness =%(cleanliness)s, privacy = %(privacy)s, rating = %(rating)s, comment = %(comment)s WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM reviews WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validator(form_data):
        is_valid = True
        if len(form_data['restroom_id']) < 1:
            flash("where is required")
            is_valid = False
        if len(form_data['date']) < 1:
            flash("date is required")
            is_valid = False
        if len(form_data['cleanliness']) < 1:
            flash("Cleanliness is required")
            is_valid = False
        if len(form_data['privacy']) < 1:
            flash("privacy is required")
            is_valid = False
        if len(form_data['comment']) < 1:
            flash("Comment is required")
            is_valid = False
        return is_valid