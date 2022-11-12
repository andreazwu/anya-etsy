from app.models import db, User, environment, SCHEMA

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name="Demo",
        last_name="User",
        username="AnyaHoliday",
        email="demo@gmail.com",
        password="demo_user"
        )

    user2 = User(
        first_name="Aijia",
        last_name="Wang",
        username="AnyaTuTu",
        email="aijia@gmail.com",
        password="password2"
        )

    user3 = User(
        first_name="Nannan",
        last_name="Zhang",
        username="AnyaBaoBao",
        email="nannan@gmail.com",
        password="password3"
        )

    user4 = User(
        first_name="Yasha ",
        last_name="Yang",
        username="AnyaShaSha",
        email="yasha@gmail.com",
        password="password4"
        )

    user5 = User(
        first_name="Andrea",
        last_name="Wu",
        username="AnyaAnAnAn",
        email="andrea@gmail.com",
        password="password5"
        )

    db.session.add(demo)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
