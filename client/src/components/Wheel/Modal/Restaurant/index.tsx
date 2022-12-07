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
            <h3 className='RestaurantServices'>
              Services (delivery, pickup, etc)
            </h3>
            <h3 className='RestaurantPhone'>Phone Number</h3>
            <h3 className='RestaurantPrice'>Price</h3>
          </div>
          <div className='RestaurantInfo-Right'>
            <h3 className='RestaurantRating'>Rating</h3>
            <h3 className='RestaurantDistance'>Distance</h3>
          </div>
        </div>
      <div className='RestaurantRating'>
        <img
          src='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'
          alt='meaningful text about blind guys lololololoooololololololl cause theyre blind'
        />
        <img
          src='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'
          alt='meaningful text about blind guys lololololoooololololololl cause theyre blind'
        />
        <img
          src='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'
          alt='meaningful text about blind guys lololololoooololololololl cause theyre blind'
        />
        <img
          src='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'
          alt='meaningful text about blind guys lololololoooololololololl cause theyre blind'
        />
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
