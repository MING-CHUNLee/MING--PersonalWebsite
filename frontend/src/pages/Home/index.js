/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-31 16:58:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */

import Skill from './components/Skill';
import License from './components/License';
import Model from './components/Model';
import { ContactUs } from './components/ContactEmail';
import { message,Row, Col,Space,Timeline,Button,Drawer, Modal,Card, Form,Divider} from 'antd';
import React, { useEffect, useState } from "react";
import './index.css';
import {SmileTwoTone,MailOutlined,PhoneOutlined,GithubOutlined} from '@ant-design/icons';
import myface from './image/myface.png';
import workexps from './json/worksexps.json';
import competitions from './json/competitions.json';
import skills from './json/skills.json';
import licenses from './json/licenses.json';
import Marian from './image/Marian.jpg';
import Tdoc from './image/TDOC.jpg';
import BigProjectMerit110 from './image/BigProjectMerit110.jpeg';
import Inno2021 from './image/Inno2021.jpg';
import InnoMerit2021 from './image/InnoMerit2021.jpeg';
import Linker2019 from './image/Linker2019.jpg';
import LinkerMerit from './image/LinkerMerit.jpeg';
import SmallProjectMerit from './image/SmallProjectMerit.jpeg';
import SmallSubject from './image/SmallSubject.jpg';
import SpecialSubject from './image/SpecialSubject.jpg';

