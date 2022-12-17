import { FriendsList, FriendItem, FriendPicture, Status } from './FriendList.styled'
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return <FriendsList>
       {friends.map(friend => {
        return <FriendItem key={friend.id}>
        <Status bgColor={friend.isOnline}></Status>
        <FriendPicture src={friend.avatar} alt="User avatar" width="48" />
        <p>{ friend.name }</p>
    </FriendItem>
    })}
   </FriendsList>
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};