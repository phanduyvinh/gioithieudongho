import React, {Component} from 'react';
import axios from 'axios';
import HeaderAdmin from '../Layout/HeaderAdmin';
import Topbar from '../Layout/Topbar';
import FooterAdmin from '../Layout/FooterAdmin';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
class ProductList extends Component {
	constructor(props){
        super(props)
        this.state = {
           products : [],
           keyword : '',
        }
    }

    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/products/?_sort=id&_order=desc',
        data : null
      }).then(res =>{
        console.log(res);
        this.setState({
          products :res.data
        });
      }).catch( err =>{
        console.log(err);
      });
    }  

    onDelete = (id) =>{
      var {products} = this.state;
       axios({
        method: 'DELETE',
        url :`http://localhost:3000/products/${id}`,
        data : null
      }).then(res =>{
            var index = this.findIndex(products, id);
            if(index !== -1){
              products.splice(index, 1);
              this.setState({
                products :products
              });
            }
        });
    }
    findIndex =(products, id) =>{
        var {products} = this.state;
        var result = -1;
        products.forEach((product, index) =>{
            if(product.id === id){
                result =index;
            }
        });
        return result;
    }
    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }



 render() {

    if(sessionStorage.getItem('login')){
  	return (
      <div>
              <div id="wrapper">

                      <HeaderAdmin/>

                <div id="content-wrapper" className="d-flex flex-column">
                  <div id="content">
                      <Topbar/>

                    <div className="container-fluid">
                    <table className="table table-bordered table-hover mt-5 ml-1">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên Sản Phẩm</th>
                      <th className="text-center">Thương hiệu</th>
                      <th className="text-center">Hình ảnh</th>
                      <th className="text-center">Model</th>
                      <th className="text-center">Tình Trạng</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map((product,index) => {
                                return < Item key={index} index ={index} product={product} onDelete={this.onDelete} />
                        })}
                  </tbody>
            </table>
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

class Item extends Component {
	onDelete = (id) =>{
		if (confirm('bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
         this.props.onDelete(id);
      }
	}
    render() {
    	var { product , index} = this.props;
        return (
          		  <tr>
                      <td>{index + 1}</td>
                      <td>{product.tensp}</td>
                      <td className="text-center">{product.thuonghieu}</td>
                      <td className="text-center"><img alt="anh" src={product.hinhanh} height="80" width="80" className="list-img"/></td>
                      <td>{product.model}</td>
                      <td className="text-center">
                        <span className={ product.tinhtranghang === true ? 'badge badge-success' : 'badge badge-danger'}>
                        	{ product.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}
                        </span>
                      </td>
                      <td className="text-center">
        				       
                        <NavLink to={`/products/${this.props.product.id}/edit`}><button type="button" className="btn btn-success ml-1">Sửa</button></NavLink>
                        <button type="button" onClick ={ () =>this.onDelete(product.id)} className="btn btn-danger ml-1">
							            	Xóa
                        </button>
                      </td>
                </tr>

        );
    }
}

export default ProductList;