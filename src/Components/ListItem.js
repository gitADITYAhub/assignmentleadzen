import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const ListItem = ({ itemData }) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const clickHandler = () => {
    setIsActive(!isActive);
    setHeight(height === 0 ? 'auto' : 0);
  };
  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <div>
          <p className="company-title">{itemData.company.name}</p>
        </div>
        <div>
          <p className="title">Contact:</p> {itemData.name}
        </div>
        <div>
          <p className="title">Street:</p> {itemData.address.street}
        </div>
        <div>
          <p className="title">City:</p> {itemData.address.city}
        </div>
        <button onClick={clickHandler}>{isActive ? 'Hide Details' : 'View Details'}</button>
      </div>
      {
        <AnimateHeight duration={280} height={height}>
          <div className="accordion-content">
            <div className="description">
              <h3 className="title">Description:</h3>
              <p>{itemData.company.catchPhrase + ' - ' + itemData.company.bs}</p>
            </div>
            <div className="detail-container">
              <section>
                <div>
                  <h3 className="title">Contact Person:</h3>
                  <p>{itemData.name}</p>
                </div>
                <div>
                  <h3 className="title">Username:</h3>
                  <p>{itemData.username}</p>
                </div>
                <div>
                  <h3 className="title">Email:</h3>
                  <p>{itemData.email}</p>
                </div>
                <div>
                  <h3 className="title">Phone:</h3>
                  <p>{itemData.phone.split(' ')[0]}</p>
                </div>
              </section>
              <section>
                <div>
                  <h3 className="title">Address:</h3>
                  <p>
                    {itemData.address.suite +
                      ' ' +
                      itemData.address.street +
                      ' ' +
                      itemData.address.zipcode +
                      ' ' +
                      itemData.address.city}
                  </p>
                </div>
                <div>
                  <h3 className="title">Street:</h3>
                  <p>{itemData.address.street}</p>
                </div>
                <div>
                  <h3 className="title">City:</h3>
                  <p>{itemData.address.city}</p>
                </div>
                <div>
                  <h3 className="title">Zipcode:</h3>
                  <p>{itemData.address.zipcode}</p>
                </div>
              </section>
            </div>
          </div>
        </AnimateHeight>
      }
    </div>
  );
};

export default ListItem;