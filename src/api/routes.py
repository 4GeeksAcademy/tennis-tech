"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import hashlib
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile, Instructor, Field, Reservation_Class, Reservation_Field
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username == None or password == None:
        return jsonify({"msg": "Bad username or password"}), 401

    search_user= User.query.filter_by(username=username).one_or_none()
    if search_user == None:
        return jsonify({ "message" : "user not found "}), 404
    if search_user.password == hashlib.md5(password.encode('utf-8') ).hexdigest():
        return jsonify({ "token": create_access_token(identity=search_user.username) }), 200
    return jsonify({ "message" : "password doesn't match! "}), 401


@api.route('/hello', methods=['GET'])
@jwt_required()
def handle_hello():

    response_body = {
        "message": "Hello"
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
        hashed_password = hashlib.md5( body['password'].encode('utf-8') ).hexdigest()
        nuevo_user = User(body['username'], body['email'], hashed_password)
        db.session.add(nuevo_user)
        db.session.commit()
        return jsonify(nuevo_user.serialize()), 200
    except Exception as err:
        return jsonify({"message": err}), 500
    
@api.route('/users', methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    if all_users is not None:
        return jsonify([user.serialize() for user in all_users]), 200
    else:
        return jsonify({"message": "Users not found"}), 404
    

@api.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user is not None:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({"message": "user not found"}), 404    

    

@api.route('/profile', methods=['POST']) 
@jwt_required()
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
    
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).one_or_none()
    # print(user)
    # print(username)
    if user == None:
            return "Ese usuario no existe", 404
    else:
        nuevo_profile = Profile(body['name'], body['last_name'], body['date_of_birth'], body['category'], body['gender'], user.id)
        db.session.add(nuevo_profile)
    try:
        db.session.commit()
        return jsonify(nuevo_profile.serialize()), 200
    except Exception as err:
        return jsonify({"message": err.args}), 400 
    

@api.route('/profiles', methods=['GET'])
def get_all_profiles():
    all_profiles = Profile.query.all()
    if all_profiles is not None:
        return jsonify([profile.serialize() for profile in all_profiles]), 200
    else:
        return jsonify({"message": "Profiles not found"}), 404
    

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
    

@api.route('/reservation-class', methods=['POST']) 
@jwt_required()
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
    if "instructor_id" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'instructor_id' en el body"}), 400
    if "field_id" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'field_id' en el body"}), 400

        
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).one_or_none()
    if user == None:
            return "La informacion del usuario esta incompleta", 404
    else:
        nuevo_reservation_class = Reservation_Class(body['date'], body['hour'], body['difficulty'], body['comments'], user.id, body['instructor_id'], body["field_id"])
        db.session.add(nuevo_reservation_class)

    try:
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
    
@api.route('/reservation-class/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_reservation_class(id):
    
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).one_or_none()
    if user is not None:
        reservation_class = Reservation_Class.query.get(id)
        if reservation_class is not None:
            db.session.delete(reservation_class)
        else:
            return jsonify({"message": "that reservation class not found"}), 404
        
        try:
            db.session.commit()
            response_body ={
                "delete" : True
            }
            return jsonify(response_body), 200
        except Exception as err:
            return jsonify({"message": err}), 500 
    else:
        return "La informacion del usuario esta incompleta", 404

    
    
@api.route('/reservation-field', methods=['POST']) 
@jwt_required()
def create_reservation_field():
    body = request.json

    if "date" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'date' en el body"}), 400
    if "hour" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'hour' en el body"}), 400
    if "number_of_players" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'number_of_players' en el body"}), 400
    if "field_id" not in body:
        return jsonify({"message": "Error, asegúrate de enviar 'field_id' en el body"}), 400
    
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).one_or_none()
    if user == None:
            return "La informacion del usuario esta incompleta", 404
    else:
        nuevo_reservation_field = Reservation_Field(body['date'], body['hour'], body['number_of_players'], user.id, body['field_id'])
        db.session.add(nuevo_reservation_field)

    try:
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

    
@api.route('/reservation-field/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_reservation_field(id):
    
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).one_or_none()
    if user is not None:
        reservation_field = Reservation_Field.query.get(id)
        if reservation_field is not None:
            db.session.delete(reservation_field)
        else:
            return jsonify({"message": "that reservation field not found"}), 404
        
        try:
            db.session.commit()
            response_body ={
                "delete" : True
            }
            return jsonify(response_body), 200
        except Exception as err:
            return jsonify({"message": err}), 500 
    else:
        return "La informacion del usuario esta incompleta", 404


    

