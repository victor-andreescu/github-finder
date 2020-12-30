import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className='card text-center my-3'>
      <img src={avatar_url} alt='' className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{login}</h5>
        <Link to={`/users/${login}`} className='btn btn-primary btn-sm'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
