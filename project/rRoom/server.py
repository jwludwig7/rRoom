from flask_app import app
from flask_app.controllers import users_controllers, reviews_controllers, restrooms_controllers




if __name__=='__main__':
    app.run(debug=True)