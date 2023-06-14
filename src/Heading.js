
import { useState } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";

function Heading() {
  const [isMode, setIsMode] = useState(false);
  const [Text, setText] = useState("Dark Mode");
  const navigate = useNavigate()

  const handleDarkModeClick = () => {

    isMode === true ? setText("Dark Mode") : setText("Light Mode");
    const storeMode = !isMode;
    setIsMode(storeMode);
  }
  
  return (

    <div className={`main ${isMode ? "dark" : "light"}`}>
      <div className={`main-line ${isMode ? "line" : "main-line"}`}>
        <h1 className="App">Library</h1>
        <div className="Image" style={{ paddingTop: 30 }}>
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/quickview-icon.svg"
            style={{ width: 20, height: 20, padding: 12 }}
            alt="Icon 1"
          />
          <h1>MyBooks</h1>
        </div>
        <div className="Image" style={{ paddingTop: 70 }}>
       
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-round-line-icon.svg"
            style={{ width: 20, height: 20, padding: 12 }}  
            alt="Icon 2"
          />
             <h1 className="names">
             <button onClick={()=> navigate('/text')}>  Add book </button>
             </h1>
            
          
          <Outlet />
        </div>
        <h3 style={{ paddingTop: 30 }}>Setting</h3>
        <div className="Image">
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/colors-icon.svg"
            style={{ width: 20, height: 20, padding: 12, color: "green" }}
            alt="Icon 3"
            onClick={(e) => handleDarkModeClick(e)}
          />
          <h1>{Text}</h1>
        </div>
      </div>
      <div className={`main2 ${isMode ? "main2-line" : "main2"}`}>
        <div style={{ display: "flex" }}>
          <h2 style={{ paddingLeft: 30 }}>Book Laibrary</h2>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32XIgL0SPSVbqNMg08qmQU0B4pBTtAbSmauYxnVx-9Q&s"
            className="search"
            alt="Icon 3"
          />
          <input
            type="text"
            placeholder="Search name..... "
            style={{ width: 250, height: 20, marginTop: 30, marginLeft: 10 }}
          />
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/add-category-icon.svg"
            style={{
              width: 20,
              height: 20,
              paddingLeft: 30,
              paddingTop: 33,
              color: "white",
            }}
            alt="Icon 3"
          />
        </div>
        <p className={`laibrery ${isMode ? "laibrery-line" : "laibrery"}`}></p>
        <div className="pic-box">
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://m.media-amazon.com/images/I/61P3-A4ZMDL.jpg"
            />
            <h1>The world of ice and fire</h1>
            <p>George R.R.martin</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://m.media-amazon.com/images/I/51DwdQAmRJL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://m.media-amazon.com/images/I/41FiA0JirVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://cloudfront.penguin.co.in/wp-content/uploads/sites/2/2022/08/9789815017076.jpg"
            />
            <h1>Power of habit</h1>
            <p>Charles duhigg</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://m.media-amazon.com/images/I/41hvFIokIaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <h1>Wild wisdom</h1>
            <p>neil</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://m.media-amazon.com/images/I/51lM5Vo364L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <h1>The sky at night</h1>
            <p>Chris and paul</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://books.google.co.in/books/publisher/content?id=aA_nDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1WiNDDV6WjfKjK6hKfx0quq4Ey1w&w=1280"
            />
            <h1>Into thin air</h1>
            <p>jhon kaukaure</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://www.jms-books.com/images/paintanewscene.jpg"
            />
            <h1>Humans</h1>
            <p>Brandon stanton</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://m.media-amazon.com/images/I/512hoUudURL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <h1>Wonder of the world</h1>
            <p>Lonely plant</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348762483i/7662095.jpg"
            />
            <h1>paint a new scene</h1>
            <p>Dare</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602570691i/53138095.jpg"
            />
            <h1>Along the enchanted way</h1>
            <p>William</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
          <div classname="box">
          <span className="persent">72%</span>
            <span className="name">fiction</span>
            <img
              className="image"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1Bb45xqIZTgIfnq7QCZj3ttxmJ_D2ZtUZ35MAMNLzYEutSY2Z3mT6GUeDROzCkVAqaYJ7LTKw8gPrAnd22I9j-YOvUNRr0ksHldSm3G21fYfVlGCtGV4R3g"
            />
            <h1>Faith</h1>
            <p>David</p>
          </div>
        </div>
      </div>
    </div>
  );

    
}

export default Heading;
