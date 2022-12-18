import {  FriendItem, FriendPicture, Status } from './FriendList.styled'
import PropTypes from 'prop-types';

export const FriendListItem = ({name, avatar, isOnline}) => {
    return <FriendItem>
        <Status bgColor={isOnline}></Status>
        <FriendPicture src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </FriendItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
