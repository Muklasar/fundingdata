import { Avatar, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;

const ServiceCard = ({ title, decs }) =>{
    return(
        <div className='mt-3'>
            <Card
                    style={{
                        width: 300,
                    }}
                    
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={title}
                        description={decs}
                    />
                </Card>
        </div>
    )
}

export default ServiceCard