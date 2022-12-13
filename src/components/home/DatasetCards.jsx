// import './dataCard.scss'
import React, { useState } from 'react';
import { Card } from 'antd';
const tabList = [
  {
    key: 'Tab1',
    tab: 'Tab1',
  },
  {
    key: 'Tab2',
    tab: 'Tab2',
  },
  {
    key: 'Tab3',
    tab: 'Tab3',
  },
];
const contentList = {
    Tab1: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>,
    Tab2: <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, to make a type specim book</p>,
    Tab3: <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem</p>,
  };
const DatasetCard = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('Tab1');
    const onTab1Change = (key) => {
      setActiveTabKey1(key);
    };
    return (
      <>
        <Card
          style={{
            width: '100%',
            fontSize: '16px'
          }}
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={(key) => {
            onTab1Change(key);
          }}
          align= "start"
        >
          {contentList[activeTabKey1]}
        </Card>
        <br />
        <br />
      </>
    );
}

export default DatasetCard