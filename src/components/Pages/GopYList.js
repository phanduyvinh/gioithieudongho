import React, {Component} from 'react';
import axios from 'axios';
import HeaderAdmin from '../Layout/HeaderAdmin';
import Topbar from '../Layout/Topbar';
import FooterAdmin from '../Layout/FooterAdmin';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
class GopYList extends Component {
	constructor(props){
        super(props)
        this.state = {
           gopy : []
        }
    }

    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/gopy/?_sort=id&_order=desc',
        data : null
      }).then(res =>{
        console.log(res);
        this.setState({
          gopy :res.data
        });
      }).catch( err =>{
        console.log(err);
      });
    }  

    onDelete = (id) =>{
       axios({
        method: 'DELETE',
        url :`http://localhost:3000/gopy/${id}`,
      }).then(res =>{
        var index = this.findIndex(this.state.gopy, id);
        if(index !== -1){
          this.state.gopy.splice(index, 1);
          this.setState({
            gopy :this.state.gopy
          });
        }
      });
    }
    findIndex =(gopy, id) =>{
        var {gopy} = this.state;
        var result = -1;
        gopy.forEach((gopy, index) =>{
            if(gopy.id === id){
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
                      <th className="text-center">Tên</th>
                      <th className="text-center">Mail</th>
                      <th className="text-center">Nội dung</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.gopy.map((gopy,index) => {
                                return < Item key={index} index ={index} gopy={gopy} onDelete={this.onDelete} />
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
    	var { gopy , index} = this.props;
        return (
          		  <tr>
                      <td>{index + 1}</td>
                      <td>{gopy.ten}</td>
                      <td className="text-center">{gopy.mail}</td>
                      <td>{gopy.noidung}</td>
                      
                      <td className="text-center">
                        <button type="button" onClick ={ () =>this.onDelete(gopy.id)} className="btn btn-danger ml-1">
							            	Xóa
                        </button>
                      </td>
                </tr>

        );
    }
}

export default GopYList;