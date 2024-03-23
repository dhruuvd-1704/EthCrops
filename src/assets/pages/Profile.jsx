import React from "react";
import styled from "styled-components";

const ProfilePage = () => {
  // Pre-filled user data
  const userData = {
    name: "Dhroov Doe",
    address: "123 Farm Road, Ruralville",
    email: "dhroovdoe@example.com",
    aadharCardNumber: "1234 5678 9012",
    avatarUrl:
      "https://www.shutterstock.com/image-photo/akola-maharashtra-india-17-november-260nw-772660195.jpg", // Placeholder image URL
  };

  return (
    <BlurryContainer>
      <ProfileContainer>
        <Avatar src={userData.avatarUrl} alt="User Avatar" />
        <ProfileInfo>
          <h2>{userData.name}</h2>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Aadhar Card Number:</strong> {userData.aadharCardNumber}
          </p>
        </ProfileInfo>
      </ProfileContainer>
    </BlurryContainer>
  );
};

export default ProfilePage;

// Styles
const BlurryContainer = styled.div`
  background: rgba(255, 255, 255, 0.5); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  margin: auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }
`;
