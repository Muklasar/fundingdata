// import './dataCard.scss'
import React, { useState } from 'react';
import { Card } from 'antd';
const tabList = [
  {
    key: 'Investors',
    tab: 'Investors',
  },
  {
    key: 'Companies',
    tab: 'Companies',
  },
  {
    key: 'Funds',
    tab: 'Funds',
  },
  {
    key: 'Deals',
    tab: 'Deals',
  },
];
const contentList = {
    Investors: <p>content1</p>,
    Companies: <p>content2</p>,
    Funds: <p>Funds</p>,
    Deals: <p>Deals</p>,
  };
const DatasetCard = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('Investors');
    const onInvestorsChange = (key) => {
      setActiveTabKey1(key);
    };
    return (
      <>
        <Card
          style={{
            width: '100%',
            fontSize: '50px'
          }}
          title="Market Datasets"
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={(key) => {
            onInvestorsChange(key);
          }}
          align= "center"
        >
          {contentList[activeTabKey1]}
        </Card>
        <br />
        <br />
      </>
    );
}

export default DatasetCard