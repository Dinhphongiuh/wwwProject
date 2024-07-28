import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
// import cart1 from '../../../asset/users/images/hero/herobanner.png';
import cart1 from "../../../asset/users/images/categories/giay1.jpg";
import cart2 from "../../../asset/users/images/categories/giay2.jpeg";
import cart3 from "../../../asset/users/images/categories/giay3.jpeg";
import feature1 from "../../../asset/users/images/categories/giay2.jpeg";
import "./style.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import {formatter} from '../../../utils/fomatter';
import { Link } from "react-router-dom";

const homePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const sliderItem = [
    {
      bgImg: cart1,
      name: "Thể thao"
    },
    {
      bgImg: cart2,
      name: "Thể thao"
    },
    {
      bgImg: cart3,
      name: "Thể thao"
    },
    {
      bgImg: cart1,
      name: "Thể thao"
    },
    {
      bgImg: cart3,
      name: "Thể thao"
    },
    {
      bgImg: cart3,
      name: "Thể thao"
    },
  ]

  const featproducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: feature1,
          name: "Giày 1",
          price: 200000
        },
        {
          img: feature1,
          name: "Giày 2",
          price: 150000
        },
        {
          img: feature1,
          name: "Giày 1",
          price: 200000
        },
        {
          img: feature1,
          name: "Giày 2",
          price: 150000
        },
        {
          img: feature1,
          name: "Giày 1",
          price: 200000
        },
        {
          img: feature1,
          name: "Giày 2",
          price: 150000
        }
      ]
    },
    sport: {
      title: "Thể thao",
      products: [
        {
          img: feature1,
          name: "Giày 1",
          price: 200000
        },
        {
          img: feature1,
          name: "Giày 2",
          price: 100000
        }
      ]
    },
    sport1: {
      title: "Thể thao",
      products: [
        {
          img: feature1,
          name: "Giày 1",
          price: 200000
        },
        {
          img: feature1,
          name: "Giày 2",
          price: 100000
        }
      ]
    }
  }

  const renderFeatiredProducts = (data) => {
    const tablist = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tablist.push(<Tab key={index}>{data[key].title}</Tab>)
  
      const tabpanel = [];
      data[key].products.forEach((item, j) => {
        tabpanel.push(
          <div key={j} className="col-lg-3">
            <div className="featured_item">
              <div className="featured_item_pic"
                style={{
                  backgroundImage: `url(${item.img})`
                }}
              >
                <ul className="featured_item_hover">
                  <li>
                    <AiOutlineEye></AiOutlineEye>
                  </li>
                  <li>
                    <AiOutlineShoppingCart/>
                  </li>
                </ul>
              </div>
              <div className="featured_item_text">
                <h6>
                  <Link to={""}>{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
        )
      })
      tabPanels.push(tabpanel);
   });


    return (
      <Tabs>
        <TabList>
          {tablist}
        </TabList>

        {
          tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">
              {item}
            </div>
          </TabPanel>
          ))
        }
        
      </Tabs>
    )
  }

  return (
    <div style={{marginTop: 30}}>
      {/*CategoriesBegin*/}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItem.map((item, key) => (
            <div className="categories_slider_item" 
              style={{backgroundImage: `url(${item.bgImg})`}}
              key={key}
              >
                <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Featured */}
      <div className="container">
        <div className="Featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
            {renderFeatiredProducts(featproducts)}
        </div>
      </div>
    </div>
  )
};

export default memo(homePage);
