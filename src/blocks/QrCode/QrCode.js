import React from 'react';
import Animate from "@/components/Animate";
import classes from './QrCode.module.css';

function QrCode(props) {
  return (
    <div className={"container withArrow " + classes.main}>
      <div className={classes.grid}>
        <div>
          <Animate className="title">
            <span className={classes.titleInline}>QR Code for</span>
            <div className={'tag ' + classes.tag} style={{paddingTop: '2px'}}>
              <svg style={{paddingTop: '10px'}} width="34" height="34" viewBox="0 0 34 34" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 0L18.6806 10.7278L25.5 2.27757L21.5915 12.4085L31.7224 8.5L23.2722 15.3194L34 17L23.2722 18.6806L31.7224 25.5L21.5915 21.5915L25.5 31.7224L18.6806 23.2722L17 34L15.3194 23.2722L8.5 31.7224L12.4085 21.5915L2.27757 25.5L10.7278 18.6806L0 17L10.7278 15.3194L2.27757 8.5L12.4085 12.4085L8.5 2.27757L15.3194 10.7278L17 0Z"
                  fill="black"/>
              </svg>
              <span style={{lineHeight: 1}}>easy access</span>
            </div>
          </Animate>
          <div className={classes.text}>
            <Animate>

              With FoodMoodOTG, restaurant and cafe owners can easily generate customized QR codes. These codes can be
              placed
              on tables, allowing customers to access the menu instantly by scanning the code with their smartphones. It
              simplifies the ordering process, enhances customer experience, and reduces the need for physical menus.
            </Animate>
          </div>

      </div>
      <div>
      <Animate>
            <img className={classes.img} src="/images/qrCodeImage.jpg" alt=""/>
          </Animate>
        </div>
      </div>


    </div>
  );
}

export default QrCode;
