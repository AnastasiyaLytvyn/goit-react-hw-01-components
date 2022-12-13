export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className="">
        <span className="">{isOnline}</span>
        <img className=""src={avatar} alt="User avatar" width="48" />
        <p className="">{name}</p>
      </li>
    );
  };