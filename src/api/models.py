from flask_sqlalchemy import SQLAlchemy
import enum
# from sqlalchemy import Column, ForeignKey, Integer, String, Date, Enum
from sqlalchemy import Enum, ForeignKey
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    # def __repr__(self):
    #     return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Instructor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    years_of_experience = db.Column(db.Integer, unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)

    def __init__(self, name, last_name, years_of_experience, description):
        self.name = name
        self.last_name = last_name
        self.years_of_experience = years_of_experience
        self.description = description


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "years_of_experience": self.years_of_experience,
            "description": self.description
            # do not serialize the password, its a security breach
        }

class type_field(enum.Enum):
    concreto = 'concreto'
    arcilla = 'arcilla'
    grama = 'grama'
    
class Field(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(Enum(type_field), nullable=False, default=type_field.concreto)
    number_of_field = db.Column(db.Integer, unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)

    def __init__(self, type, number_of_field, description):
        self.type = type
        self.number_of_field = number_of_field
        self.description = description


    def serialize(self):
        return {
            "id": self.id,
            "type": self.type.value,
            "number_of_field": self.number_of_field,
            "description": self.description
            # do not serialize the password, its a security breach
        }
    
class type_category(enum.Enum):
    primera = 'primera'
    segunda = 'segunda'
    tercera = 'tercera'
    cuarta = 'cuarta'
    quinta = 'quinta'
    sexta = 'sexta'

class type_gender(enum.Enum):
    male = 'male'
    female = 'female'
    neutral = 'neutral'
    
class Profile (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    date_of_birth = db.Column(db.Date, unique=False, nullable=False)
    category = db.Column(Enum(type_category), nullable=False, default=type_category.primera)
    gender = db.Column(Enum(type_gender), nullable=False, default=type_gender.neutral)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')) 
    user = db.relationship('User')

    def __init__(self, name, last_name, date_of_birth, category, gender):
        self.name = name
        self.last_name = last_name
        self.date_of_birth = date_of_birth
        self.category = category
        self.gender = gender 

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "date_of_birth": self.date_of_birth,
            "category": self.category.value,
            "gender": self.gender.value,
            # do not serialize the password, its a security breach
        }
    

class type_difficulty(enum.Enum):
    principiante = 'principiante'
    intermedio = 'intermedio'
    avanzado = 'avanzado'

class Reservation_Class(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, unique=False, nullable=False)
    time = db.Column(db.Time, unique=False, nullable=False)
    difficulty = db.Column(Enum(type_difficulty), nullable=False, default=type_difficulty.principiante)
    comments = db.Column(db.String(1000), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')) 
    user = db.relationship('User')
    instructor_id = db.Column(db.Integer, db.ForeignKey('instructor.id')) 
    instructor = db.relationship('Instructor')
    field_id = db.Column(db.Integer, db.ForeignKey('field.id')) 
    field = db.relationship('Field')

    def __init__(self, date, time, difficulty, comments):
        self.date = date
        self.time = time
        self.difficulty = difficulty
        self.comments = comments 

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "time": self.time,
            "difficulty": self.difficulty.value,
            "comments": self.comments,
            # do not serialize the password, its a security breach
        }

class n_players(enum.Enum):
    dos = 'dos'
    cuatro = 'cuatro'
    seis = 'seis'
    
class Reservation_Field(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, unique=False, nullable=False)
    time = db.Column(db.Time, unique=False, nullable=False)
    number_of_players = db.Column(Enum(n_players), nullable=False, default=n_players.dos)
    type = db.Column(Enum(type_field), nullable=False, default=type_field.concreto)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')) 
    user = db.relationship('User')
    field_id = db.Column(db.Integer, db.ForeignKey('field.id')) 
    field = db.relationship('Field')

    def __init__(self, date, time, number_of_players, type):
        self.date = date
        self.time = time
        self.number_of_players = number_of_players
        self.type = type

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "time": self.time,
            "number_of_players": self.number_of_players,
            "type": self.type.value,
            # do not serialize the password, its a security breach
        }

# field = Field(type_field.gomitas, 2, "Esta es la cancha de tus sueños")

# print(field.type)

