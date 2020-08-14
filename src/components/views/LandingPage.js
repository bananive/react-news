import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Pagination, Radio, Modal } from 'antd';
import axios from 'axios';
const { Meta } = Card;
function LandingPage() {

    const [News, setNews] = useState([]);
    const [Article, setArticle] = useState({});
    const [Total, setTotal] = useState(0);
    const [Current, setCurrent] = useState(1);
    const [Category, setCat] = useState('business');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        axios.get(`http://newsapi.org/v2/top-headlines?page=${Current}&pageSize=${12}&category=${Category}&apiKey=b6b0f4e9be8e4ac2b11058c3aadf4134`)
            .then(response => {
                if (response.data.status === 'ok') {
                    setNews(response.data.articles);
                    setTotal(response.data.totalResults);
                } else {
                    alert('Failed to get Articles')
                }
            })
    }, [Current, Category]);

    const handlePageChange = page => {
        setCurrent(page);
    };

    const handleCatChange = e => {
        console.log(e);
        setCat(e.target.value);
    };

    const showDetail = i => {
        setArticle(News[i]);
        console.log(News[i]);
        setVisible(true);
    };

    const renderCards = News.map((article, index) => {
        return <Col lg={6} md={8} xs={24}>
                <Card hoverable cover={<img alt="example" src={article.urlToImage} onClick={() => {showDetail(index)}} />}>
                    <Meta title={article.title} description={article.description} />
                </Card>
            </Col>
    });

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>

            <Radio.Group value={Category} onChange={() => {handleCatChange()}}>
                <Radio.Button value="business">Business</Radio.Button>
                <Radio.Button value="entertainment">Entertainment</Radio.Button>
                <Radio.Button value="general">General</Radio.Button>
                <Radio.Button value="health">Health</Radio.Button>
                <Radio.Button value="science">Science</Radio.Button>
                <Radio.Button value="sports">Sports</Radio.Button>
                <Radio.Button value="technology">Technology</Radio.Button>
            </Radio.Group>

            <br/>
            <br/>

            <Row gutter={16}>
                {renderCards}
            </Row>

            <br/>

            <Pagination current={Current} onChange={() => {handlePageChange()}} showSizeChanger={false} defaultPageSize={12} total={Total}/>

            <Modal
                title={Article.title}
                visible={visible}
                footer={null}
                width={900}
                bodyStyle={{ maxHeight: '700px', overflowY: 'auto'}}
                onCancel={() => {setVisible(false)}}
            >
                <p><img src={Article.urlToImage} style={{ maxWidth: '100%'}} alt={'example'}/></p>
                <p>{Article.content}</p>
            </Modal>
        </div>
    )
}

export default LandingPage;