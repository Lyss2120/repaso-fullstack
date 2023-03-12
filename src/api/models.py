from flask_sqlalchemy import SQLAlchemy

#se crea un objeto o se instancia la clase de sqlalchemy
db = SQLAlchemy()

#la clase user hereda de la clase model(subclase de sqlalchemy) tiene todos los atributos de sqlalchemy
class User(db.Model):
    #el id se crea para ser autoincrementable
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }