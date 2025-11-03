import React, { useMemo } from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import FooterItems from './FooterItems';
import { useLang } from '../../utils/i18n';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const COPY = {
  en: {
    headline: "Test quick. Measure smart. Scale what delivers.",
    sub: "Turning data into signal and signal into scale.",
    cta: "Book a Call",
    projects: "View Projects",
    subject: "Consulting Inquiry",
  },
  kr: {
    headline: "빠르게 실험하고, 정확히 측정하며, 성과로 확장합시다.",
    sub: "데이터에서 시그널을 만들고, 시그널로 성장을 전환합시다.",
    cta: "상담",
    projects: "프로젝트 보기",
    subject: "컨설팅 문의",
  },
};

export default function Footer() {
  const [lang] = useLang();
  const t = COPY[lang] || COPY.en;
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          {t.headline}
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          {t.sub}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Button
            onClick={() => navigate('/contact')}
            variant="contained"
            color="secondary"
            aria-label={t.cta}
          >
            {t.cta}
          </Button>
          <Button
            component={RouterLink}
            to="/projects"
            variant="outlined"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}
          >
            {t.projects}
          </Button>
        </Stack>
        <FooterItems />
        <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.75 }}>
          © {new Date().getFullYear()} Andy Seo
        </Typography>
      </Container>
    </Box>
  );
}


