from app.models import db, Review, environment, SCHEMA
from datetime import datetime

def seed_reviews():

  #-----------halloween-----------

  #1
  witchbrewreview = Review(
    created_at=datetime.now(),
    user_id=2, product_id=1, stars=5, review="Oh my, this sign is big… and I love it! Beautifully made and perfect. I gotta say, it took me quite a while to get it out of it shipping package..so.. well done! It arrived in perfect condition . Worth the wait!")

  #2
  witchhatreview1 = Review(
    created_at=datetime.now(),
    user_id=2, product_id=2, stars=5, review="Absolutely gorgeous witches hat. All the details will definitely be purchasing again!")
  witchhatreview2 = Review(
    created_at=datetime.now(),
    user_id=3, product_id=2, stars=5, review="The cutest witches hat, ever!! Can't wait to style it.")
  witchhatreview3 = Review(
    created_at=datetime.now(),
    user_id=4, product_id=2, stars=4, review="Great hat, just what i was looking for. Shipped quick!")

  #3
  halloweentilesreview = Review(
    created_at=datetime.now(),
    user_id=2, product_id=3, stars=3, review="Wish there were more variety.")

  #4
  ghostmarshreview = Review(
    created_at=datetime.now(),
    user_id=1, product_id=4, stars=4, review="They were spooky and delicious!")

  #5
  ghostbannerview = Review(
    created_at=datetime.now(),
    user_id=1, product_id=5, stars=5, review="Love my ghost garland. Looks great with my Hocus Pocus sign I purchased last year!!")

  #6
  poisonapplesreview1 = Review(
    created_at=datetime.now(),
    user_id=1, product_id=6, stars=5, review="Have to have these for next year!")
  poisonapplesreview2 = Review(
    created_at=datetime.now(),
    user_id=3, product_id=6, stars=5, review="Very happy with my order. Thank you!")

  #7
  halloweenwordsignreview = Review(
    created_at=datetime.now(),
    user_id=4, product_id=7, stars=5, review="I love her signs!!! Never disappointed...great quality!")

  #8
  halloweendrawingreview = Review(
    created_at=datetime.now(),
    user_id=2, product_id=8, stars=5, review="Love the Walter the lonely ghost pictures! This is by far my favorite~")

  #9
  pinkghostreview = Review(
    created_at=datetime.now(),
    user_id=3, product_id=9, stars=2, review="They are a little dirty looking, disappointed.")

  #10
  halloweenribbonreview = Review(
    created_at=datetime.now(),
    user_id=4, product_id=10, stars=4, review="Just what I wanted!")

  #-----------valentine-----------

  #11
  valbakesignreview = Review(
    created_at=datetime.now(),
    user_id=2, product_id=11, stars=5, review="Oh my, this sign is amazing and I love it! Beautifully made and perfect. I gotta say, it took me quite a while to get it out of it shipping package..so.. well done! It arrived in perfect condition . Worth the wait!")

  #12
  valenvelopereview1 = Review(
    created_at=datetime.now(),
    user_id=3, product_id=12, stars=5, review="They are adorable. All the details will definitely be purchasing again!")
  valenvelopereview2 = Review(
    created_at=datetime.now(),
    user_id=4, product_id=12, stars=5, review="The cutest envelopes, ever!! Can't wait to style it.")
  valenvelopereview3 = Review(
    created_at=datetime.now(),
    user_id=2, product_id=12, stars=4, review="Great product, just what i was looking for. Shipped quick!")

  #13
  valbannerreview = Review(
    created_at=datetime.now(),
    user_id=1, product_id=13, stars=3, review="The quality is not the best.")

  #14
  iloveyousignreview = Review(
    created_at=datetime.now(),
    user_id=1, product_id=14, stars=4, review="It is an adorable little sign!")

  #15
  valsticksrview = Review(
    created_at=datetime.now(),
    user_id=1, product_id=15, stars=5, review="This is cute !I love it perfect touch for valentines day.")

  #-----------thanksgiving-----------

  #-----------christmas-----------

  christmas_product21_review1 = Review(
    created_at=datetime.now(),
    user_id=1, product_id=21, review="Finished off my tree!! Just as pictured, and perfect!!", stars=3)

  christmas_product21_review2 = Review(
    created_at=datetime.now(),user_id=3, product_id=21, review="The signs are very well made.I wanted something different for my tree this year, and the Joy to the world signs gave my tree a whole new look!", stars=5)

  #-----------easter-----------
  review01 = Review(
    created_at=datetime.now(),
          product_id = 31,
          user_id = 3,
          stars = 5,
          review = 'Super cute and sizing is just right. Obsessed with this design!!'
      )
  review02 = Review(
    created_at=datetime.now(),
          product_id = 32,
          user_id = 4,
          stars = 3,
          review = 'I ordered the wrong item so I contacted the seller and they were more than happy to accommodate. Very good shopping experience',

      )
  review03 = Review(
    created_at=datetime.now(),
          product_id = 33,
          user_id = 5,
          stars = 2,
          review = "The color and presentation are outstanding. Super cute",
      )
  review04 = Review(
    created_at=datetime.now(),
          product_id = 34,
          user_id = 1,
          stars = 5,
          review = "My kids love this so much!!",
      )
  review05 = Review(
    created_at=datetime.now(),
          product_id = 35,
          user_id = 1,
          stars = 4,
          review = "So simple but so beautiful! It just looks good no matter where I place it :)",
      )
  review06 = Review(
    created_at=datetime.now(),
          product_id = 36,
          user_id = 1,
          stars = 3,
          review = "Quality is very good. Couldn't even wait for my kid's birthday to give it to him!",
      )
  review07 = Review(
    created_at=datetime.now(),
          product_id = 37,
          user_id = 4,
          stars = 5,
          review = "Much better than I expected. Highly recommend. This can be a fantastic decor for you garden",
      )
  review08 = Review(
    created_at=datetime.now(),
          product_id = 38,
          user_id = 3,
          stars = 2,
          review = "I'm obsessed with this turned out!!! ",
      )
  review09 = Review(
    created_at=datetime.now(),
          product_id = 39,
          user_id = 3,
          stars = 5,
          review = "I am in love with this!!  It is exactly what I'd envisioned!",
      )
  review10 = Review(
    created_at=datetime.now(),
          product_id = 40,
          user_id = 5,
          stars = 4,
          review = "Love them, they're so cute! Great quality too!",

      )
  #-----------spring-festival-----------

  productreview41 = Review(
    created_at=datetime.now(),
      user_id=2,
      product_id=41,
      stars=5,
      review="Fast delivery. Very happy with my order. Seller is very reliable. Each item was packed individually and securely. Picture quality is good. The lantern is working well.")

  productreview42 = Review(
    created_at=datetime.now(),
      user_id=4,
      product_id=42,
      stars=4,
      review="These decorations looked great in a window display.")

  productreview43 = Review(
    created_at=datetime.now(),
      user_id=5,
      product_id=43,
      stars=5,
      review="Beautiful decorations for my Spring Festival, I love them so much.")

  productreview44 = Review(
    created_at=datetime.now(),
      user_id=4,
      product_id=44,
      stars=2,
      review="These looked great on my chinese new years tree! They were exactly what I was looking for. I would definitely purchase them again.")

  productreview45 = Review(
    created_at=datetime.now(),
      user_id=1,
      product_id=45,
      stars=5,
      review="A beautiful red envelope with high quality paper.")

  productreview46 = Review(
    created_at=datetime.now(),
      user_id=1,
      product_id=46,
      stars=5,
      review="I love it!")


  productreview47 = Review(
    created_at=datetime.now(),
      user_id=4,
      product_id=47,
      stars=1,
      review="I don't like it.")


  productreview48 = Review(
    created_at=datetime.now(),
      user_id=4,
      product_id=48,
      stars=3,
      review="Very cool Chinese lanterns. Thank you")


  productreview49 = Review(
    created_at=datetime.now(),
      user_id=5,
      product_id=49,
      stars=4,
      review="Very happy with my order. Seller is very reliable. Each item was packed individually and securely. Picture quality is good. The lantern is working well.")


  productreview50 = Review(
    created_at=datetime.now(),
      user_id=5,
      product_id=50,
      stars=5,
      review="Well made from quality materials although the ears are made from felt not like the ones in the picture. Still cute")






