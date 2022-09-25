import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Review from "./Review";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import Artist from "../artists/Artist";

function ReviewsPage({ message, filter = "" }) {
  const [reviews, setReviews] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get(`/reviews/?artist=${id}`);
        setReviews(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    
    const fetchArtist = async () => {
      try {
        const { data } = await axiosReq.get(`/artists/${id}`);
        setArtistData(data);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchArtist();
    fetchReviews();
    

    
  }, [pathname, currentUser, id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        
        <Artist {...artistData} isProfilePage={false}/>
        

        {hasLoaded ? (
          <>

            {reviews.results.length ? (
              <InfiniteScroll
                children={reviews.results.map((artist) => (
                  <Review key={artist.id} {...artist} isProfilePage={false} />
                ))}
                dataLength={reviews.results.length}
                loader={<Asset spinner />}
                hasMore={!!reviews.next}
                next={() => fetchMoreData(reviews, setReviews)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ReviewsPage;