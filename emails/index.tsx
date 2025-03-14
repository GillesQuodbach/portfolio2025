import {
  Body,
  Container,
  Head,
  Html,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface CodebashEmailProps {
  userFirstname: string;
  userLastname: string;
  userEmail: string;
  userMessage: string;
}

export const CodebashEmail = ({
  userEmail, userLastname, userFirstname, userMessage
}: CodebashEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>📩 Nouveau message reçu</Text>
        <Text style={label}>Nom :</Text>
        <Text style={content}>{userLastname}</Text>
        <Text style={label}>Prénom :</Text>
        <Text style={content}>{userFirstname}</Text>
        <Text style={label}>Email :</Text>
        <Text style={content}>{userEmail}</Text>
        <Text style={label}>Message :</Text>
        <Text style={messageStyle}>{userMessage}</Text>
      </Container>
    </Body>
  </Html>
);

export default CodebashEmail;

const main = {
  backgroundColor: '#1a202c',
  color: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: '20px',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#2d3748',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const title = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const label = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginTop: '10px',
};

const content = {
  fontSize: '14px',
  marginBottom: '10px',
};

const messageStyle = {
  fontSize: '14px',
  lineHeight: '22px',
  padding: '10px',
  backgroundColor: '#4a5568',
  borderRadius: '5px',
};
