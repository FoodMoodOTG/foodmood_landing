'use client'

import React from 'react';
import NewsBanner from "@/blocks/NewsBlocks/NewsBanner";
import Header from "@/blocks/Header/Header";
import clsx from "clsx";
import NewsItem from "@/blocks/NewsBlocks/NewsItem";
import Footer from "@/blocks/Footer/Footer";


function Card({classes, children, title}) {
  return (
    <div className={clsx(classes, 'border md:px-[28px] px-[22px] md:pt-[45px] pt-[30px] md:pb-[25px] pb-[20px] border-black rounded-[25px]')}>
      <div className={"md:text-[22px] text-[20px] font-medium mb-[10px]"}>{title}</div>
      <div className={'md:text-[22px] text-[20px]'}>
        {children}
      </div>
    </div>
  )
}

function Page(props) {

  const texts = [
    "Torquent quam dis sagittis lorem elit faucibus cubilia velit. Cursus cras massa pharetra id turpis nullam. Sit ante donec bibendum lorem eros luctus magna. Facilisis consectetur posuere mauris eu cursus? Tincidunt a nibh ornare venenatis sem libero ligula. In interdum nisi torquent ultrices neque egestas. Dictum magnis ultrices libero in neque.",
    "Etiam metus mollis mus gravida nisi enim. Egestas sodales feugiat dolor hac facilisis rutrum dolor. Risus posuere facilisi ornare convallis mus nulla? Lacus himenaeos arcu; neque proin ultrices et morbi. Orci taciti suspendisse volutpat conubia est. Vivamus himenaeos pharetra taciti platea habitant luctus. Velit leo tortor ultrices ridiculus quam neque. Feugiat cubilia inceptos vestibulum parturient natoque. Curae morbi ipsum arcu nam augue metus malesuada bibendum.",
    "Malesuada himenaeos eu tempor habitant nunc neque vel. Id hendrerit magna nullam tincidunt aptent amet vivamus. Aliquam proin consequat porttitor viverra penatibus diam efficitur velit. Cubilia ligula cursus condimentum sit ex quam magna lacinia. Tortor dictumst neque, curabitur purus commodo hendrerit. Quisque torquent erat dolor, donec facilisi molestie. Conubia mattis vivamus aptent eleifend accumsan; eu nisl. Id senectus pretium scelerisque conubia varius curae, pharetra faucibus ornare.",
  ]

  return (
    <div>
      <div className={"p-[10px]"}>
        <div className={'md:min-h-[650px] min-h-[280px] relative max-w-[1330px] px-[10px] mx-auto'}>
          <Header isWhite={true}/>

          <img src="/newsItem.jpg"
               className={"absolute rounded-[30px] border border-black top-0 left-0 w-full h-full object-cover"}
               alt=""/>
        </div>
      </div>

      <div className={"container !pt-[35px]"}>

        <div className={"flex justify-between items-center md:mt-0 mt-[-90px] relative z-[30]"}>
          <div
            className={"border border-black rounded-[80px] md:h-[58px] h-[30px] pt-[2px] md:px-[40px] md:ml-0 ml-[20px] bg-white px-[25px] md:text-[33px] text-[15px] w-fit"}>Topic
          </div>
          <div className={"text-[22px] text-right md:block hidden"}>~ 10 min</div>
        </div>

        <div className={"md:mt-[25px] mt-[35px]"}>
          <h2 className={"mainTitle md:max-w-[70%] md:mb-0 mb-[20px]"}>News Title “Description”</h2>

          <p className={'pb-[30px] md:text-[22px] text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className={'pb-[30px] md:text-[22px] text-[20px]'}>Lorem ipsum odor amet, consectetuer adipiscing elit. Ex malesuada netus sagittis lacus dapibus porttitor
            lectus imperdiet. Luctus sed nec gravida feugiat maximus ullamcorper consequat mi ornare. Primis ridiculus
            sem nisl bibendum primis velit maximus massa convallis. Potenti quis ipsum litora platea facilisi rhoncus
            quam fames. Suscipit dui dictum erat primis posuere praesent feugiat facilisis luctus. Sed nisi suscipit
            cubilia diam dapibus curae. Habitasse cubilia fringilla parturient dis eleifend. Auctor congue magna eget
            pellentesque placerat mi.</p>
          <img src="/newsItemImg.png"
               className={"border border-black md:mb-0 mb-[20px]  md:mt-[-80px] rounded-[25px] float-right ml-[20px]"}
               alt=""/>

          {texts.map(el => (
            <p key={el} className={"pb-[30px] md:text-[22px] text-[20px]"}>{el}</p>
          ))}

          <div className={'stars-strip my-[45px]'}></div>

          <div className={"md:text-[22px] text-[20px] md:text-left text-center md:mb-0 mb-[20px] grid md:grid-cols-2 gap-[40px]"}>
            <div>Lorem ipsum odor amet, consectetuer adipiscing elit.
              Ex malesuada netus sagittis lacus dapibus porttitor lectus imperdiet. Luctus sed nec gravida feugiat
              maximus ullamcorper consequat mi ornare. Primis ridiculus sem nisl bibendum primis velit maximus massa
              convallis. Potenti quis ipsum litora platea facilisi rhoncus quam fames. Suscipit dui dictum erat primis
              posuere praesent feugiat facilisis luctus. Sed nisi suscipit cubilia diam dapibus curae. Habitasse cubilia
              fringilla parturient dis eleifend. Auctor congue magna eget pellentesque placerat mi.
            </div>
            <div>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada netus sagittis lacus dapibus porttitor
              lectus imperdiet. Luctus sed nec gravida feugiat maximus ullamcorper consequat mi ornare. Primis ridiculus
              sem nisl bibendum primis velit maximus massa convallis. Potenti quis ipsum litora platea facilisi rhoncus
              quam fames. Suscipit dui dictum erat primis posuere praesent feugiat facilisis luctus. Sed nisi suscipit
              cubilia diam dapibus curae. Habitasse cubilia fringilla parturient dis eleifend. Auctor congue magna eget
              pellentesque placerat mi.
            </div>
          </div>
          <img src="/newsImg_2.jpg" className={"border md:block hidden border-black rounded-[25px] mt-[25px] mb-[18px]"} alt=""/>

          <div className={"grid md:grid-cols-[1fr_1fr_1.25fr] gap-[18px]"}>
            <Card classes={"bg-[#EBF677]"} title={'Lorem ipsum odor amet, consectetuer adipiscing elit.'}>
              <div>x malesuada netus sagittis lacus dapibus porttitor lectus imperdiet. Luctus sed nec gravida feugiat
                maximus ullamcorper consequat mi ornare.
              </div>
            </Card>
            <Card classes={"bg-[#77D0F6]"} title={'Lorem ipsum odor amet, consectetuer adipiscing elit.'}>
              <div>x malesuada netus sagittis lacus dapibus porttitor lectus imperdiet. Luctus sed nec gravida feugiat
                maximus ullamcorper consequat mi ornare.
              </div>
            </Card>
            <Card classes={"bg-[#FFCFDB]"} title={'Lorem ipsum odor amet, consectetuer adipiscing elit.'}>
              <div>
                Malesuada himenaeos eu tempor habitant nunc neque vel. Id hendrerit magna nullam tincidunt aptent amet
                vivamus. Aliquam proin consequat porttitor viverra penatibus diam efficitur velit. Cubilia ligula cursus
                condimentum sit ex quam magna lacinia.
              </div>
            </Card>
          </div>

          <div className={"md:space-y-[30px] space-y-[20px] md:text-[22px] text-[20px] mt-[45px]"}>
            <p>Torquent quam dis sagittis lorem elit faucibus cubilia velit. Cursus cras massa pharetra id turpis
              nullam.
              Sit ante donec bibendum lorem eros luctus magna. Facilisis consectetur posuere mauris eu cursus? Tincidunt
              a
              nibh ornare venenatis sem libero ligula. In interdum nisi torquent ultrices neque egestas. Dictum magnis
              ultrices libero in neque.
            </p>
            <p> Etiam metus mollis mus gravida nisi enim. Egestas sodales feugiat dolor hac facilisis rutrum dolor.
              Risus
              posuere facilisi ornare convallis mus nulla? Lacus himenaeos arcu; neque proin ultrices et morbi. Orci
              taciti suspendisse volutpat conubia est. Vivamus himenaeos pharetra taciti platea habitant luctus. Velit
              leo
              tortor ultrices ridiculus quam neque. Feugiat cubilia inceptos vestibulum parturient natoque. Curae morbi
              ipsum arcu nam augue metus malesuada bibendum.</p>
            <p>Malesuada himenaeos eu tempor habitant nunc neque vel. Id hendrerit magna nullam tincidunt aptent amet
              vivamus. Aliquam proin consequat porttitor viverra penatibus diam efficitur velit. Cubilia ligula cursus
              condimentum sit ex quam magna lacinia. Tortor dictumst neque, curabitur purus commodo hendrerit. Quisque
              torquent erat dolor, donec facilisi molestie. Conubia mattis vivamus aptent eleifend accumsan; eu nisl. Id
              senectus pretium scelerisque conubia varius curae, pharetra faucibus ornare.</p>
          </div>

          <div className={'stars-strip my-[45px]'}></div>


          <div>
            <h3 className={"mainTitle mb-[20px]"}>Read also</h3>

            <div className={"grid md:grid-cols-3 gap-[20px] mt-[25px] "}>
              {Array.from({length: 3}).map((item, index) => (
                <NewsItem
                  key={index}
                  img={''}
                  title={'News Title “Description”'}
                  tags={['Topic', 'Topic Topic']}
                  link={'/news/1'}
                  duration={'~ 10 min'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Page;