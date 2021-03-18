import "../styles/popUpStyle.css";

const PopUpUser = (props: any) => {
  return (
    <div className="popup">
      <div className="popupInner">
        <button className="ui secondary button buttonAdjusted" onClick={props.closePopup}>Close</button>
        <h2>{props.user.name}</h2>
        <p>ID: {props.user.id}</p>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
        <p>Street: {props.user.address.street}</p>
        <p>Suite: {props.user.address.suite}</p>
        <p>City: {props.user.address.city}</p>
        <p>Zipcode: {props.user.address.zipcode}</p>
        <p>Geo-lat: {props.user.address.geo.lat}</p>
        <p>Geo-lng: {props.user.address.geo.lng}</p>
        <p>Phone: {props.user.phone}</p>
        <p>Website: {props.user.website}</p>
        <p>Company name: {props.user.company.name}</p>
        <p>Company catch phrase: {props.user.company.catchPhrase}</p>
        <p>Company bs: {props.user.company.bs}</p>
      </div>
    </div>
  );
};

export default PopUpUser;
