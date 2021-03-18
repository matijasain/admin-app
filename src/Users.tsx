import { useEffect, useState } from 'react';

import Menu from './Menu';
import PopUpUser from './PopUp/PopUpUsers';
import { usersUrl, postsUrl } from './utilities';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [searched, setSearched] = useState('');
  const [direction, setDirection] = useState('ascending');
  const [column, setColumn] = useState('name');
  const [showPopUp, setShowPopUp] = useState(false);

  const filteredTable = () => {
    return users.filter((user: any) => {
      const searchedUser = searched.toLowerCase();
      return (
        user.name.toLowerCase().includes(searchedUser) ||
        user.email.toLowerCase().includes(searchedUser) ||
        user.username.toLowerCase().includes(searchedUser)
      );
    });
  };

  const handleClickColumn = (columnValue: any) => {
    const sortBy = (key: any) => {
      return (a: any, b: any) =>
        a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
    };

    if (column !== columnValue) {
      sortBy(users);
      setColumn(columnValue);
      setUsers(users.concat().sort(sortBy(columnValue)));
      setDirection(direction);
      return;
    }

    setUsers(users.reverse());
    setDirection(direction === 'ascending' ? 'descending' : 'ascending');
  };

  const togglePopup = (user: any) => {
    setSelectedUser(user);
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch(postsUrl)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Menu />
      <div>
        <h2>Users</h2>

        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => setSearched(event.target.value)}
            value={searched}
          />
          <i className="search link icon"></i>
        </div>
      </div>
      <table className="ui sortable celled table">
        <thead>
          <tr>
            <th>ID</th>
            <th
              onClick={() => handleClickColumn('name')}
              className={column === 'name' ? `sorted ${direction}` : ''}
            >
              Name
            </th>
            <th
              onClick={() => handleClickColumn('username')}
              className={column === 'username' ? `sorted ${direction}` : ''}
            >
              Username
            </th>
            <th
              onClick={() => handleClickColumn('email')}
              className={column === 'email' ? `sorted ${direction}` : ''}
            >
              Email
            </th>
            <th>Posts Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredTable().map((user: any) => (
            <tr key={user.id}>
              <td data-label="ID">{user.id}</td>
              <td data-label="Name">{user.name}</td>
              <td
                data-label="Username"
                onClick={() => togglePopup(user)}
                className="selectingRow"
              >
                {user.username}
              </td>
              <td data-label="Email">{user.email}</td>
              <td data-label="PostsCount">
                {posts.filter((post: any) => post.userId === user.id).length}
                {/* CHECK */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopUp ? (
        <PopUpUser user={selectedUser} closePopup={togglePopup} />
      ) : null}
    </div>
  );
};

export default Users;
