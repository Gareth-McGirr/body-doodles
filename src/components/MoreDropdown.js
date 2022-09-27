import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom";
import styles from "../styles/MoreDropdown.module.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));
ThreeDots.displayName = "ThreeDots";

export const MoreDropdown = ({ handleEdit, handleDelete }) => (
  <Dropdown className="ml-auto" drop="left">
    <Dropdown.Toggle as={ThreeDots} />

    <Dropdown.Menu className="text-center" popperConfig={{ strategy: "fixed" }}>
      <Dropdown.Item
        className={styles.DropdownItem}
        onClick={handleEdit}
        aria-label="edit"
      >
        <i className="fas fa-edit" />
      </Dropdown.Item>
      <Dropdown.Item
        className={styles.DropdownItem}
        onClick={handleDelete}
        aria-label="delete"
      >
        <i className="fas fa-trash-alt" />
      </Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown>
);

export const ProfileEditDropdown = ({ id, handleDeleteArtist }) => {
  const history = useHistory();

  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" />
          {" "}
          edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push("/artists/create")}
          aria-label="add-artist"
        >
          <i className="fas fa-plus-square" />
          register as artist
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDeleteArtist}
          aria-label="add-artist"
        >
          <i className="fas fa-minus-square" />
          unregister as artist
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
