import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";


const PopularProfiles = ({ mobile }) => {
  const {popularProfiles} = useProfileData();
  return (
    <Container
      className={`${appStyles.ProfileContent} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results ? (
        <> 
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 8).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};
export default PopularProfiles;