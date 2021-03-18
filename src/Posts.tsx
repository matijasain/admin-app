import { useState, useEffect } from 'react';

import Menu from './Menu';
import PopupPosts from './PopUp/PopUpPosts';
import { usersUrl, postsUrl } from './utilities';

const Posts = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);
  const [searched, setSearched] = useState('');
  const [direction, setDirection] = useState('ascending');
  const [column, setColumn] = useState('name');
  const [showPopUp, setShowPopUp] = useState(false);

  const assignUserToPost: any = (userId: any) => {
    return users.find((user: any) => user.id === userId);
  };

  const getPostsWithUser = (data: any) => {
    if (!data) {
      return [];
    }
    return data.map((post: any) => {
      return { ...post, user: assignUserToPost(post.userId)?.name };
    });
  };

  const filteredTable = () => {
    return posts.filter((post: any) => {
      const searchedPost = searched.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchedPost) ||
        post.user.toLowerCase().includes(searchedPost)
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

  const togglePopup = (post: any) => {
    setSelectedPost(post);
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch(postsUrl)
      .then((res) => res.json())
      .then((data) => setPosts(getPostsWithUser(data)));
  }, [getPostsWithUser]);

  return (
    <div>
      <Menu />
      <div className="ui secondary menu">
        <h2 className="item">Posts</h2>
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
              onClick={() => handleClickColumn('title')}
              className={column === 'title' ? `sorted ${direction}` : ''}
            >
              Title
            </th>
            <th
              onClick={() => handleClickColumn('user')}
              className={column === 'user' ? `sorted ${direction}` : ''}
            >
              User
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTable().map((post: any) => (
            <tr key={post.id}>
              <td data-label="ID">{post.id}</td>
              <td
                data-label="Title"
                className="selectingRow"
                onClick={() => togglePopup(post)}
              >
                {post.title}
              </td>
              <td data-label="Username">{post.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopUp ? (
        <PopupPosts post={selectedPost} closePopup={togglePopup} />
      ) : null}
    </div>
  );
};

export default Posts;
