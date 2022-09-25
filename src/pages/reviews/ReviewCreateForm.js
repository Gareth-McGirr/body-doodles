import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useParams } from "react-router";

function ReviewCreateForm(props) {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    artistId: id,
    content: "",
    rating: "",
  });
  const { artistId, content, rating } = reviewData;

  
  const history = useHistory();

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("artist", artistId);
    formData.append("rating", rating);
    formData.append("content", content);
    

    try {
      await axiosReq.post("/reviews/", formData);
      history.goBack();
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
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="text"
          name="rating"
          value={rating}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={appStyles.Content}>{textFields}</Container>
    </Form>
  );
}

export default ReviewCreateForm;
