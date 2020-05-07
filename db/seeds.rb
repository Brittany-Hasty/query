# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'demo@demo.com', password: '123456', credentials: "Demo User", fname: "John", lname: "Doe")



# User.create(email: '', password: '', credentials: '', fname: '', lname: '')
# Question.create(title: '', body: '', topic: '', author_id: '')