#halloween
  db.session.add(witchbrewreview)
  db.session.add(witchhatreview1)
  db.session.add(witchhatreview2)
  db.session.add(witchhatreview3)
  db.session.add(halloweentilesreview)
  db.session.add(ghostmarshreview)
  db.session.add(ghostbannerview)
  db.session.add(poisonapplesreview1)
  db.session.add(poisonapplesreview2)
  db.session.add(halloweenwordsignreview)
  db.session.add(halloweendrawingreview)
  db.session.add(pinkghostreview)
  db.session.add(halloweenribbonreview)

  #valentine
  db.session.add(valbakesignreview)
  db.session.add(valenvelopereview1)
  db.session.add(valenvelopereview2)
  db.session.add(valenvelopereview3)
  db.session.add(valbannerreview)
  db.session.add(iloveyousignreview)
  db.session.add(valsticksrview)

  #thanksgiving

  #christmas
  db.session.add(christmas_product21_review1)
  db.session.add(christmas_product21_review2)

  #easter
  db.session.add(review01)
  db.session.add(review02)
  db.session.add(review03)
  db.session.add(review04)
  db.session.add(review05)
  db.session.add(review06)
  db.session.add(review07)
  db.session.add(review08)
  db.session.add(review09)
  db.session.add(review10)

  #springfestival
  db.session.add(productreview41)
  db.session.add(productreview42)
  db.session.add(productreview43)
  db.session.add(productreview44)
  db.session.add(productreview45)
  db.session.add(productreview46)
  db.session.add(productreview47)
  db.session.add(productreview48)
  db.session.add(productreview49)
  db.session.add(productreview50)


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
