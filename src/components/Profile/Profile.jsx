import PropTypes from 'prop-types';
import { UserAvatar, ProfileCard, Description, UserName, InfoText, StatsContainer, StatsItem, StatsItemText, StatsItemQuantity } from './Profile.styled';


export const Profile = ({username, tag, location , avatar, stats}) => {
    return <ProfileCard>
  <Description>
    <UserAvatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <InfoText>@{tag}</InfoText>
    <InfoText>{location}</InfoText>
  </Description>

  <StatsContainer>
    <StatsItem>
      <StatsItemText>Followers</StatsItemText>
      <StatsItemQuantity>{stats.followers}</StatsItemQuantity>
    </StatsItem>
    <StatsItem>
      <StatsItemText>Views</StatsItemText>
      <StatsItemQuantity>{stats.views}</StatsItemQuantity>
    </StatsItem>
    <StatsItem>
      <StatsItemText>Likes</StatsItemText>
      <StatsItemQuantity>{stats.likes}</StatsItemQuantity>
    </StatsItem>
  </StatsContainer>
</ProfileCard>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
  }),
}