import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HeaderAdmin from '../Layout/HeaderAdmin';
import Topbar from '../Layout/Topbar';
import FooterAdmin from '../Layout/FooterAdmin';
import axios from 'axios';

class admin extends Component {
  constructor(props){
    super(props)
    this.state = {
    products:[],
    category:[],
    gopy: []
    }
}
componentDidMount = () => {
  axios({
    method: 'GET',
url: "http://localhost:3000/products",
    data:null
  }).then(res => {
    console.log(res);
    this.setState ({
      products : res.data
    });
  })
  .catch( error => {
    console.log(error);
  });
  axios({
    method: 'GET',
url: "http://localhost:3000/categories",
    data:null
  }).then(res => {
    console.log(res);
    this.setState ({
      category : res.data
    });
  })
  .catch( error => {
    console.log(error);
  });
  axios({
    method: 'GET',
url: "http://localhost:3000/gopy",
    data:null
  }).then(res => {
    console.log(res);
    this.setState ({
      gopy : res.data
    });
  })
  .catch( error => {
    console.log(error);
  });
}
    render() {
      var product = this.state.products.length;
      var category = this.state.category.length;
      var gopy = this.state.gopy.length;
      if(sessionStorage.getItem('login')){
        return (
          <div>
            <div id="wrapper">

                    <HeaderAdmin/>

              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar/>

                  <div className="container-fluid">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                      Thống kê
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Sản phẩm: {product}</a>
                    <a href="#" className="list-group-item list-group-item-action">Danh mục: {category}</a>
                    <a href="#" className="list-group-item list-group-item-action">Góp ý: {gopy}</a>
                  </div>
                  </div>

                </div>
                    <FooterAdmin/>
              </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up" />
            </a>
          </div>
        );
      }else{
        return <h3 className="text-center text-danger">Bạn không có quyền truy cập trang này!</h3>
      }
        
    }
}

export default admin;