/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-30 17:05:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\components\License.js
 */
// import Excel from '../image/Excel.jpg';
import { Card } from 'antd';
const { Meta } = Card;

const License =(prop)=>{
    console.log(prop.license.url2)
    console.log(typeof prop.license.url2);
    return (
                <div>
                    <Card
                    style={{ width: 400}}
                    cover={<img alt={prop.license.name} src={prop.license.url} />}
                    >
                    <Meta title={prop.license.name} description={prop.license.issueDate} />
                    </Card>
                </div>
            )
}

export default License