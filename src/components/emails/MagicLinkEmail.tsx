import React from "react";
import {
  Html,
  Head,
  Body,
  Preview,
  Container,
  Img,
  Heading,
  Section,
  Button,
  Text,
  Hr,
  Link,
} from "@react-email/components";

type MagicLinkEmailProps = {
  url: string;
  host: string;
};

export default function MagicLinkEmail({
  url = "http://localhost:3000/api/auth/callback/resend?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&token=4a9a833f7da77667cf5b172f6d3f1b9ccb1a8a4302280d3305f0f94e1603ec99&email=matejfarkas%40hotmail.com",
  host = "localhost:3000",
}: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Sign in to StoryToast</Preview>
        <Img
          src={`https://${host}/images/logo.png`}
          width="200"
          height="84"
          alt="Storytoasts"
          style={logo}
        />
        <Container style={container}>
          <Heading style={heading}>Let’s get you signed in</Heading>
          <Section style={btnContainer}>
            <Button style={button} href={url}>
              Sign In
            </Button>
          </Section>
          <Hr style={hr} />
          <Section>
            <Text style={text}>
              This link will only be valid for the next 5 minutes.
              <br /> If you didn’t request this email, you can safely ignore it.
            </Text>
          </Section>
          <Text style={footer}>
            © {new Date().getFullYear()} <Link href={host}>StoryToast</Link>.
            All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#020817",
  padding: "20px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#F9FAFB",
  margin: "0 auto",
  padding: "20px 30px",
  borderRadius: "10px",
};

const logo = {
  margin: "25px auto",
};

const heading = {
  color: "#020817",
  textAlign: "center" as const,
  marginBottom: "50px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#346DF1",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block-inline",
  padding: "12px 50px",
};

const text = {
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#cccccc",
  margin: "30px 0 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
