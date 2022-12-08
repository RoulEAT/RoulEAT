import React from 'react';
import './styles.css';

const Restaurant = () => {
  return (
    <div className='Restaurant'>
      <div className='RestaurantInfo'>
        <h1>Restaurant Name</h1>
        <h2>Address</h2>
        <h3>Distance</h3>
        <h3>2893729372</h3>
        <h3>Availability</h3>
      </div>
      <div className='RestaurantImage'>
        <img
          src='https://www.aworldofawnings.com/wp-content/uploads/2015/12/100_1855-1024x576.jpg'
          alt='meaningful text about blind guys lololololoooololololololl cause theyre blind'
        />
      </div>
    </div>
  );
};

export default Restaurant;

// distance: 0.15
// id: "oDB5B9w2emjU9pbPP573QA"
// isClosed: false
// location: {address1: '293 Main St', address2: '', zip_code: '11050'}
// name: "Ayhan's Mediterranean Marketplace"
// phone: "+15167671400"
// price: "$$"
// rating: 3.5
// transactions: ['pickup']
// url: "https://www.yelp.com/biz/ayhans-mediterranean-marketplace-port-washington-2?adjust_creative=QnuTCz66nxju6Av9ENgsbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QnuTCz66nxju6Av9ENgsbA"
