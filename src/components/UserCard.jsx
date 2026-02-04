import PropTypes from 'prop-types';

const UserCard = ({ name, email, role }) => {
  return (
    <article className="card" aria-label={`User card for ${name}`}>
      <h2>{name}</h2>
      <p>
        <strong>Email:</strong>{' '}
        {email ? <a href={`mailto:${email}`}>{email}</a> : '—'}
      </p>
      <p>
        <strong>Role:</strong> {role}
      </p>
    </article>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  role: PropTypes.string,
};

UserCard.defaultProps = {
  email: null,
  role: 'Member',
};

export default UserCard;