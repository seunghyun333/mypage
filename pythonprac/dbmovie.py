from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.p4haus1.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta





db.movies.update_one({'title':'가버나움'},{'$set':{'star':0}})
