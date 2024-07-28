import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_about">
              <h1 className="footer-about-logo">DinhPhongShop</h1>
              <ul>
                <li>Họ tên: TRần Đình Phong</li>
                <li>MSSV: 20036451</li>
                <li>Email: dinhphongdev@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to={""}>Liên hệ</Link>
                </li>
                <li>
                  <Link to={""}>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to={""}>Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to={""}>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to={""}>Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_widget">
              <h6>Khuyến mãi & ưu đãi</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Email"/>
                  <button type="submit" className="button-submit">Đăng ký</button>
                </div>
                <div className="footer_widget_social">
                  <Link to={"https://facebook.com/dinhphongdev"}>
                    <AiOutlineFacebook/>
                  </Link>
                  <Link>
                    <AiOutlineInstagram/>
                  </Link>
                  <Link to={"https://www.linkedin.com/in/trandinhphongdev/"}>
                    <AiOutlineLinkedin/>
                  </Link>
                  <Link to={"https://github.com/Dinhphongiuh"}>
                    <AiOutlineGithub/>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default memo(Footer);
