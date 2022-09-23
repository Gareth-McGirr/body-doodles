import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ArtistCreateForm(props) {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();
  const id = currentUser?.profile_id

  const [artistData, setArtistData] = useState({
    speciality: "",
    hourly_rate: 0,
    location: "",
  });
  const { speciality, hourly_rate, location } = artistData;

  const history = useHistory();

  const handleChange = (event) => {
    setArtistData({
      ...artistData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("speciality", speciality);
    formData.append("hourly_rate", hourly_rate);
    formData.append("location", location);

    try {
      const { data } = await axiosReq.post("/artists/", formData);
      await axiosRes.put(`/profiles/${id}/`, {artistId: data.id,});
      history.push(`/artists`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Speciality</Form.Label>
        <Form.Control
          type="text"
          name="speciality"
          value={speciality}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Rate Per Hour</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="hourly_rate"
          value={hourly_rate}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={btnStyles.Button}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={appStyles.Content}>{textFields}</Container>
    </Form>
  );
}

export default ArtistCreateForm;
