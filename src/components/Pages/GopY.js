import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class GopY extends Component {
	constructor(props){
        super(props);
        this.state = {
        category:[],
          id: "",
          ten: "",
          noidung: "",
          mail: ""
        }
    }
    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type =target.type;
      var value =target.value;
      this.setState({
        [name] : value,
      });
    }

    
    onSave =(e) =>{
      e.preventDefault();
      var { ten, noidung, mail} = this.state;
       var {history} = this.props;
         axios({
           method: 'POST',
           url :'http://localhost:3000/gopy',
           data : {
            ten: ten,
            noidung: noidung,
            mail: mail
           }
         }).then(res =>{
           history.push("/");
         });
       }
     
       componentDidMount = () => {
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
	  }
    onClear = () =>{
      this.setState({
            ten : '',
            noidung : '',
            mail : '',
      });
    }

    render() {
  	return (
        <div className="container-fluid">
        <Header />
    <div className="row row2">
        
        <div className="col-md-3">
            <h5>DANH MỤC SẢN PHẨM</h5>
            <ul>
            
            {this.state.category.map((category,index) => {
                return <li key={index}><Link to={`/danhmucsp/${category.id}`}>{category.tendm}</Link></li>
            })}
            
            </ul>
            <h5>ĐỐI TÁC, TÀI TRỢ</h5>
            <ul>
                <li><Link to="/">Kenh14</Link></li>
                <li><Link to="/">VTV</Link></li>
            </ul>
        </div>
        <div className="col-md-9">
        
        <div className="panel panel-warning col-md-8 mx-auto">
              <div className="panel-heading">
                <h3 className="panel-title mt-3 text-info">Gửi góp ý
                </h3>
              </div>

              <div className="panel-body">
                <form onSubmit = {this.onSave}>
                  <div className="form-group">
                    <label>Tên :</label>
                    <input type="text" name="ten" value ={this.state.ten} onChange ={this.onChange} className="form-control" />
                  </div>
                  
                  <div className="form-group">
                    <label>Mail :</label>
                    <input type="email" name="mail" value ={this.state.mail} onChange ={this.onChange} className="form-control" />
                  </div>
                 
                  <div className="form-group">
                    <label>Nội dung phản hồi :</label>
                    <textarea type="textarea" name="noidung" rows="5" value ={this.state.noidung} onChange ={this.onChange} className="form-control" />
                  </div>
                  <br />
                  <div className="text-center">
                    <button type="submit"  className="btn btn-primary">Gửi phản hồi</button>&nbsp;
                    <button type="button" onClick={this.onClear} className="btn btn-danger">Clear</button>
                  </div>
                </form>
                <Link to="/" className="btn btn-success">Trở lại</Link>
              </div>
            
    <hr></hr>
    </div>
    </div>
    <Footer />
    </div>
    </div>
       );
	}
}

export default GopY;