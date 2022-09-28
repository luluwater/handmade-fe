<h1 align="center">HANDMADE</h1>

<p align="center">
  <img width="350" src="https://github.com/angushyx/handmade/blob/main/HANDMADE_LOGO.png?raw=true">
</p>

<h4 align="center">
 HANDMADE 是使用 React 框架的單頁應用（SPA）網站，整合了大台北地區手作課程的店家資訊
</h4>
  <br>
 <br> 

<!-- #### 🔗Website URL: <a href="https://nextmeal.herokuapp.com/#/"><strong>handmade</strong></a>

#### Test account and password: test@test.com/testtest -->

## Table of Contents

### [主要功能](#main-features)

#### [前端技術](#Frontend-technique)

- [React ( hook )](#react-hook)
- [React Router](#react-router)
- [Redux (redux-toolkit)](#redux-redux-toolkit)
- [RTK Query (redux-toolkit query)](#rtk-query)
- [sass](#sass)
- [Bootstrap](#Bootstrap)
- [Cloud Services\*not yet](#cloud-services-1)

#### [後端技術](#Backend-technique)

- [Node.js](#Node.js)

#### [資料庫](#database)

- [MySQL](#MySQL)

#### [版本控制](#version-control)

- [Git/Github](#git)

#### [第三方套件 & API](#third-party-library-1)

- [Frontend](#Frontend-Third-Party)
- [Backend](#Backend-Third-Party)

#### [Contact us](#contact)

## Main Features

- 使用者可以選擇使用帳號或是 google 登入
<!-- - User authentication with Json Web Token.
- Use socket.io for real time co-editing.
- Supports English and Chinese.
- Setup CICD pipeline with cloudbuild cloud pub/sub.
- Differentiate every user with different colors in editor.
- Supports mobile devices so you can update content anytime anywhere.
- Only host can grant or remove access to your documents.
- Supports exporting your documents as PDF files.
- Hosting images on firebase storage. -->

### 第三方套件 & API

#### Frontend

- [leaflet](https://leafletjs.com/): 將捷運與附近商家整合
- [socket.io](https://socket.io/): 建立聊天室
- [CKeditor](https://ckeditor.com/ckeditor-5/): 使用者可以分享部落格 
- [sweetalert2](https://sweetalert2.github.io/#input-types): 客製化 pop 訊息 
- [formik & yup ](https://formik.org/docs/guides/validation): 表單驗證 
- [swiperjs](https://swiperjs.com/demos): 製作輪播動畫
- [moment.js](https://github.com/moment/moment/): 轉換日期格式
- [Google calendar API](https://developers.google.com/calendar/api) 將預約手作課程插入 Google 行事曆中
- [Gmail Api](https://developers.google.com/gmail/api) 送出驗證信以及訂單成立通知

#### Backend

<!-- - Using [mocha](https://github.com/mochajs/mocha) / [chai](https://github.com/chaijs/chai) / [sinon](https://github.com/sinonjs/sinon) / [supertest](https://github.com/visionmedia/supertest) for Unit Testing(Model / Request) and [Travis CI](https://travis-ci.org/) for continuous integration
- Using [NewebPay](https://www.newebpay.com/) as the third party payment API for user to pay subscription fee with credit card online
- Using [PostGIS](https://github.com/postgis/postgis) to help calculate geodesic distance
- Using [express-validator](https://github.com/express-validator/express-validator) for data validation
- Using [JSON Web Tokens](https://github.com/auth0/node-jsonwebtoken) to add token based authentication to RESTful API
- Using [nodemailer](https://github.com/nodemailer/nodemailer) to send email with Node.js after user sign up or place an order
- Using [Multer](https://github.com/expressjs/multer) 、[imgur-node-api](https://github.com/jamiees2/imgur-node-api) for file upload feature
- Using [bcryptjs](https://github.com/dcodeIO/bcrypt.js) to hash and check password
- Using [dotenv](https://github.com/motdotla/dotenv) to help load the environment variables saved in .env file
- Using [node-cron](https://github.com/node-cron/node-cron) as the task scheduler to automatically update order and meal data in the database
- Using [moment.js](https://github.com/moment/moment/) to parse date and time that are consistent with front-end and database -->

### 資料夾分配

#### Front-end

| Folder      | Description                |
| ----------- | -------------------------- |
| components/ | UI 元件                    |
| slices /    | action 及 reducer          |
| services /  | 整合 query 後端資料的 apis |
| store/store | 整合 slices 及 apis        |
| hooks/      | Custom Hooks               |
| assets/     | 圖片、媒體檔案             |
| pages/      | 主要網站頁面               |
| styles/     | .css, .sass 檔             |
| utils/      | config 檔案                |

#### Back-end

<!-- | Folder      | Description     |
| ----------- | --------------- |
| components/ | UI 元件         |
| contexts/   | useContext 元件 |
| hooks/      | Custom Hooks    |
| images/     | 圖片、媒體檔案  |
| pages/      | 主要網站頁面    |
| styles/     | .css, .sass 檔  |
| utils/      | .js 檔案        | -->
