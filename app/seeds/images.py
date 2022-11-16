from app.models import db, Image, environment, SCHEMA

def seed_images():
  #-----------halloween-----------
  #1
  witchbrewimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/6ca93a/3417627453/il_794xN.3417627453_omqu.jpg", product_id=1)

  witchbrewimage2 = Image(
    url=" https://i.etsystatic.com/16985177/r/il/36beea/4216365657/il_794xN.4216365657_30a2.jpg", product_id=2)


  #2
  witchhatimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/36beea/4216365657/il_794xN.4216365657_30a2.jpg", product_id=2)

  witchhatimage2 = Image(
    url="https://i.etsystatic.com/16985177/r/il/2f3a1a/4168708100/il_794xN.4168708100_f20h.jpg", product_id=2)

  witchhatimage3 = Image(
    url="https://i.etsystatic.com/16985177/r/il/60bc92/4216365677/il_794xN.4216365677_g355.jpg", product_id=2)

  #3
  halloweentilesimage = Image(
    url="https://i.etsystatic.com/16985177/r/il/104839/3949974196/il_794xN.3949974196_kuqc.jpg", product_id=3)

  #4
  ghostmarshimage = Image(
    url="https://i.etsystatic.com/16985177/r/il/619fd1/2496284165/il_794xN.2496284165_kxn4.jpg", product_id=4)

  #5
  ghostbannerimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/aaf8f5/4129699123/il_794xN.4129699123_lbj5.jpg", product_id=5)

  ghostbannerimage2 = Image(
    url="https://i.etsystatic.com/16985177/r/il/0ca822/4129699103/il_794xN.4129699103_7gd8.jpg", product_id=5)

  ghostbannerimage3 = Image(
    url="https://i.etsystatic.com/16985177/r/il/b28124/4129699043/il_794xN.4129699043_4acm.jpg", product_id=5)

  #6
  poisonapplesimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/808c9d/2448649526/il_794xN.2448649526_ennk.jpg", product_id=6)
  poisonapplesimage2 = Image(
    url="https://i.etsystatic.com/16985177/r/il/18ece1/2507007454/il_794xN.2507007454_gq3k.jpg", product_id=6)

  #7
  halloweenwordsignimage = Image(
    url="https://i.etsystatic.com/16985177/r/il/fa56c0/1940136509/il_794xN.1940136509_o522.jpg", product_id=7)

  #8
  halloweendrawingimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/b5648e/4116612944/il_794xN.4116612944_gei5.jpg", product_id=8)
  halloweendrawingimage2 = Image(
    url="https://i.etsystatic.com/16985177/r/il/32041d/4163051915/il_794xN.4163051915_pu2w.jpg", product_id=8)

  #9
  pinkghostimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/63178d/4122058444/il_794xN.4122058444_cljr.jpg", product_id=9)
  pinkghostimage2 = Image(
    url="https://i.etsystatic.com/16985177/r/il/1ade85/4122058448/il_794xN.4122058448_2w21.jpg", product_id=9)
  pinkghostimage3 = Image(
    url="https://i.etsystatic.com/16985177/r/il/0f51b9/3978886886/il_794xN.3978886886_kh1v.jpg", product_id=9)

  #10
  halloweenribbonimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/86a220/4120498462/il_794xN.4120498462_ahuc.jpg", product_id=10)
  halloweenribbonimage2 = Image(
    url="https://i.etsystatic.com/16985177/r/il/032ca9/4026560479/il_794xN.4026560479_3vwm.jpg", product_id=10)

  #-----------valentine-----------

  #11
  valbakesignimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/cb2a76/2754855448/il_794xN.2754855448_gcee.jpg", product_id=11)

  #12
  valenvelopeimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/430b76/3671004377/il_794xN.3671004377_rvtw.jpg", product_id=12)

  #13
  valbannerimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/5b47cb/3612823241/il_794xN.3612823241_2kz8.jpg", product_id=13)
  valbannerimage2 = Image(
    url="https://i.etsystatic.com/16985177/r/il/4d773a/3606887214/il_794xN.3606887214_mfr3.jpg", product_id=13)
  valbannerimage3 = Image(
    url="https://i.etsystatic.com/16985177/r/il/a9cdea/3565243828/il_794xN.3565243828_7rqh.jpg", product_id=13)

  #14
  iloveyousignimage = Image(
    url="https://i.etsystatic.com/16985177/r/il/3222fd/2164451807/il_794xN.2164451807_piqz.jpg", product_id=14)

  #15
  valsticksimage1 = Image(
    url="https://i.etsystatic.com/16985177/r/il/4415ad/3585136844/il_794xN.3585136844_n54a.jpg", product_id=15)

  #-----------thanksgiving-----------

  product16_image1 = Image(
    url='https://i.etsystatic.com/21444879/r/il/2e7235/2610897501/il_794xN.2610897501_5oeo.jpg', product_id=16)

  product16_image2 = Image(
    url='https://i.etsystatic.com/21444879/r/il/be4ddb/2610896447/il_794xN.2610896447_ygr2.jpg', product_id=16)

  product16_image3 = Image(
    url='https://i.etsystatic.com/21444879/r/il/135652/2563247990/il_794xN.2563247990_a945.jpg', product_id=16)

  product16_image4 = Image(
    url='https://i.etsystatic.com/21444879/r/il/8d262e/2610896737/il_794xN.2610896737_g3ch.jpg', product_id=16)

  product17_image1 = Image(
    url='https://i.etsystatic.com/6055087/r/il/345c68/2007778382/il_794xN.2007778382_3jsr.jpg', product_id=17)

  product17_image2 = Image(
    url='https://i.etsystatic.com/6055087/r/il/91c818/1628624608/il_794xN.1628624608_pjgm.jpg', product_id=17)

  product18_image1 = Image(
    url='https://i.etsystatic.com/32805993/r/il/2a3a99/4314179767/il_794xN.4314179767_mfl6.jpg', product_id=18)

  product18_image2 = Image(
    url='https://i.etsystatic.com/32805993/r/il/6bca7e/4266778732/il_794xN.4266778732_eyvx.jpg', product_id=18)

  product19_image1 = Image(
    url='https://i.etsystatic.com/13760155/r/il/27eb32/4122817523/il_794xN.4122817523_8bf1.jpg', product_id=19)

  product19_image2 = Image(
    url='https://i.etsystatic.com/13760155/r/il/34823a/4122818559/il_75x75.4122818559_4i1r.jpg', product_id=19)

  product20_image1 = Image(
    url='https://i.etsystatic.com/12351151/r/il/ff1b3e/3451532909/il_794xN.3451532909_dp6t.jpg', product_id=20)

  product20_image2 = Image(
    url='https://i.etsystatic.com/12351151/r/il/ed109b/3403809100/il_794xN.3403809100_pczb.jpg', product_id=20)

  #-----------christmas-----------

  product21_image1 = Image(
    url='https://i.etsystatic.com/8826700/r/il/905c0c/1670582790/il_794xN.1670582790_so9x.jpg', product_id=21)

  product21_image2 = Image(
    url='https://i.etsystatic.com/16526275/r/il/234a24/3508612539/il_794xN.3508612539_gu7e.jpg', product_id=21)

  product22_image1 = Image(
    url='https://i.etsystatic.com/8826700/r/il/c2c338/864885702/il_794xN.864885702_3lem.jpg', product_id=22)

  product22_image2 = Image(
    url='https://i.etsystatic.com/8826700/r/il/1ee27a/3498139355/il_794xN.3498139355_ke6d.jpg', product_id=22)

  product22_image3 = Image(
    url='https://i.etsystatic.com/8826700/r/il/836cba/3498139323/il_794xN.3498139323_l35c.jpg', product_id=22)


  product22_image4 = Image(
    url='https://i.etsystatic.com/8826700/r/il/a69117/1698270685/il_794xN.1698270685_bvkd.jpg', product_id=22)

  product23_image1 = Image(
    url='https://i.etsystatic.com/37032663/r/il/6dbe80/4347034261/il_794xN.4347034261_elrr.jpg', product_id=23)

  product23_image2 = Image(
    url='https://i.etsystatic.com/37032663/r/il/6d2b83/4299638754/il_794xN.4299638754_1561.jpg', product_id=23)

  product24_image1 = Image(
    url='https://i.etsystatic.com/8826700/r/il/268e1b/684729134/il_794xN.684729134_iojt.jpg', product_id=24)

  product24_image2 = Image(
    url='https://i.etsystatic.com/8826700/r/il/8a4864/684848391/il_794xN.684848391_iofr.jpg', product_id=24)

  product25_image2 = Image(
    url='https://i.etsystatic.com/8826700/r/il/83e31e/861924349/il_794xN.861924349_5xlx.jpg',product_id=25)

  product25_image2 = Image(
    url='https://i.etsystatic.com/8826700/r/il/46f665/861924353/il_794xN.861924353_o228.jpg', product_id=25)

  product26_image1 = Image(
    url='https://i.etsystatic.com/16985177/r/il/7625bf/2582146128/il_794xN.2582146128_setd.jpg', product_id=26)

  product27_image1 = Image(
    url='https://i.etsystatic.com/16985177/r/il/3c32cf/4208078816/il_794xN.4208078816_hrm6.jpg', product_id=27)

  product27_image2 = Image(
    url='https://i.etsystatic.com/16985177/r/il/96dd3f/4255735543/il_794xN.4255735543_nr2v.jpg', product_id=27)

  product27_image3 = Image(
    url='https://i.etsystatic.com/16985177/r/il/c6ab9d/4255735433/il_794xN.4255735433_fq26.jpg', product_id=27)

  product27_image4 = Image(
    url='https://i.etsystatic.com/16985177/r/il/2956d8/4255735589/il_794xN.4255735589_mfw6.jpg', product_id=27)

  product28_image1 = Image(
    url='https://i.etsystatic.com/16985177/r/il/2b5bad/4261377960/il_794xN.4261377960_4zxg.jpg', product_id=28)

  product29_image1 = Image(
    url='https://i.etsystatic.com/16985177/r/il/0bbf7e/4255572834/il_794xN.4255572834_he3l.jpg',product_id=29)

  product29_image2 = Image(
    url='https://i.etsystatic.com/16985177/r/il/4c7f80/4302966043/il_794xN.4302966043_70lx.jpg', product_id=29)

  product30_image1 = Image(
    url='https://i.etsystatic.com/16985177/r/il/d16656/2503700475/il_794xN.2503700475_n5ew.jpg', product_id=30)

  #-----------easter-----------
  imageaw1 = Image(
      url="https://i.etsystatic.com/11355547/r/il/a5a52a/4028770018/il_794xN.4028770018_a7fk.jpg",
      product_id=31
      )
  imageaw2 = Image(
      url="https://i.etsystatic.com/11355547/r/il/57a857/2913265491/il_794xN.2913265491_4mmn.jpg",
      product_id=31
      )
  imageaw3 = Image(
      url="https://i.etsystatic.com/20450607/r/il/8fee2a/2237366323/il_794xN.2237366323_mf3n.jpg",
      product_id=32
      )
  imageaw4 = Image(
      url="https://i.etsystatic.com/20450607/r/il/70b51b/2237365947/il_794xN.2237365947_2uvx.jpg",
      product_id=32
      )
  imageaw5 = Image(
      url="https://i.etsystatic.com/21202733/r/il/c40e3d/3742449171/il_794xN.3742449171_3j8f.jpg",
      product_id=33
      )
  imageaw6 = Image(
      url="https://i.etsystatic.com/21202733/r/il/7c0368/3742449287/il_794xN.3742449287_fjsu.jpg",
      product_id=33
      )
  imageaw7 = Image(
      url="https://i.etsystatic.com/12048927/r/il/493579/2931816106/il_794xN.2931816106_i36h.jpg",
      product_id=34
      )
  imageaw8 = Image(
      url="https://i.etsystatic.com/12048927/r/il/f5d952/2931846558/il_794xN.2931846558_9tb5.jpg",
      product_id=34
      )
  imageaw9 = Image(
      url="https://i.etsystatic.com/23139842/r/il/c3dcc5/3688788392/il_794xN.3688788392_1c06.jpg",
      product_id=35
      )
  imageaw10 = Image(
      url="https://i.etsystatic.com/27815227/r/il/9761c0/2867836416/il_794xN.2867836416_t29f.jpg",
      product_id=36
      )
  imageaw11 = Image(
      url="https://i.etsystatic.com/27815227/r/il/b70662/2915520725/il_794xN.2915520725_h7f4.jpg",
      product_id=36
      )
  imageaw12 = Image(
      url="https://i.etsystatic.com/25120420/r/il/03f046/3773367433/il_794xN.3773367433_o8ix.jpg",
      product_id=37
      )
  imageaw13 = Image(
      url="https://i.etsystatic.com/25120420/r/il/39c2cd/3725767334/il_794xN.3725767334_th38.jpg",
      product_id=37
      )
  imageaw14 = Image(
      url="https://i.etsystatic.com/25914507/r/il/07fcd5/3747854311/il_794xN.3747854311_t2s2.jpg",
      product_id=38
      )
  imageaw15 = Image(
      url="https://i.etsystatic.com/25914507/r/il/c61998/3747846857/il_794xN.3747846857_apo0.jpg",
      product_id=38
      )
  imageaw16 = Image(
      url="https://i.etsystatic.com/6802321/r/il/f6f002/3726199486/il_794xN.3726199486_1eva.jpg",
      product_id=39
      )
  imageaw17 = Image(
      url="https://i.etsystatic.com/6802321/r/il/e508b2/3726199992/il_794xN.3726199992_8vn6.jpg",
      product_id=39
      )
  imageaw18 = Image(
      url="https://i.etsystatic.com/27834434/r/il/25536a/3741797091/il_794xN.3741797091_jfaa.jpg",
      product_id=40
      )
  imageaw19 = Image(
      url="https://i.etsystatic.com/27834434/r/il/9a7b1d/3741792931/il_794xN.3741792931_ax4d.jpg",
      product_id=40
      )

  #-----------spring-festival-----------
  product41_image1 = Image(
      url="https://img.alicdn.com/imgextra/i4/23670720/O1CN016cTlCZ1HBnuEYti9l_!!23670720.jpg",
      product_id=41)

  product41_image2 = Image(
      url="https://img.alicdn.com/imgextra/i4/23670720/O1CN016cTlCZ1HBnuEYti9l_!!23670720.jpg",
      product_id=41)

  product41_image3 = Image(
      url="https://img.alicdn.com/imgextra/i2/23670720/O1CN01w5Y5mo1HBnu67NDOk_!!23670720.jpg",
      product_id=41)

  product42_image1 = Image(
      url="https://img.alicdn.com/imgextra/i1/183601810/O1CN01brakCW1PF1fOHM91d_!!183601810.jpg",
      product_id=42)

  product42_image2 = Image(
      url="https://img.alicdn.com/imgextra/O1CN01wjIvaO1PF1cP5Bto5_!!183601810.jpg",
      product_id=42)

  product42_image3 = Image(
      url="https://img.alicdn.com/imgextra/i1/183601810/O1CN01MtkzJ81PF1fMeem5L_!!183601810.jpg",
      product_id=42)

  product43_image1 = Image(
      url="https://ae01.alicdn.com/kf/S39000c0ad5544a6f8adce7d822ee383aS.jpg",
      product_id=43)

  product43_image2 = Image(
      url="https://ae01.alicdn.com/kf/S67040f1023654f84bafac6e5681cc7cec.jpg",
      product_id=43)

  product43_image3 = Image(
      url="https://ae01.alicdn.com/kf/S9c8f474cbb9d4836a3c6bafa8263494ea.jpg",
      product_id=43)

  product44_image1 = Image(
      url="https://img.alicdn.com/imgextra/i3/2213945712695/O1CN01Gre3EU1VmMBeaTwWd_!!2213945712695.jpg",
      product_id=44)
  product44_image2 = Image(
      url="https://img.alicdn.com/imgextra/i4/2213945712695/O1CN01XzR9rT1VmMBVXCvr2_!!2213945712695.jpg",
      product_id=44)
  product44_image3 = Image(
      url="https://img.alicdn.com/imgextra/i1/2213945712695/O1CN01NZtqfO1VmMBZ2JKFm_!!2213945712695.jpg",
      product_id=44)

  product45_image1 = Image(
      url="https://gd4.alicdn.com/imgextra/i2/3042927121/O1CN01PbJn6W22TTAoFGMz8_!!3042927121.jpg",
      product_id=45)
  product45_image2 = Image(
      url="https://ae01.alicdn.com/kf/S4c9774c6ee674aec96c4dadcc3c0527dZ.jpg?width=750&height=880&hash=1630",
      product_id=45)
  product45_image3 = Image(
      url="https://ae01.alicdn.com/kf/S57de0262e695457db6226870d18009aac.jpg?width=750&height=1025&hash=1775",
      product_id=45)

  product46_image1 = Image(
      url="https://img.alicdn.com/imgextra/i1/74257871/O1CN01I7QPTr280y775wNkG_!!74257871.jpg",
      product_id=46)
  product46_image2 = Image(
      url="https://img.alicdn.com/imgextra/i2/74257871/O1CN01SfEbMH280y7Dm2Bhv_!!74257871.jpg",
      product_id=46)

  product47_image1 = Image(
      url="https://img.alicdn.com/imgextra/i3/2209252358565/O1CN01Mn4mKL2D8p1fqV83L_!!2209252358565.jpg",
      product_id=47)
  product47_image2 = Image(
      url="https://img.alicdn.com/imgextra/i4/2209252358565/O1CN019Eq9Wt2D8p1j2Zpwv_!!2209252358565.jpg",
      product_id=47)
  product47_image3 = Image(
      url="https://img.alicdn.com/imgextra/i1/2209252358565/O1CN01jmuMAG2D8p1bXXCnb_!!2209252358565.jpg",
      product_id=47)

  product48_image1 = Image(
      url="https://ae01.alicdn.com/kf/Hffff2f1b4ef542f79453d7a3f5d0dbb5u.jpg",
      product_id=48)
  product48_image2 = Image(
      url="https://ae01.alicdn.com/kf/Hba5ab3f1d05244a58c64b7fc86b6e8c7K.jpg",
      product_id=48)
  product48_image3 = Image(
      url="https://ae01.alicdn.com/kf/H55614d4af4e1457ea1fb5cc7ba11ed19n.jpg",
      product_id=48)

  product49_image1 = Image(
      url="https://img.alicdn.com/imgextra/i4/23670720/O1CN01YgoufN1HBntmJiF0z_!!23670720.jpg",
      product_id=49)
  product49_image2 = Image(
      url="https://img.alicdn.com/imgextra/i2/23670720/O1CN01J4FyYa1HBntfEsC0x_!!23670720.jpg",
      product_id=49)

  product50_image1 = Image(
      url="https://img.alicdn.com/imgextra/i2/2574823912/O1CN01ty6WRz1elk4ChivX9_!!2574823912.jpg",
      product_id=50)
  product50_image2 = Image(
      url="https://img.alicdn.com/imgextra/i1/2574823912/O1CN01od44iX1elk4Chij3B_!!2574823912.jpg",
      product_id=50)





