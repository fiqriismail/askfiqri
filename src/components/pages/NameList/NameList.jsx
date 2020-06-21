import React, { useState, useEffect } from 'react';

import NameListItem from './NameListItem';

function NameList() {
  const [loadData, setLoadData] = useState(new Date());
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: { title: 'mr', first: 'Brad', last: 'Gibson' },
      location: { city: 'kilcoole' },
      email: 'brad.gibson@example.com',
      dob: { date: '1993-07-20T09:44:18.674Z', age: 26 },
      picture: { medium: 'https://randomuser.me/api/portraits/med/men/75.jpg' },
    },
    {
      id: 2,
      name: { title: 'Mrs', first: 'Ana', last: 'Moya' },
      location: { city: 'Madrid' },
      email: 'ana.moya@example.com',
      dob: { date: '1967-11-12T06:26:38.812Z', age: 53 },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
      },
    },
    {
      id: 3,
      name: { title: 'Mr', first: 'Rafael', last: 'Leroux' },
      location: { city: 'Montreuil' },
      email: 'rafael.leroux@example.com',
      dob: { date: '1988-03-17T20:41:57.974Z', age: 32 },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/8.jpg',
      },
    },
  ]);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNameList((nameList) => [...nameList, responseData.results[0]]);
      });
  }, [loadData]);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    setLoadData(new Date());
  };

  return (
    <React.Fragment>
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>
          Add Name
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}

export default NameList;
