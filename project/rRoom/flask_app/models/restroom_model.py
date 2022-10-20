from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE
from flask_app.models import user_model

class Restroom:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.type = data['type']
        self.size = data['size']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO restrooms (name, location, type, size, comment, user_id) VALUES (%(name)s, %(location)s, %(type)s, %(size)s, %(comment)s, %(user_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM restrooms JOIN users on restrooms.user_id = users.id;"
        results = connectToMySQL(DATABASE).query_db(query)
        if len(results) > 0:
            all_restrooms = []
            for row_in_db in results:
                this_restroom = cls(row_in_db)
                user_data = {
                    **row_in_db,
                    'id': row_in_db['user_id'],
                    'created_at': row_in_db['users.created_at'],
                    'updated_at': row_in_db['users.updated_at']                    
                }
                this_user = user_model.User(user_data)
                this_restroom.planner = this_user
                all_restrooms.append(this_restroom)
            return all_restrooms
        return []


    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM restrooms JOIN users ON restrooms.user_id = users.id WHERE restrooms.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 1:
            return False
        row_in_db = results[0]
        for row_in_db in results:
            this_restroom = cls(row_in_db)
            user_data = {
                ** row_in_db,
                'id': row_in_db['users.id'],
                'created_at': row_in_db['users.created_at'],
                'updated_at': row_in_db['users.updated_at'],
            }
            this_user = user_model.User(user_data)
            this_restroom.planner = this_user
            return this_restroom


    @classmethod
    def update(cls,data):
        query = "UPDATE restrooms SET name = %(name)s, location = %(location)s, type = %(type)s, size = %(size)s, comment = %(comment)s WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM restrooms WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validator(form_data):
        is_valid = True
        if len(form_data['name']) < 1:
            flash("Name is required")
            is_valid = False
        if len(form_data['location']) < 10:
            flash("Location is required (Longitude and Latitude)")
            is_valid = False
        if len(form_data['type']) < 1:
            flash("Type is required")
            is_valid = False
        if len(form_data['size']) < 1:
            flash("Size is required")
            is_valid = False
        if len(form_data['comment']) > 10:
            flash("Comment To long")
            is_valid = False
        return is_valid
    
