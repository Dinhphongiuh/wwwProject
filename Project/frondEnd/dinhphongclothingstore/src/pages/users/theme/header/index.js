import { memo, useEffect, useState } from "react";
import "./style.scss";
import {
  AiOutlineAccountBook,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { formatter } from "../../../../utils/fomatter";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname <= 1);
  const [isShowCategories, setShowCategories] = useState(isHomePage);
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCT,
    },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.HOME,
      isShowSubmenu: false,
      child: [
        {
          name: "Thể thao",
          path: "",
        },
        {
          name: "Tiệc",
          path: "",
        },
        {
          name: "Tiệc",
          path: "",
        },
      ],
    },
    {
      name: "BÀI VIẾT",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.HOME,
    },
  ]);

  const categories = [
    "Thể thao", 
    "Thể thao", 
    "Thể thao", 
  ]

  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHomePage(isHome);
    setShowCategories(isHome);
  }, [location])
 
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiOutlineMail></AiOutlineMail>
                  hello@gmail.com
                </li>
                <li>miễn phí ship đơn từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <AiOutlineLink />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
                <li>
                  <Link to={ROUTERS.USER.HOME}>
                    <AiOutlineUserAdd />
                  </Link>
                  <span>Đăng ký</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="header_logo">
              <h1>DinhPhongShop</h1>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : null}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={""}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formatter(10000)}</span>
              </div>
              <ul>
                <li>
                  <Link to={"#"}>
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories">
            <div className="hero_categories_all" onClick={() => setShowCategories(prev => !prev)}>
              <AiOutlineMenu></AiOutlineMenu>
              Danh sách sản phẩm
            </div>
            {isShowCategories && 
              <ul className={isShowCategories ? "" : "hidden"}>
                {categories.map((category, key) => (
                  <li key={key}>
                    <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                  </li>
                ))}
              </ul>
            }
          </div>
          <div className="col-lg-9 hero_search_container">
              <div className="hero_search">
                <div className="hero_search_form">
                  <form>
                    <input type="text" name="" value={""} placeholder="Tìm kiếm"></input>
                    <button type="submit">Tìm kiếm</button>
                  </form>
                </div>
                <div className="hero_search_phone">
                  <div className="hero_search_phone_icon">
                    <AiOutlinePhone></AiOutlinePhone>
                  </div>
                  <div className="hero_search_phone_text">
                    <p>0339.122.327</p>
                    <span>Hổ trợ 24/7</span>
                  </div>
                </div>
              </div>
              {/*  */}
              {isHomePage && (
                <div className="hero_item">
                  <div className="hero_item_text">
                    <span>SHOE</span>
                    <h2>
                      Giày đẹp
                      <br/>
                      100% {':))'}
                    </h2>
                    <p>Miễn phí giao hàng tận nơi</p>
                    <Link to={""} className="primary-btn">Mua ngay</Link>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
