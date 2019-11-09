import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class GioiThieu extends Component {
    render() {
        return (
            <div className="container-fluid">
               
                <Header />
                <br></br><br></br><br></br><br></br><br></br><br></br>
                 <div className="container" style={{fontFamily: 'arial'}}>
            <div className="row">
                <br /><h4 style={{color: 'red'}}>Giới thiệu chung</h4><br />
                <p style={{textAlign: 'justify'}}>Trang sức cao cấp Simple tự hào là thương hiệu Quốc gia Việt Nam. Với hệ thống phân phối trải dài từ Bắc vào Nam, sự đa dạng về chủng loại, độc đáo về kiểu dáng, dẫn đầu về xu hướng đã đang và sẽ chiếm được sự tin tưởng và yêu mến của khách hàng trên toàn quốc.<br /><br />
                Nét tinh xảo lấp lánh của các sản phẩm được chế tác tại Simple dưới bàn tay của người thợ kim hoàn Việt Nam tài ba, hay vẻ đẹp rạng ngời đa sắc của các sản phẩm được Simple sản xuất theo công nghệ tiên tiến hiện đại và kiểu dáng thời trang quốc tế. Sản phẩm trang sức cao cấp Simple sẽ làm thăng hoa nét duyên dáng, vẻ quý phái, sự lịch lãm cho quý khách hàng, dù ở bất cứ nơi đâu!M<br /><br />
                Các dòng sản phẩm chính của Trang sức cao cấp Simple đã tạo được dấu ấn đối với đông đảo Quý khách hàng và đã trở thành những thương hiệu nổi tiếng như: Wedding Land, Lộc Phát Tài…<br /><br />
                Không chỉ đem đến sự hài lòng cho Quý khách hàng khó tính nhất, <b>Trang sức Simple</b> còn mang đến những chính sách hậu mãi tốt nhất.</p>
                <p><b>Công ty Cổ phần Tập đoàn Vàng bạc Đá quý Simple<br /><br />
                    Simple Gold &amp; Gems Group joint stock company (Simple JSC)<br /><br />
                    Tòa nhà Simple TOWER, số 33 Xô Viết Nghệ Tĩnh, P. Hòa Cường Nam, Q. Hải Châu, TP. Đà Nẵng<br /><br />
                    Tel: +84 24 3366 2288 - Fax: +84 24 2220 6686<br /><br />
                    Mã số doanh nghiệp: 0100365621</b></p>
            </div>
            </div>
            <Footer />
            </div>
        
        );
    }
}

export default GioiThieu;