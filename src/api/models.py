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
    
    
'''   

    esta funcion tiene tres partes
    def get_member(self, id):
        # fill this method and update the return
        user = list(filter(lambda m: m["id"]==id, self._members))
        return user
        
    1.-Using the list() constructor to make a List:
    thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
    print(thislist)
    2.-The filter(function, iterable) function returns an iterator where the items are filtered through a function to test if the item is accepted or not.
    3.-lambda function
    x = lambda a : a + 10
print(x(5))
    
    
'''
