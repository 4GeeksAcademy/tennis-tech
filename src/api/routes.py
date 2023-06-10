"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile, Instructor, Field, Reservation_Class, Reservation_Field
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def register():
    body = request.json

    if "username" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'username' en el body"}), 400
    if "email" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'email' en el body"}), 400
    if "password" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'password' en el body"}), 400
    
    try:
        nuevo_user = User(body['username'], body['email'], body['password'])
        db.session.add(nuevo_user)
        db.session.commit()
        return jsonify(nuevo_user.serialize()), 200
    except Exception as err:
        return jsonify({"message": err}), 500
    

@api.route('/profile', methods=['POST']) # revisar este endpoint ya que no esta funcionando
def create_profile():
    body = request.json

    if "name" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'name' en el body"}), 400
    if "last_name" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'last_name' en el body"}), 400
    if "date_of_birth" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'date_of_birth' en el body"}), 400
    if "category" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'category' en el body"}), 400
    if "gender" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'gender' en el body"}), 400
    
    try:
        nuevo_profile = Profile(body['name'], body['last_name'], body['date_of_birth'], body['category'], body['gender'])
        db.session.add(nuevo_profile)
        db.session.commit()
        return jsonify(nuevo_profile.serialize()), 200
    except Exception as err:
        return jsonify({"message": err}), 500   
    

@api.route('/profiles', methods=['GET'])
def get_all_profiles():
    all_profiles = Profile.query.all()
    if all_profiles is not None:
        return jsonify([profile.serialize() for profile in all_profiles]), 200
    else:
        return jsonify({"message": "instructors not found"}), 404
    

@api.route('/instructor', methods=['POST'])
def create_instructor():
    body = request.json

    if "name" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'name' en el body"}), 400
    if "last_name" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'last_name' en el body"}), 400
    if "years_of_experience" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'years_of_experience' en el body"}), 400
    if "description" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'description' en el body"}), 400
    
    try:
        nuevo_instructor = Instructor(body['name'], body['last_name'], body['years_of_experience'], body['description'])
        db.session.add(nuevo_instructor)
        db.session.commit()
        return jsonify(nuevo_instructor.serialize()), 200
    except Exception as err:
        return jsonify({"message": err}), 500
    
@api.route('/instructors', methods=['GET'])
def get_all_instructors():
    all_instructors = Instructor.query.all()
    if all_instructors is not None:
        return jsonify([instructor.serialize() for instructor in all_instructors]), 200
    else:
        return jsonify({"message": "instructors not found"}), 404
    

@api.route('/field', methods=['POST'])
def create_field():
    body = request.json

    if "type" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'type' en el body"}), 400
    if "number_of_field" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'number_of_field' en el body"}), 400
    if "description" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'description' en el body"}), 400
    
    try:
        nuevo_field = Field(body['type'], body['number_of_field'], body['description'])
        db.session.add(nuevo_field)
        db.session.commit()
        return jsonify(nuevo_field.serialize()), 200
    except Exception as err:
        return jsonify({"message": err}), 500
    

@api.route('/fields', methods=['GET'])
def get_all_fields():
    all_reservation_class = Field.query.all()
    if all_reservation_class is not None:
        return jsonify([field.serialize() for field in all_reservation_class]), 200
    else:
        return jsonify({"message": "fields not found"}), 404
    

@api.route('/reservation-class', methods=['POST']) # revisar este endpoint ya que no esta funcionando
def create_reservation_class():
    body = request.json

    if "date" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'date' en el body"}), 400
    if "hour" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'hour' en el body"}), 400
    if "difficulty" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'difficulty' en el body"}), 400
    if "comments" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'comments' en el body"}), 400
    
    try:
        nuevo_reservation_class = Reservation_Class(body['date'], body['hour'], body['difficulty'], body['comments'])
        db.session.add(nuevo_reservation_class)
        db.session.commit()
        return jsonify(nuevo_reservation_class.serialize()), 200
    except Exception as err:
        return jsonify({"message": err}), 500  
    
@api.route('/reservation-classes', methods=['GET'])
def get_all_reservation_class():
    all_reservation_class = Reservation_Class.query.all()
    if all_reservation_class is not None:
        return jsonify([reservation_class.serialize() for reservation_class in all_reservation_class]), 200
    else:
        return jsonify({"message": "fields not found"}), 404
    
@api.route('/reservation-field', methods=['POST']) # revisar este endpoint ya que no esta funcionando
def create_reservation_field():
    body = request.json

    if "date" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'date' en el body"}), 400
    if "hour" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'hour' en el body"}), 400
    if "number_of_players" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'number_of_players' en el body"}), 400
    if "type" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'type' en el body"}), 400
    
    try:
        nuevo_reservation_field = Reservation_Field(body['date'], body['hour'], body['number_of_players'], body['type'])
        db.session.add(nuevo_reservation_field)
        db.session.commit()
        return jsonify(nuevo_reservation_field.serialize()), 200
    except Exception as err:
        return jsonify({"message": err}), 500  
    
@api.route('/reservation-fields', methods=['GET'])
def get_all_reservation_field():
    all_reservation_field = Reservation_Field.query.all()
    if all_reservation_field is not None:
        return jsonify([reservation_field.serialize() for reservation_field in all_reservation_field]), 200
    else:
        return jsonify({"message": "fields not found"}), 404
    

