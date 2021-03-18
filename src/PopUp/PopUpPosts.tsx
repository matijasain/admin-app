import "../styles/popUpStyle.css";

const PopUpPost = (props: any) => {
  return (
    <div className="popup">
      <div className="popupInner">
        <button className="ui secondary button buttonAdjusted" onClick={props.closePopup}>Close</button>
        <h2>{props.post.id}</h2>
        <p>User Id: {props.post.userId}</p>
        <p>Username: {props.post.title}</p>
        <p>Email: {props.post.body}</p>
      </div>
    </div>
  );
};

export default PopUpPost;