#halloween
  db.session.add(witchbrewimage1)
  db.session.add(witchbrewimage2)
  db.session.add(witchhatimage1)
  db.session.add(witchhatimage2)
  db.session.add(witchhatimage3)
  db.session.add(halloweentilesimage)
  db.session.add(ghostmarshimage)
  db.session.add(ghostbannerimage1)
  db.session.add(ghostbannerimage2)
  db.session.add(ghostbannerimage3)
  db.session.add(poisonapplesimage1)
  db.session.add(poisonapplesimage2)
  db.session.add(halloweenwordsignimage)
  db.session.add(halloweendrawingimage1)
  db.session.add(halloweendrawingimage2)
  db.session.add(pinkghostimage1)
  db.session.add(pinkghostimage2)
  db.session.add(pinkghostimage3)
  db.session.add(halloweenribbonimage1)
  db.session.add(halloweenribbonimage2)

  #valentine
  db.session.add(valbakesignimage1)
  db.session.add(valenvelopeimage1)
  db.session.add(valbannerimage1)
  db.session.add(valbannerimage2)
  db.session.add(valbannerimage3)
  db.session.add(iloveyousignimage)
  db.session.add(valsticksimage1)

  #thanksgiving
  db.session.add(product16_image1)
  db.session.add(product16_image2)
  db.session.add(product16_image3)
  db.session.add(product16_image4)
  db.session.add(product17_image1)
  db.session.add(product17_image2)
  db.session.add(product18_image1)
  db.session.add(product18_image2)
  db.session.add(product19_image1)
  db.session.add(product19_image2)
  db.session.add(product20_image1)
  db.session.add(product20_image2)

  #christmas
  db.session.add(product21_image1)
  db.session.add(product21_image2)
  db.session.add(product22_image1)
  db.session.add(product22_image2)
  db.session.add(product23_image1)
  db.session.add(product23_image2)
  db.session.add(product24_image2)
  db.session.add(product25_image2)
  db.session.add(product26_image1)
  db.session.add(product27_image1)
  db.session.add(product27_image2)
  db.session.add(product27_image3)
  db.session.add(product27_image4)
  db.session.add(product28_image1)
  db.session.add(product29_image1)
  db.session.add(product29_image2)
  db.session.add(product30_image1)

  #easter
  db.session.add(imageaw1)
  db.session.add(imageaw2)
  db.session.add(imageaw3)
  db.session.add(imageaw4)
  db.session.add(imageaw5)
  db.session.add(imageaw6)
  db.session.add(imageaw7)
  db.session.add(imageaw8)
  db.session.add(imageaw9)
  db.session.add(imageaw10)
  db.session.add(imageaw11)
  db.session.add(imageaw12)
  db.session.add(imageaw13)
  db.session.add(imageaw14)
  db.session.add(imageaw15)
  db.session.add(imageaw16)
  db.session.add(imageaw17)
  db.session.add(imageaw18)
  db.session.add(imageaw19)

  #springfestival
  db.session.add(product41_image1)
  db.session.add(product41_image2)
  db.session.add(product41_image3)
  db.session.add(product42_image1)
  db.session.add(product42_image2)
  db.session.add(product42_image3)
  db.session.add(product43_image1)
  db.session.add(product43_image2)
  db.session.add(product43_image3)
  db.session.add(product44_image1)
  db.session.add(product44_image2)
  db.session.add(product44_image3)
  db.session.add(product45_image1)
  db.session.add(product45_image2)
  db.session.add(product45_image3)
  db.session.add(product46_image1)
  db.session.add(product46_image2)
  db.session.add(product47_image1)
  db.session.add(product47_image2)
  db.session.add(product47_image3)
  db.session.add(product48_image1)
  db.session.add(product48_image2)
  db.session.add(product48_image3)
  db.session.add(product49_image1)
  db.session.add(product49_image2)
  db.session.add(product50_image1)
  db.session.add(product50_image2)

  db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
