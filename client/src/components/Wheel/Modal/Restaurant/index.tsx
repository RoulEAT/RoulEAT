import React from 'react';
import './styles.css';

const Restaurant = () => {
  return (
    <div className='RestaurantContainer'>
      <div className='Restaurant'>
        <div className='RestaurantHeader'>
          <h1 className='RestaurantName'>Restaurant Name</h1>
          <h2 className='RestaurantAddress'>Restaurant Address</h2>
        </div>
        <hr />
        <div className='RestaurantInfo'>
          <div className='RestaurantInfo-Left'>
            <h4 className='RestaurantServices'>
              Services (delivery, pickup, etc)
            </h4>
            <h4 className='RestaurantPhone'>Phone Number</h4>
            <h4 className='RestaurantRating'>Rating</h4>
            <h4 className='RestaurantPrice'>Price</h4>
          </div>
          <div className='RestaurantInfo-Right'>
            {/* <img
              className='RestaurantImage'
              src='https://www.aworldofawnings.com/wp-content/uploads/2015/12/100_1855-1024x576.jpg'
              alt='meaning full text'
            /> */}
            <h3 className='RestaurantDistance'>Distance</h3>
          </div>
        </div>
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
