import React, {useEffect, useRef, useState} from 'react';
import classes from './Folder.module.css';
import StarIcon from "@/app/icons/StarIcon";
import LinkIcon from "@/app/icons/LinkIcon";
import Animate from "@/components/Animate";
import gsap from "gsap";
import useMediaQuery from "@/hooks/useMediaQuery";
import ImageWithFallback from "@/components/ImageWithFallback";

const tabs = [
  {id: 0, title: 'Digital Menu', content: 'Interactive and customizable menus via QR code. By scanning\n' +
      'a QR code with their smartphones, patrons can access up-to-date menus that can be easily adjusted for dietary preferences, allergies, or specific tastes. This technology allows restaurants\n' +
      'to update their menus instantly, add engaging multimedia content. Additionally, the need for printed menus.'},
  {id: 1, title: 'Easy Payment', content: 'Integration with payment systems for convenient payment\n' +
      'is essential in modern business operations. It involves connecting your platform with various payment gateways and processors\n' +
      'to streamline transactions for customers.'},
  {id: 2, title: 'Order Management', content: 'Efficient order processing and tracking are critical components\n' +
      'of a successful e-commerce operation. Streamlining these processes ensures timely delivery, enhances customer satisfaction, and optimizes operational efficiency.'},
  {id: 3, title: 'Analytics', content: 'Efficient order processing and tracking are critical components\n' +
      'of a successful e-commerce operation. Streamlining these processes ensures timely delivery, enhances customer satisfaction, and optimizes operational efficiency.'},
  {id: 4, title: 'Customer Reviews', content: 'The ability to leave reviews about dishes is a powerful feature for any food-related business, whether it\'s a restaurant, a café, or a meal delivery service. It not only enhances customer engagement but also provides valuable feedback for improving the dining experience.'},
];

function Folder(props) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const contentRef = useRef(null);
  const isMob = useMediaQuery(false, '(max-width: 1000px)');


  useEffect(() => {
    if(isMob){
      return
    }

    gsap.fromTo(
      contentRef.current,
      {opacity: 0, y: 0},
      {opacity: 1, y: 0, duration: 0.5}
    );
  }, [activeTab]);

  const colors = [
    '#2B00A5',
    '#fff',
    '#EBF677',
    '#FFCFDB',
    '#E46239',
  ]

  const textColors = [
    '#fff',
    '#000',
    '#000',
    '#000',
    '#000',
  ]

  return (
    <div className={'container'}>
      <div className={classes.main}>
        <Animate className="subtitle">
          We are <span className={'font2'}>changing</span> the way <div className="tag flex items-center">
          <span style={{transform: 'translateY(5px)'}}><StarIcon/></span>
          people order
        </div> <br/>
          and <span className={'underline'}>have everything</span> your <span className={'font2'}>restaurant business needs.</span>
        </Animate>
        <Animate className={'btn btn-black-outline ' + classes.btn}>
          <span>Get started</span>
          <LinkIcon/>
        </Animate>

        <Animate>

          <div className={classes.tabs}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                style={{background: colors[index], color: textColors[index], zIndex: 50 - index}}
                className={`${classes.tabButton} ${activeTab === tab.id ? classes.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div ref={contentRef} className={classes.content}
               style={{background: colors[activeTab], color: textColors[activeTab]}}>
            <div>
              <h2 className={classes.folderTitle}>{tabs.find((tab) => tab.id === activeTab).title}</h2>
              { (isMob && activeTab < 4) && (
                <div className={classes.imageBox}>
                    <ImageWithFallback src={`/images/folder/img_${activeTab}.jpg`} className={classes.image} alt=""/>
                </div>
              )}
              <p className={classes.folterText}>{tabs.find((tab) => tab.id === activeTab).content}</p>
              <button className={'btn btn-white ' + classes.tryNowButton}>Try Now <LinkIcon/></button>
            </div>
            {(!isMob && activeTab < 4) &&  (
              <div className={classes.imageBox}>
                <ImageWithFallback src={`/images/folder/img_${activeTab}.jpg`} className={classes.image} alt=""/>
              </div>
            )}

          </div>
        </Animate>
      </div>
    </div>
  )
    ;
}

export default Folder;