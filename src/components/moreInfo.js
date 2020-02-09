import React from 'react';

// components
import Block from './block';
import TitledContainer from './titledContainer';

const MoreInfo = () => (
  <Block id="moreInfo">
    <TitledContainer title="想更瞭解我們嗎？">
      <div className="row justify-content-center">
        <div className="col-12 moreInfo_wrapper">
          您可以看看
          <a className="moreInfo_link" href="/">
            常見問題
          </a>
          或者直接
          <a className="moreInfo_link" href="/">
            線上洽詢
          </a>
          ，會有親切的客服人員回答您的問題，
          也可以透過社群網站隨時關注我們的動態。
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 moreInfo_social">
          <a href="/">
            <img
              src="https://5xruby.tw/assets/images/index/icon/icon-fb-2f24e7a0.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://5xruby.tw/assets/images/index/icon/icon-twitter-89f8d087.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </TitledContainer>
  </Block>
);

export default MoreInfo;
