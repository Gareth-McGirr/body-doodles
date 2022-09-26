import React from "react";
import styles from "../../styles/Post.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const Artist = (props) => {
  const {
    owner,
    id,
    profile_id,
    profile_image,
    speciality,
    hourly_rate,
    location,
    reviews_count,
    average_rating,
    isProfilePage,
    showAll
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  return (
    <Card className={styles.Post}>
      <Card.Body>
        {!isProfilePage && (
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
              {owner}
            </Link>
          </Media>
        )}
        <p className="text-center">Speciality: {speciality}</p>
        <p className="text-center">Location: {location}</p>
        <p className="text-center">Rate: €{hourly_rate} per hour</p>
        <p className="text-center">
          Ratng:{" "}
          <Rating readonly={true} initialValue={average_rating} size={25} />
        </p>
        <p>{reviews_count} reviews</p>
        {!is_owner && (
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}/create`)}
            aria-label="create-review"
          >
            Leave a review
          </Button>
        )}
        {showAll &&(
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}`)}
            aria-label="view-reviews"
          >
            Artist Reviews
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Artist;
