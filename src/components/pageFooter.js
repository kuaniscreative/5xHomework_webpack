import React from 'react'

const PageFooter = (props) => {
    const { navItem, press } = props.data || {};
    return ( 
        <footer className='container-fluid' id='pageFooter'>
            <div className="row justify-content-center">
                <div className="col-10 col-sm-10 col-md-3">
                    {
                        press.map((info, i) => {
                            return (
                                <div className="press_imgWrapper" key={i}>
                                    <img src={info.img_url} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-10 col-sm-10 col-md-6 col-lg-7 containter">
                    <div className="row pageFooter_section">
                        <div className="col-12 pageFooter_nav">
                            {
                                navItem.map((item, i) => {
                                    return (
                                        <a href={item.href} className="pageFooter_navItem" key={i}>{item.name}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row pageFooter_section">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 pageFooter_contactInfo">
                            <p className='pageFooter_contactHighlght'>02-2331-5247</p>
                            <p className='pageFooter_contactSecondary'>10046 台北市中正區衡陽路 7 號 5 樓</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 pageFooter_contactInfo">
                            <p className='pageFooter_contactHighlght'>hi@5xruby.tw</p>
                            <p className='pageFooter_contactSecondary'>Mon - Fri / 09:30 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pageFooter_copyright justify-content-center">
                        <p className='col-12'>© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
                        <p className='col-12'>台北市短期補習班立案 第 7594 號</p>
                </div>
        </footer>
     );
}
 
export default PageFooter;