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

- 使用者可以選擇使用帳號或是 google 登入 User authentication with Json Web Token.
- Use socket.io for real time co-editing.
- Supports English and Chinese.
- Setup CICD pipeline with cloudbuild cloud pub/sub.
- Differentiate every user with different colors in editor.
- Supports mobile devices so you can update content anytime anywhere.
- Only host can grant or remove access to your documents.
- Supports exporting your documents as PDF files.
- Hosting images on firebase storage. 


#### [前端技術](#Frontend-technique)

- [React ( hook )](https://zh-hant.reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/en/main)
- [Redux (redux-toolkit)](https://redux-toolkit.js.org/)
- [RTK Query (redux-toolkit query)](https://redux-toolkit.js.org/rtk-query/overview)
- [sass](https://sass-lang.com/)
- [Bootstrap](https://react-bootstrap.github.io/)
<!-- - [Cloud Services\*not yet](#cloud-services-1) -->


#### [版本控制](#version-control)

- [Git/Github](https://git-scm.com/)



#### [第三方套件 & API](#third-party-library-1)


- [leaflet](https://leafletjs.com/): 將捷運與附近商家整合
- [socket.io](https://socket.io/): 即時聊天室
- [CKeditor](https://ckeditor.com/ckeditor-5/): 部落格新增與修改功能 
- [sweetalert2](https://sweetalert2.github.io/#input-types): 客製化 pop 訊息 
- [formik & yup ](https://formik.org/docs/guides/validation): 表單驗證 
- [swiperjs](https://swiperjs.com/demos): 輪播動畫
- [moment.js](https://github.com/moment/moment/): 轉換日期格式
- [Google calendar API](https://developers.google.com/calendar/api) 將預約手作課程加入個人 Google 行事曆中
- [Gmail Api](https://developers.google.com/gmail/api) 送出驗證信以及訂單成立通知



### [資料夾結構](#folder-structure)


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

#### [Contact us](#contact)

