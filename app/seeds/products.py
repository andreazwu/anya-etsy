from app.models import db, Product, environment, SCHEMA


def seed_products():
  #-----------halloween-----------
  #1
  witchbrew = Product(
    seller_id=1, category="Halloween", name="Witches brew coffee house sign, coffee bar sign, Halloween sign, fall sign, coffee sign, witch sign, gift, PREORDER", description="A scary and fun sign for your coffee bar for Halloween!! It's about 12x23 inches in size. No other accessories included", price=75.10, stock=5)

  #2
  witchhat = Product(
    seller_id=1, category="Halloween", name="Witch hat decor, primitive witch hat, neutral Halloween decor, gift", description="I made this hat to sit on a table, a pumpkin, a stack of books, etc… It's a great size. It's about 9-10 inches in diameter and about 8-9 inches tall Each one will be slightly different as they are handmade by me", price=59.30, stock=15)

  #3
  halloweentiles = Product(
    seller_id=1, category="Halloween", name="Halloween scrabble tiles, Halloween decor, fall decor, tiered tray to for, gift", description="These Scrabble trays with Halloween words on them are a lot of fun to decorate with. stacking them into a tiered tray, an end table, on a stack of old books, fireplace mantle, shelf, etc", price=27.30, stock=10)

  #4
  ghostmarsh = Product(
    seller_id=5, category="Halloween", name="Ghost marshmallows, set of three ghost marshmallows, Halloween decor, rae Dunn accessories, gift", description="With this set you'll receive a set of three of my fake marshmallows that are chocolate covered in black with cute ghost embellishments, on a stick with a Blk/white gingham bow", price=18.00, stock=20)

  #5
  ghostbanner = Product(
    seller_id=5, category="Halloween", name="Ghost banner, ghost garland, primitive ghost banner, vintage inspired Halloween banner, fall decor, gift, PREORDER", description="7 ghosts come on the banner. It comes strung on bakers twine. You can move the ghosts closer together or further apart.", price=51.75, stock=3)

  #6
  poisonapples = Product(
    seller_id=5, category="Halloween", name="Poison apples, fake food prop, fake apples, Halloween decor, fall decor, gift", description="FAKE FOOD DO NOT EAT!! These are my mini apples, the cutest fake poison apples! You'll receive 3 of these cuties! Gree. apples dipped in black, a cute Blk/white polka dot tie on each one", price=22.00, stock=20)

  #7
  halloweenwordsign = Product(
    seller_id=5, category="Halloween", name="Rae dunn inspired Halloween word signs, gift, farmhouse style", description="My mini word signs are perfect to put anywhere in your home. I have so many words to choose from or you can choose your own.", price=14.00, stock=25)

  #8
  halloweendrawing = Product(
    seller_id=1, category="Halloween", name="Ghosts bobbing for apples, Halloween decor, cute Halloween decor, framed paper sign, framed Halloween art, gift, PREORDER", description="It's a paper print on a thick wood sign with a wooden frame, 18x24 inches in size", price=94.00, stock=2)

  #9
  pinkghost = Product(
    seller_id=1, category="Halloween", name="Pink Ghosts on spindles, set of two ghosts, Halloween decor, vintage inspired ghosts, primitive Halloween, gift, PREORDER", description="You'll receive two adorable vintage inspired ghosts. I love neutral decor. These will go with any style decor.", price=46.75, stock=10)

  #10
  halloweenribbon = Product(
    seller_id=1, category="Halloween", name="Witch stamped ribbon on a spool, vintage decor. Tiered tray decor, gift, PREORDER", description="There is about 3/4 of a yard of ribbon on each spool. The spool is about 2 inches tall", price=18.00, stock=8)

  #-----------valentine-----------
  #11
  valbakesign = Product(
    seller_id=1, category="Valentine", name="Valentine & co. Cupid's bow confectionery sign, bakery sign, valentine sign, gift PRE ORDER", description="23.5x6 inches sign. It would look beautiful anywhere in your kitchen/dining room area.", price=55.00, stock=5)

  #12
  valenvelope = Product(
    seller_id=1, category="Valentine", name="Wooden envelopes with red hearts, Valentine decor, Valentine envelopes, gift, PREORDER", description="A set of 5, about 2.5x3.5 inches, on thin laser cut wood.", price=18.00, stock=30)

  #13
  valbanner = Product(
    seller_id=5, category="Valentine", name="Envelope felt banner, Valentine banner. Valentine decor, felt Valentine banner, felt envelope banner with pink hearts, gift, PREORDER", description="A sweet little banner for your Valentine decor. Each envelope is made from white felt. Each envelope has a wooden heart that's painted in a blush pink and it's strung on a blush pink yarn", price=33.00, stock=15)

  #14
  iloveyousign = Product(
    seller_id=5, category="Valentine", name="I love you sign, valentine sign, gift, romantic", description="7x7 inches; all paint and wood.", price=18.00, stock=3)

  #15
  valsticks = Product(
    seller_id=5, category="Valentine", name="Valentine pennant sticks, Valentine decor, pennant flags, gift, PREORDER", description="Decorate any space with these cutie pies! Two dowels that are adorably adorned with the cutest embellishments. Paper, wood letters & hearts, felt balls, yarn balls, ribbons etc", price=23.00, stock=3)

  #-----------thanksgiving-----------

  product16 = Product(
        seller_id=1,
        category = "Thanksgiving",
        name = "Fall Pumpkin Pick 15inches--2 Sets of 3 Asst w Fall Foliage Berries and Colors Thanksgiving Fall Decor DIY Harvest Centerpieces Table Settings",
        description = "Each order includes 2 Sets Have fun with this 15inches Fall Pumpkin Pick! You will receive two assortments of three styles of these pumpkin picks loaded with Foliage and Berries and bursting with harvest Colors. Perfect for DIY centerpieces, table settings, and any other Indoor or Outdoor fun you can dream up. Decorative containers are sold separately. Breast Cancer Awareness month is officially here. We will donate $1 for every order placed from Oct - December 31st, 2022.",
        price = 19.99,
        stock = 5
    )

  product17 = Product(
        seller_id=1,
        category = "Thanksgiving",
        name = "Faux Pumpkin Trimmed with Living Succulents, Autumn, Thanksgiving, Table Decor, Thanksgiving Centerpiece, Host Gift, Fall Patio Decor",
        description = "Faux Pumpkin trimmed with live succulents. Choose large (9 inches) or medium (8 inches) or small (6 inches). Handmade, no two are exactly alike. Spray with water weekly, provide bright indirect light. Great for Autumn, Halloween, or Thanksgiving decor. A beautiful, realistic looking, faux pumpkin trimmed with living succulents. Succulent trimmed pumpkins are beautiful and stay looking beautiful throughout the holidays and into spring. The Succulents can be removed and placed in your garden. Care instructions included.",
        price = 71.95,
        stock = 8
    )

  product18 = Product(
        seller_id=4,
        category = "Thanksgiving",
        name = "37 inches Turkey Standing Decor with Telescoping Legs, Thanksgiving Decor",
        description = "Celebrate your holiday with this Fabric Turkey Standing Decor. This decor features Fabric body with telescoping legs and stuffed with polyester. It can be set up in two size models of 37 inches H and 24 inches H. Features: Includes: (1) 37 inches Turkey Warm white Led Light Button Battery Included Fabric body with telescoping legs Made of 45% Polyester,45% Cotton,5% Sand and 5% Plastic Measures 14.17 inches long x 7.48 inches wide x 37.4 inches high",
        price = 80.40,
        stock = 8
    )

  product19 = Product(
        seller_id=4,
        category = "Thanksgiving",
        name = "Thanksgiving Custom Wood Place Tags Names, Fall Name Tags, Pumpkin Table Decor, Thanksgiving Décor Place Names, Table Wood Custom Names",
        description = "Make your Thanksgiving table beautiful with our custom wood name tags for a place setting. Our wood name signs are a great way to help guests find their sittings and it's also a great gift afterward :) Each pumpkin custom name tag cut from 1/8 inch baltic birchwood",
        price = 3.73,
        stock = 20
    )

  product20 = Product(
        seller_id=4,
        category = "Thanksgiving",
        name = "Whiskey barrel decor, thanksgiving decor, fall tiered tray decor, whiskey barrel candle holder accessories, rustic decor, farmhouse decor",
        description = "**** Please note that this listing does not include Whisky barrel centerpiece**** Thanksgiving home decor, fall tiered tray decor, whiskey barrel candle holder accessories This listing is for a Set of 5 wood turkeys that are approx 3” tall and 3” wide. **** Please note that this listing does not include Whisky barrel centerpiece**** Turkeys are made to fit in our best selling whiskey barrel stave candle holder, if you don't have the centerpiece check out the link below. These turkeys also look great on a tiered tray",
        price = 30.00,
        stock = 10
    )

  #-----------christmas-----------

  product21 = Product(
        seller_id=4,
        category = "Christmas",
        name = "Joy to the World Wood Tree Signs | Christmas Tree Decor | Rustic Christmas Decor | Christmas Ornaments | Christmas Tree Decorations",
        description = "Looking to add the perfect addition to your Christmas tree? These rustic Joy to the World tree signs are sure to be a huge hit with any style Christmas decor! Each sign features a medium/dark walnut stain, distressed edges, and white hand painted lettering. 'JOY' and 'WORLD' are painted in calligraphy, and 'TO THE' is painted in print style lettering. This listing is for a set of THREE signs. The signs collectively will read 'Joy to the World'",
        price = 49.99,
        stock = 30
    )

  product22 = Product(
        seller_id=1,
        category = "Christmas",
        name = "Personalized Stockings | Stocking Tags | Name Tags | Rustic Home Decor | Reusable Gift Label | Gift Tag | Monogram",
        description = "*Please read lead times prior to ordering. Due to the current demand, personalized stocking tags will ship in the stated time frame. This listing is for one wood stocking name tag. It is stained in a medium/dark walnut stain. Each tag features white calligraphy style lettering with the name or word of your choice. Each tag comes with a pre drilled hole and twine at the top to easily attach to your stocking or hook! Please be sure to spell each name exactly as you would like it spelled on the tag at check out! *Please note; due to the variations of wood supply, stocking tags can differ slightly. Some may appear lighter or darker in appearance, but they are all prepped using the same materials. Each stocking tag is unique in characteristics.",
        price = 7.25,
        stock = 20
    )

  product23 = Product(
        seller_id=1,
        category = "Christmas",
        name = "Rustic Christmas Decor, Family Name Sign, Rustic Wood Sign, Wood Christmas Gift, Holiday Decor, Rustic Christmas Ornaments",
        description = "Tis the season, friends! This listing is for a distressed wood holiday sign with customized last name and hand painted ornaments! SIZE: 19” wide by 11” tall **All sizes are approximate. Please note, due to variations in wood, no two signs will be exactly identical - variations in stain color, distressed areas, and knots in the wood are common. Also, because all my items are hand painted - there are brush strokes visible within the drawings and wording.",
        price = 34.99,
        stock = 20
    )

  product24 = Product(
        seller_id=1,
        category = "Christmas",
        name = "Rustic Christmas Ornament | Hand Painted Ornaments | Christmas Ornament | Rustic Christmas Decor | Holiday Decor | Rustic Decor",
        description = "This listing is for a set of FOUR rustic Christmas ornaments! Each ornament is stained with a medium Walnut stain, distressed lightly around the edges, and hand painted with white lettering. These do not include hooks on the back, they simply nestle into the branches of your tree. **Hanging hardware not included but can be purchased from my shop! Size: Approximately 9.5' wide by 3.5' tall. The words included in the set for four are as follows; joy peace merry **Want more than four ornaments for your tree? Please start a conversation with me prior to ordering and I will be glad to create a custom order for you! Please be very specific with how many ornaments you would like, and what you would like each ornament to say. If not specified with order, you will receive the ornaments with the following words; joy, noel, peace, merry.",
        price = 22.00,
        stock = 20
    )

  product25 = Product(
        seller_id=1,
        category = "Christmas",
        name = "Give Thanks | Holiday | Home Decor | Rustic | Pumpkin",
        description = "This listing is for a hand painted wood sign with white lettering. Size: Approximately 24inch tall by 12inch wide. When ordering, please keep in mind no two pieces of wood are the same, and no two signs will appear identical in stain color, distressing, or natural detailing of the wood. Each sign is unique in characteristics and may vary slightly from the example shown. *Hanging hardware not included, but can be purchased in the shop! **Please be sure to check my current lead times prior to ordering! I do offer rush options on a limited basis if an order is needed by a certain date. Please contact me prior to ordering if needed sooner than my current lead times to ensure I am able to accommodate!",
        price = 35.00,
        stock = 10
    )

  product26 = Product(
        seller_id=4,
        category = "Christmas",
        name = "Santa Claus sign, Christmas sign, gift, PREORDER",
        description = "The cutest Santa Claus you ever did see! His beard is so sweet made of all tiny white pom-poms The sign is about 5“ x 5 1/2“ No other accessories included",
        price = 18.00,
        stock = 8
    )

  product27 = Product(
        seller_id=4,
        category = "Christmas",
        name = "Gingerbread banner, primitive gingerbread banner, Christmas banner, vintage inspired Christmas decor, gift, PREORDER",
        description = "The sweetest Gingerbread banner ❤️❤️❤️ Hand sewn I am a relatively new seller. My lines are not perfect but I promise you they are made with lots of love and I think that they are totally cute. I use everything that I making my own home and I think that you will just love it. Each finger man is about 4.5”x6”",
        price = 53.75,
        stock = 10
    )

  product28 = Product(
        seller_id=4,
        category = "Christmas",
        name = "Candy cane hanger, fabric candy cane, joy, Christmas decor, peg rail hanger, ornament, primitive Christmas, gift, PREORDER",
        description = "Hang this chunky fabric candy cane on your Christmas tree, a peg rail, on a tiered tray etc… It's made with red/cream ticking fabric with frayed edges and a tag that says “joy And a hanger attached It's about 4”x9” No Other accessories included:)",
        price = 15.00,
        stock = 8
    )

  product29 = Product(
        seller_id=4,
        category = "Christmas",
        name = "Large black snowman hat , Frosty's hat, Christmas decor, primitive Christmas decor, winter decor, gift, PREORDER",
        description = "The cutest frosty hat you ever did see! ☃️ Handmade and oh so cute! It's a great size. It's about 9-10” in diameter and about 8-9” tall Each one will vary a bit as they are handmade and unique I'm a fairly new sewer. My lines aren't perfect, but I assure you it's made with lots of love! I frayed the edges for more character It has sweet Annie on it, ribbons and a tag that says “Frosty”",
        price = 62.30,
        stock = 8
    )

  product30 = Product(
        seller_id=4,
        category = "Christmas",
        name = "Ho ho ho wooden book stack, Christmas decor, Santa decor, gift",
        description = "A classic adorable Christmas wooden book stack! It says: 'HO HO HO' It's distressed red with white lettering and a big black bow to mimic Santa's belt. It's about 2.5”x5” No other accessories included",
        price = 28.00,
        stock = 15
    )

  #-----------easter-----------
  product31 = Product(
      seller_id = 1,
      category = "Easter",
      name = "Delicate Stripes Personalized Easter Basket, Easter Basket, Kids Basket, Easter, Basket, Personalized Easter Basket",
      description = "The Delicate Stripes Personalized Easter Basket is the perfect basket to fill with all of their goodies from the Easter Bunny.",
      price = 15.80,
      stock = 10
  )
  product32 = Product(
      seller_id = 1,
      category = "Easter",
      name = "3in Bunny Ear Cactus with ceramic pot | Mother's Day Gift | Live Succulents Arrangement | Easter Gift | Easter decoration | Succulent Gift",
      description = "Fresh succulent garden arrives in a beautifully crafted planter ceramic pot with gift wrap - ready to display and enjoy. Contains 01 medium size pre-planted fresh Bunny Ear Cactus.",
      price = 12.99,
      stock = 10
  )
  product33 = Product(
      seller_id = 1,
      category = "Easter",
      name = "Wooden egg, Easter eggs, Easter decor, spring decor, Easter tiered tray, wood eggs, Easter bunny, Easter basket, eggs",
      description = "This Easter egg is perfect to add to your Easter or spring display! They can be purchased in a bundle or individually. This product is made from wood which means that each one will have different textures, knots, grains and sometimes take stain or paint differently. This adds character to each piece and makes it perfectly unique.",
      price = 55.49,
      stock = 10
  )
  product34 = Product(
      seller_id = 2,
      category = "Easter",
      name = "A carrot purse bursting with three bunnies",
      description = "Here we have three cute rabbits living in a carrot house. All come out to play, hours of fun, and can be popped back in and will snuggle down to sleep soundly, safely secured with a good quality zip. The carrot and bunnies are all made from top notch cotton and each item is extremely well made and even the carrot is lined, giving the bunnies extra comfort. Each little bunny has an embroidered face all three of which are slightly different.",
      price = 33.33,
      stock = 10
  )
  product35 = Product(
      seller_id = 2,
      category = "Easter",
      name = "Liberty of London, Easter Bunny Decoration, Hanging Rabbit Ornament, Happy Easter Bunny, Wooden Decoration",
      description = "These wooden bunnies are the perfect ornament for your home. Can be hung around your Easter dinner, on a wall or simply placed on your windowsill. Their outfit is made out of soft and floral Liberty fabric. A bow made out of twine is also added to give them a more finished and chic look. They make a nice gift for your loved ones or even yourself.",
      price = 10.00,
      stock = 10
  )
  product36 = Product(
      seller_id = 2,
      category = "Easter",
      name = "Knitted Bunny Toy Cotton Stuffed Animal Gift - Easter Bunny Rabbit plush toy",
      description = "You found the cutest stuffed bunny that is looking for a home to cheer up your kid! Crochet handmade toy is ready to tell a lot of stories for your baby! Perfect for cheer up gift for toddler, birthday gift, baby shower or can be used as a nursery decoration.",
      price = 25.25,
      stock = 10
  )
  product37 = Product(
      seller_id = 2,
      category = "Easter",
      name = "Cute Grass Bunny, 2022 Easter Day Decorations Farm Rabbit Props Ornament for House, Party, Window ,Photography, Spring Decor",
      description = "Easter home decoration, vivid and cute bunny. The dressed rabbit is perfect for welcoming spring and adding fun to the new year. Rabbits and radishes are an indispensable element for Easter and are the best choice for Easter decoration. Widely used in various home decoration, new house layout, product embellishment, craft decoration, set decoration, children's toys, etc.",
      price = 47.50,
      stock = 10
  )
  product38 = Product(
      seller_id = 2,
      category = "Easter",
      name = "Bunny: Knitted Wire Sign, Easter bunny sign, Easter bunny decor",
      description = "Wire & Wonder Co. offers knitted wire decor for nurseries, playrooms, bedrooms and more. I combined my love for minimalist designs with my kids' love for fun, bold patterns to create simple but whimsical wire wall hangings.",
      price = 19.79,
      stock = 10
  )
  product39 = Product(
      seller_id = 1,
      category = "Easter",
      name = "Metal Farm Truck,Personalized Truck, Farmhouse Truck Decor, Decorated Truck, Farmhouse Decor, Spring Farm Truck,Spring Decor, Farm Truck",
      description = "Amazing diecast truck has fully operational parts. Please note size before ordering. You can add small items to the bed for seasonal displays or choose the option to have the drivers side door door personalized in vinyl as shown here. The truck will come with no additions of any kind unless requested from the order menu. Comes with the Easter theme lettering on the drivers door. Objects shown in picture are not included but available separately.",
      price = 19.99,
      stock = 10
  )
  product40 = Product(
      seller_id = 1,
      category = "Easter",
      name = "Hoppy Easter Round, Spring Paint Kit, Spring Signs, Easter Door Hanger, Personalized easter sign, personalized family sign, easter decor",
      description = "This adorable round 'HOPPY EASTER' Personalized sign is a great addition to your easter decor! 3D look. Jute cord will be included to hang sign as a door hanger! Available in 10.5 inches, 12 inches, or 16 inches.",
      price = 66.20,
      stock = 10
  )

  #-----------spring-festival-----------
  product41 = Product(
      seller_id=1,
      category="Spring Festival",
      name="Spring Festival LED Hanging Lights, Spring Festival Decoration, Chinese New Year Window Door, Wall Decorations",
      description="This Chinese New Years couplets set are great for wall, door, cabinets, window and so on, classical red color create a festival atmosphere. ",
      price=39.99,
      stock=20)

  product42 = Product(
      seller_id=3,
      category="Spring Festival",
      name="Chinese New Year Decoration Pendant, Spring Festival Decoration, Chinese style ornaments, Chinese New Year layout props",
      description="It is suitable for New Year decorations, provides home warmth for people in a foreign land, dispels the cold in winter, and adds the atmosphere of the Spring Festival.",
      price=29.99,
      stock=20)

  product43 = Product(
      seller_id=1,
      category="Spring Festival",
      name="Red Blessing Stickers, Chinese New Year Decoration, 2023 Rabbit Window Flower Spring Festival Lucky Stickers, Home Decoration",
      description="The Spring Festival hanging pendants use bright red, the classic Chinese lucky color, and are decorated with Chinese traditional patterns that mean health, good fortune and wealth, full of Chinese spirit and festive flavor",
      price=19.99,
      stock=20)

  product44 = Product(
      seller_id=1,
      category="Spring Festival",
      name="Traditional Red Lantern USB LED String Light, Chinese New Year Decoration, Window Flower Spring Festival Lucky Stickers, Home Decoration",
      description="Energy saving, long life, high brightness, cold light source, not easy to generate heat, repeated use; PC material shell, non-toxic and harmless, not easy to damage, high waterproof effect. The plug string lights with tail plugs can be connected to each other at the tail, the series decoration effect is better and more convenient.",
      price=33.66,
      stock=30)

  product45 = Product(
      seller_id=3,
      category="Spring Festival",
      name="2023 Rabbit Year Red Envelope, Chinese New Year Decorations, 2023 Hongbao, Spring Festival Lucky Money, Red Poket",
      description="The New Year red envelope is the favorite notions during the Spring Festival every year. It is the New Year blessing medium needed by every Chinese to celebrate the Spring Festival. Convey mutual blessings and yearning for a better life",
      price=28.88,
      stock=30)


  product46 = Product(
      seller_id=3,
      category="Spring Festival",
      name="Purse Women Shoulder Bag Lovely Handbag, Children Gifts, 2023 Red Envelopes, Cartoon Rabbit Year Mobile Phone Passport Bag, 2023 Rabbit Year Red Envelope, Chinese New Year Decorations, 2023 Hongbao, Spring Festival Lucky Money",
      description="The New Year red envelope is the favorite notions during the Spring Festival every year. It is the New Year blessing medium needed by every Chinese to celebrate the Spring Festival. Convey mutual blessings and yearning for a better life.",
      price=39.99,
      stock=20)

  product47 = Product(
      seller_id=3,
      category="Spring Festival",
      name="Chinese Couplets Chunlian Set,  Spring Festival Decorations, Fu Character Window Ornaments for 2023 Rabbit New Year, Chinese New Year Decorations",
      description="These new year decorations can be sent to your family or friend as a gift. It believed that the festive adornment will bring wealth and good luck to the person who receives it in Eastern culture.",
      price=39.99,
      stock=20)

  product48 = Product(
      seller_id=1,
      category="Spring Festival",
      name="Red Fruit Golden Berry, Chinese New Year, Spring Festival Home Decoration, Simulation Flower, Golden Eucalyptus Leaf, Small Fan Leaf",
      description="New Year decoration, Spring Festival, home furnishings, vase flower arrangement, wealth and peace",
      price=39.99,
      stock=20)

  product49 = Product(
      seller_id=1,
      category="Spring Festival",
      name="New Year Lanterns Pendants, 2023 Spring Festival Flocking Pendant, Chinese New Year Decorations, Hanging Ornaments Plant Decor",
      description="It is the New Year blessing medium needed by every Chinese to celebrate the Spring Festival. Convey mutual blessings and yearning for a better life",
      price=39.99,
      stock=20)

  product50 = Product(
      seller_id=3,
      category="Spring Festival",
      name="2023 Zodiac Fortuna Rabbit, New Year Tang Suit Cute Rabbit, Home Decoration, Stuffed Toy, Creative New Year, Special Gift For Kids",
      description="100% Brand New & High quality. Material: Soft plush and pp cotton",
      price=39.99,
      stock=20)







  #halloween
  db.session.add(witchbrew)
  db.session.add(witchhat)
  db.session.add(halloweentiles)
  db.session.add(ghostmarsh)
  db.session.add(ghostbanner)
  db.session.add(poisonapples)
  db.session.add(halloweenwordsign)
  db.session.add(halloweendrawing)
  db.session.add(pinkghost)
  db.session.add(halloweenribbon)

  #valentine
  db.session.add(valbakesign)
  db.session.add(valenvelope)
  db.session.add(valbanner)
  db.session.add(iloveyousign)
  db.session.add(valsticks)

  #thanksgiving

  #christmas
  db.session.add(product16)
  db.session.add(product17)
  db.session.add(product18)
  db.session.add(product19)
  db.session.add(product20)
  db.session.add(product21)
  db.session.add(product22)
  db.session.add(product23)
  db.session.add(product24)
  db.session.add(product25)
  db.session.add(product26)
  db.session.add(product27)
  db.session.add(product28)
  db.session.add(product29)
  db.session.add(product30)

  #easter
  db.session.add(product31)
  db.session.add(product32)
  db.session.add(product33)
  db.session.add(product34)
  db.session.add(product35)
  db.session.add(product36)
  db.session.add(product37)
  db.session.add(product38)
  db.session.add(product39)
  db.session.add(product40)

  #springfestival
  db.session.add(product41)
  db.session.add(product42)
  db.session.add(product43)
  db.session.add(product44)
  db.session.add(product45)
  db.session.add(product46)
  db.session.add(product47)
  db.session.add(product48)
  db.session.add(product49)
  db.session.add(product50)

  db.session.commit()



# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
