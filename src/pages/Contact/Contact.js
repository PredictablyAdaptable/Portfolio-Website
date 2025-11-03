import React from "react";
import { Container, Box, Typography, Stack, Link as MLink, Button, Divider } from "@mui/material";
import PhoneIco from "@mui/icons-material/LocalPhone";
import EmailIco from "@mui/icons-material/AlternateEmail";
import LinkedInIco from "@mui/icons-material/LinkedIn";
import GitHubIco from "@mui/icons-material/GitHub";
import ArticleIco from "@mui/icons-material/Article";
import Seo from "../components/Seo";

export default function Contact() {
  const canonical = typeof window !== "undefined" ? window.location.href : undefined;

  return (
    <section id="contact">
      <Seo
        title="Contact — Andy Seo"
        description="Get in touch for data science, growth analytics, and experimentation work."
        canonical={canonical}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Andy Seo",
          url: canonical,
          email: "mailto:andyhmseo@gmail.com",
          sameAs: [
            "https://www.linkedin.com/in/andy-hyung-min-s-a28a78132/",
            "https://github.com/PredictablyAdaptable",
            "https://medium.com/@andyhmseo"
          ],
          telephone: "+1-437-838-9109"
        }}
      />

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, textAlign: "center", mb: 1 }}>
          Contact
        </Typography>
        <Typography color="text.secondary" sx={{ textAlign: "center", mb: 4 }}>
          Fastest ways to reach me.
        </Typography>

        <Box
          sx={(t) => ({
            p: 4,
            borderRadius: 3,
            border: `1px solid ${t.palette.divider}`,
            boxShadow: "0 6px 20px rgba(15,18,32,0.08)"
          })}
        >
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIco />
              <MLink href="tel:+14378389109" underline="hover" sx={{ fontSize: 18 }}>
                +1&nbsp;437&nbsp;838&nbsp;9109
              </MLink>
            </Stack>

            <Divider />

            <Stack direction="row" spacing={2} alignItems="center">
              <EmailIco />
              <MLink href="mailto:andyhmseo@gmail.com" underline="hover" sx={{ fontSize: 18 }}>
                andyhmseo@gmail.com
              </MLink>
            </Stack>

            <Divider />

            <Stack direction="row" spacing={2} alignItems="center">
              <LinkedInIco />
              <MLink
                href="https://www.linkedin.com/in/andy-hyung-min-s-a28a78132/"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ fontSize: 18 }}
              >
                LinkedIn
              </MLink>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <GitHubIco />
              <MLink
                href="https://github.com/PredictablyAdaptable"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ fontSize: 18 }}
              >
                GitHub
              </MLink>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <ArticleIco />
              <MLink
                href="https://medium.com/@andyhmseo"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ fontSize: 18 }}
              >
                Medium
              </MLink>
            </Stack>

            <Box sx={{ pt: 2 }}>
              <Button
                variant="contained"
                size="large"
                href="https://calendar.app.google/7dAeuG8Q51jaLmJm6"
                target="_blank"
                rel="noreferrer"
              >
                Book a free intro call
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </section>
  );
}
