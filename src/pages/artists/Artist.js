import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";


const Artist = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    speciality,
    hourly_rate,
    location,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
        </Media>
        <p className="text-center">Speciality: {speciality}</p>
        <p className="text-center">Location: {location}</p>
        <p className="text-center">Rate: €{hourly_rate} per hour</p>

      </Card.Body>
      
    </Card>
  );
};

export default Artist;