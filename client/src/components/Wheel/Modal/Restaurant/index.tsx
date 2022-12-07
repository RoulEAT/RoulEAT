import React from 'react';
import './styles.css';

const Restaurant = () => {
  return (
    <div className='RestaurantContainer'>
      <div className='Restaurant'>
        <h1 className='RestaurantName'>Restaurant Name</h1>
        {/* Restaurant Image Top Right */}
        <h2 className='RestaurantAddress'>Restaurant Address</h2>
        <h3 className='RestaurantDistance'>Distance</h3>
        <h4 className='RestaurantServices'>Services (delivery, pickup, etc)</h4>
        <h4 className='RestaurantPhone'>Phone Number</h4>
        <h5 className='RestaurantRating'>Rating</h5>
        <h5 className='RestaurantPrice'>Price</h5>
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
