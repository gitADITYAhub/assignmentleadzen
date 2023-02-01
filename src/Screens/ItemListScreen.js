import React, { useEffect, useState } from 'react';
import ListItem from '../Components/ListItem';
import Pagination from '../Components/Pagination';
import axios from 'axios';

const ItemListScreen = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const getData = async () => {
    const list = await axios.get('https://jsonplaceholder.typicode.com/users');

    // set data in the state
    setData(list.data);
  };

  //   get data
  useEffect(() => {
    getData();
  }, []);

  // get current Items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      {currentItems.map((item) => (
        <ListItem key={item.id} itemData={item} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ItemListScreen;