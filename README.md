# Welcome to Anya!

<img src="https://static.tvtropes.org/pmwiki/pub/images/anya_happy.png" width=180px height=180px></img>

Our Live Site: [Anya](https://anya-etsy.onrender.com/)

Anya is a full-stack e-commerce clone of [Etsy](https://www.etsy.com/) with a holiday theme. It is a collaborative project built by (A) Aijia Wang, (N) Nannan Zhang, (Y) Yasha Yang and (A) Andrea Wu, hence the name "Anya". Users can browse a variety of holiday items. Users can create their own product listings and manage them (edit/ delete) in Store Manager. Users can add items to cart, edit/ remove items in their cart and check out. Users can also leave reviews on products that they didn't list, and manage their reviews in the profile dropdown menu. 


## Languages, Frameworks, Platforms and Libraries

### Languages
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Backend
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-100000?style=for-the-badge&logo=sql&logoColor=BA1212&labelColor=AD0000&color=A90000) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Hosting
![Render](https://img.shields.io/badge/Render-12100E?style=for-the-badge&logo=Render)

## Wiki Links:
* [Anya Wiki](https://github.com/andreazwu/anya-etsy/wiki)
* [Database Schema](https://github.com/andreazwu/anya-etsy/wiki/Database-Schema)
* [Features List](https://github.com/andreazwu/anya-etsy/wiki/Feature-List)
* [User Stories](https://github.com/andreazwu/anya-etsy/wiki/User-Stories)
* [Frontend Routes](https://github.com/andreazwu/anya-etsy/wiki/Frontend-Routes)
* [Backend Routes](https://github.com/andreazwu/anya-etsy/wiki/Backend-Routes)

## Landing Page
![image](https://user-images.githubusercontent.com/17817050/202823155-460deba0-da4d-46af-a1aa-6309e55f7003.png)

## Sign In/ Sign Up Modal
![image](https://user-images.githubusercontent.com/17817050/202824213-0894a618-1ce7-4f50-822f-f27ff93a8ce1.png)
![image](https://user-images.githubusercontent.com/17817050/202824234-8f1c4ff9-a107-4f49-8ead-be7e101bdbfd.png)


## Profile Menu
![image](https://user-images.githubusercontent.com/17817050/202823104-934e3468-4d85-47cf-a6ac-40e57bcf8840.png)

## Recommend Random Product by Category
![image](https://user-images.githubusercontent.com/17817050/202823266-43a96420-f8d2-4264-a487-8656cf4d365d.png)

## Search Products by Keywords
![image](https://user-images.githubusercontent.com/17817050/202823327-60cc7a48-ca9a-4a7a-9f17-d0ee6e8f71a1.png)


## View Product Details
![image](https://user-images.githubusercontent.com/17817050/202823821-86dc1659-2146-44c1-9d8c-dd555be30ed7.png)


## Add New Products and Upload Images
![image](https://user-images.githubusercontent.com/17817050/202824507-ac681031-86bb-419d-a758-dcfe36c3a592.png)
![image](https://user-images.githubusercontent.com/17817050/202824554-ba64d20d-cf56-4f71-9ced-8604b1344ea9.png)


## Shop Manager
![image](https://user-images.githubusercontent.com/17817050/202823981-581e9534-7243-43fb-a73d-89d419896969.png)

## Shopping Cart
![image](https://user-images.githubusercontent.com/17817050/202861268-058568fa-92cf-42d7-a9b1-37c4693d9968.png)


## Add Reviews
![image](https://user-images.githubusercontent.com/17817050/202824090-f9137b72-2b08-4200-9ae2-7758394720c9.png)


## Manage My Reviews
![image](https://user-images.githubusercontent.com/17817050/202824412-188642ee-7a47-479a-9422-b59f5fa6df32.png)


## Steps to clone locally:
1. Clone this repository:
```bash
git clone [https://github.com/andreazwu/anya-etsy.git]
```

2. Install backend dependencies:

```bash
pipenv install -r requirements.txt
```

3. Create a `.env` file based on the example with proper settings for development environment:
```
SECRET_KEY=INSERT_SECRET_KEY_HERE
DATABASE_URL=sqlite:///dev.db
```

4. Start pipenv, migrate database, seed database, and run Flask app:

```bash
pipenv shell
flask db upgrade
flask seed all
flask run
```

5. Install frontend dependencies:

```bash
cd react-app/
npm install
npm start
```

6. Navigate to [localhost:3000](http://localhost:3000)



## Our Contact Info:

ANYA - (A)ijia, (N)annan, (Y)asha, (A)ndrea

### Aijia Wang

[LinkedIn](https://www.linkedin.com/in/aijia-wang-b18726131/) || [GitHub](https://github.com/wangaijia618)

### Nannan Zhang

[LinkedIn](https://www.linkedin.com/in/nannan-zhang-2333b021b/) || [GitHub](https://github.com/codeznn)

### Yasha Yang

[LinkedIn](https://www.linkedin.com/in/yashayang/) || [GitHub](https://github.com/yashayang)

### Andrea Wu

[LinkedIn](https://www.linkedin.com/in/andreazwu/) || [GitHub](https://github.com/andreazwu)