const Home =()=>{
    
    const [visible, setVisible] = useState(false);
       // 抽屜的
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    // 工作經驗對話框的
    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    



    const showModal = (prop) => {
        if(prop===0){
            message.error('尚未結束',5);
        }else if(prop===1){
            setIsModal1(true);
        }else if(prop===2){
            setIsModal2(true)
        }
    };

    const handleOk = (prop) => {
        if(prop===1){
            setIsModal1(false);
            console.log('=== show modal 1===',prop);
        }else if(prop===2){
            setIsModal2(false)
            console.log('=== show modal 2===',prop);

        }
};

    const handleCancel = (prop) => {
        if(prop===1){
            setIsModal1(false);
            console.log('=== show modal 1===',prop);
        }else if(prop===2){
            setIsModal2(false)
            console.log('=== show modal 2===',prop);

        }
};
            // 工作經驗對話框的
    const [isCOMModal1, setIsCOMModal1] = useState(false);
    const [isCOMModal2, setIsCOMModal2] = useState(false);
    const [isCOMModal3, setIsCOMModal3] = useState(false);
    const [isCOMModal4, setIsCOMModal4] = useState(false);


const showModalCOM = (prop) => {
        if(prop===0){
            setIsCOMModal1(true);
        }else if(prop===1){
            setIsCOMModal2(true);
        }else if(prop===2){
            setIsCOMModal3(true);
        }else if(prop===3){
            setIsCOMModal4(true);
        }

    };

    const handleOkCOM = (prop) => {
        if(prop===0){
            setIsCOMModal1(false);
           
        }else if(prop===1){
            setIsCOMModal2(false);

        }else if(prop===2){
            setIsCOMModal3(false);

        }else if(prop===3){
            setIsCOMModal4(false);
        }
};

    const handleCancelCOM = (prop) => {
        if(prop===0){
            setIsCOMModal1(false);

        }else if(prop===1){
            setIsCOMModal2(false);

        }else if(prop===2){
            setIsCOMModal3(false);
        }
        else if(prop===3){
            setIsCOMModal4(false);
        }
};

    return (
    <div className="resume">
            
        <Row className='basic'>
            <Col xs={{span: 24}} md={{span:8}} lg={{span:9}}>


            <Space direction="vertical">
            <Row>
            <Col  xs={{span: 24 , offset:5}} sm={{span: 24 , offset:6}} md={{span:24,offset:4}}>
                <div className='circular--portrait'  > 
                    <img src={myface} alt="myface" className="myface" />
                </div>
            <br/>
            </Col>
            </Row>
                <Row>
                    <Col xs={{span: 24 , offset:9}} sm={{span: 24 , offset:7}} md={{span: 24, offset:6}} lg={{span:24,offset:7}} >
                        <h1>李明錞</h1>
                    </Col>
                    <Col xs={{span: 24, offset:2}} sm={{span: 24}} md={{span: 20}} lg={{span:24}}>
                    <Space direction="vertical" size="small">
                        <Button  
                            type="dark"  
                            icon={<MailOutlined />} 
                            onClick={showDrawer}
                            block
                        >
                            Send mail to mindy80230
                        </Button>
                        <Drawer title="與李明錞聯繫" placement="right" onClose={onClose} visible={visible}>
                            <ContactUs/>
                        </Drawer>
                    
                    <Button
                        type="dark"
                        href={"tel:+886-34253468"}
                        icon={<PhoneOutlined />}
                        onClick={() => this.enterLoading(1)}
                        block
                    >
                    Call to 0934-253-468
                    </Button>
                
                    <Button
                        type="dark"
                        href={"https://github.com/MING-CHUNLee"}
                        icon={<GithubOutlined />}
                        onClick={() => this.enterLoading(1)}
                        block
                        >
                        Check MING github!
                    </Button>
                    </Space>
                    </Col>
            

                </Row>
                </Space>
            </Col>
            
            <Col xs={{span: 24}} sm={{span:24}} md={{span:16}} lg={{span:15}}>
            <div>
                
                        就讀臺中科技大學資訊管理系。
                        樂於學習專業科目與精進外語能力，多次擔任分組組長與簡報人員，擁有良好的時間管理能力與自律能力，至今無未通過的學科並保持於班上前段班，妥善平衡課業與興趣探索。 
                        興趣為閱讀書籍與藝術涵養與培育，至106年入學以來總共借閱 222 本書籍與電影片。 
                <br/> <br/>
                        以下為個人優勢：
                <br/>
                    <ol>
                        <li>善於觀察周遭環境進行創意發想與團隊意見整合。</li>
                        <li>溝通能力強， 善於與不同邏輯思維的合作夥伴溝通與協調。</li>
                        <li>外語能力佳，具備英語溝通能力與優良的理解能力。</li>
                        <li>不怕困難，在新創公司保持主動積極的態度面對新事物。</li>
                        <li>較強的抗壓與時間管理能力，平衡實習、競賽、課業與興趣的時間安排。</li>
                    </ol>
            </div>
            </Col>
        </Row>

        <Row className='h2BG'> 
                <h2>Skills</h2>
        </Row>
        <Row className='skill'> 
                                {skills.map((skill)=>(
                                        <Col xs={{span: 12}} md={{span:8}}>
                                            <Skill key={skill.id} skill={skill} />
                                        </Col>
                                ))}
        </Row>

        <Row className='h2BG'> 
            <h2>Competition Results</h2>
        </Row>
        <Row className='skill'> 
        <div>
            <Col  xs={{span: 24}} sm={{span: 24}} md={{span:12}}> 
                <Timeline>
                    {competitions.map((competition,index)=>(
                        <Timeline.Item dot={ <SmileTwoTone twoToneColor="#eb2f96" />}>
                            <Card title={competition.title} extra={ <Button type="primary" onClick={() => showModalCOM(index)}>詳情</Button>}>
                            <p key={competition.id}>{competition.describe}</p>
                            </Card>
                        </Timeline.Item>

    
                    ))}
                </Timeline>
            </Col>
        </div>
        </Row>
        <Row className='h2BG'> 
                <h2>Work Experience</h2>
        </Row>
        <Row className='skill'> 
            <Col span={24}>
                <Timeline>
                    {workexps.map((worksExp,index)=>(
                        
                        <Timeline.Item dot={ <SmileTwoTone twoToneColor="#eb2f96" />}>
                        <Card title={worksExp.title} extra={ <Button type="primary" onClick={() => showModal(index)}>詳情</Button>}>
                            <span key={worksExp.id}>{worksExp.period}</span>
                            <p key={worksExp.id}>{worksExp.describe}</p>
                        </Card>
                
                        </Timeline.Item>
                        
                    ))}
                </Timeline>
                </Col>
        </Row>
        <Row className='h2BG'> 
                <h2>License</h2>
        </Row>
        <Row className='skill'> 
                        {licenses.map((license)=>(
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span:12}}>
                                    <License key={license.id} license={license} />
                                </Col>
                        ))}
        </Row>
        {/* 工作經驗 */}
        <Modal title="瑪麗安生技有限公司實習生" visible={isModal1} onOk={() => handleOk(1)} onCancel={()=>handleCancel(1)}>
                <Divider><h2>重要事件與紀錄</h2></Divider> 
                <ol>
                        <li>分析產品成分與目標客群後撰寫生技產品行銷文案</li>
                        <li>分析同行制定電商網站退換貨與網站隱私條款政策</li>
                        <li>Wordpress網站SEO優化</li>
                        <li>協助外語舞蹈教師與上層的溝通翻譯</li>
                        <li>經營Facebook與Instagram社群小編</li>
                </ol>
                <Divider><h2>紀錄照片</h2></Divider> 
                <div className='imgc'>
                    <img src={Marian} alt="Marian"/>
                </div>
                
           

        </Modal>
        <Modal title="教育部補捐助計畫TDOC兼任助理工讀" visible={isModal2} onOk={() => handleOk(2)} onCancel={()=>handleCancel(2)}>
               
                <Divider><h2>重要事件與紀錄</h2></Divider> 
                <ol>
                        <li>iphone手機修復影片系列英文撰寫字幕與校搞</li>
                        <li>使用Word搭配Eexcel製作Outllook群發信件</li>
                        <li>協助電腦拆卸組裝教學直播拍攝現場</li>
                </ol>
                <Divider><h2>紀錄照片</h2></Divider> 
                <div className='imgc'>
                    <img src={Tdoc} alt="myface"/> 
                </div> 

        </Modal>
        {/* 比賽經驗 */}
        <Modal title="2021年資訊與流通學院專題成果展" visible={isCOMModal1} onOk={() => handleOkCOM(0)} onCancel={()=>handleCancelCOM(0)}>
            
                <Divider><h2>介紹</h2></Divider> 
                <p>
                本專題期望搭上社群通訊媒體風潮，設立臺中科大資管小幫手主打使用Microsoft Q&A，將Chatbot腳本設計 + 智能AI 創造「基於流程式的機器人」與「基於意圖的AI聊天機器人」的完美結合。本系統亦有設計獨家後台，統一管理本地端與雲端資料庫，以便維護人員隨時更改最新的內容資訊；針對學生留言的個別疑問，後台將會以簡易聊天室呈現，以期望系辦人員確切了解到學生的需求與疑問。
                </p>
                <Divider><h2>紀錄照片</h2></Divider> 
                <div className='imgc'>
                    <img src={BigProjectMerit110} alt="BigProjectMerit110"/> 
                </div>
                <div className='imgc'>
                    <img src={SpecialSubject} alt="BigProjectMerit110"/> 
                </div>

        </Modal>
        <Modal title="Azure雲端創新產業應用組" visible={isCOMModal2} onOk={() => handleOkCOM(1)} onCancel={()=>handleCancelCOM(1)}>
              
                <Divider><h2>介紹</h2></Divider> 
                    <p>
                    本系統使用Azure自訂視覺服務，新增數十種自助餐廳常見的主食及配菜圖片並加以訓練，使得本系統可以快速在顧客裝的便當內辨識出各個菜色。利用Azure空間分析的功能測量餐點中各菜點之面積，結合重量感測器測量便當重量，進而計算出各菜色之份量，從而比對後台所輸入之對應價格進行總金額結算，顧客可使用手機進行Line Pay掃描螢幕上的QR code支付金額，享受快速又方便的購物流程。而商家則可使用從後台系統得知每日的收入和各菜品的銷售情形，以便及時調整食材預算與實際與預測。
                    </p>
                <Divider><h2>紀錄照片</h2></Divider> 
                <div className='imgc'>
                    <img src={InnoMerit2021} alt="InnoMerit2021"/> 
                </div>
                <div className='imgc'>
                    <img src={Inno2021} alt="InnoMerit2021"/> 
                </div> 

        </Modal>
        <Modal title="【109學年資訊應用菁英班小專題成果展】" visible={isCOMModal3} onOk={() => handleOkCOM(2)} onCancel={()=>handleCancelCOM(2)}>
                <Divider><h2>介紹</h2></Divider> 
                    <p>
                    本專案定位為學校的社團管理平台與小型交流社群，促成不同社群之間相互切磋與學習，精進每個幹部的社團管理與活動創新，並達到文本資料電子化；同時讓還在摸索興趣的學生們透過此平台，能快速理解與找尋到符合自己價值觀與興趣的社群，找到自身的價值與定位。
                    </p>
                <Divider><h2>紀錄照片</h2></Divider> 
                <div className='imgc'>
                    <img src={SmallProjectMerit} alt="SmallProjectMerit"/> 
                </div>
                <div className='imgc'>
                    <img src={SmallSubject} alt="SmallSubject"/> 
                </div> 

        </Modal>
        <Modal title="Linker無限可能-全國大專院校創意行銷與創業競賽" visible={isCOMModal4} onOk={() => handleOkCOM(3)} onCancel={()=>handleCancelCOM(3)}>
                <Divider><h2>介紹</h2></Divider> 
                    <p>
                    對傳統市場營運之攤販進行市場分析並擬訂行銷推廣策略。
                    </p>
                <Divider><h2>紀錄照片</h2></Divider> 
                <div className='imgc'>
                    <img src={LinkerMerit} alt="Linker2019"/> 
                </div>
                <div className='imgc'>
                    <img src={Linker2019} alt="SmallSubject"/> 
                </div> 
        </Modal>


    </div>)
        }

export default Home