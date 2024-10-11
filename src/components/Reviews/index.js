import React from 'react';
import { Box, Typography, Avatar, Grid, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
  {
    name: 'Bruno',
    feedback: 'Atendimento excelente e produto de alta qualidade!',
    avatar: 'https://s3-alpha-sig.figma.com/img/61f2/8021/8da8de347ca2c5ae773b0358a346a9f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmzibVIXh8xAcPLxXpNwRgmEtElnJ2NYPAzI9em2yYq51veJX2p3iW4r-BG0qE8~F~nVQao5~vh7szIXNA~63WqSjCscuet0p2DIxL-~aEvgGtmUSfA40qk0nQ~5lO-T~wueGIZD~2E0~XqtjgcGXA72ZjNe5ELxU4wbRadJYmbXSljvkXUMfDnmxeWPmxiR4zhFULK6enY-EdJUDoKpdn1FoX~rLD6aSi7Wj1xh01g6f1qW27o8Jg9HeRZY5vD9G3NVIRN6B93Fs6KVkAlfD2-LmNg-A8BThhY6lrNyxg9B~690YHBHjeIbU~niTnqwpntfFGnFb8yqHWi85fiLoQ__', // URL da imagem do avatar
    rating: 5,
  },
  {
    name: 'Bruno',
    feedback: 'Atendimento excelente e produto de alta qualidade!',
    avatar: 'https://s3-alpha-sig.figma.com/img/61f2/8021/8da8de347ca2c5ae773b0358a346a9f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmzibVIXh8xAcPLxXpNwRgmEtElnJ2NYPAzI9em2yYq51veJX2p3iW4r-BG0qE8~F~nVQao5~vh7szIXNA~63WqSjCscuet0p2DIxL-~aEvgGtmUSfA40qk0nQ~5lO-T~wueGIZD~2E0~XqtjgcGXA72ZjNe5ELxU4wbRadJYmbXSljvkXUMfDnmxeWPmxiR4zhFULK6enY-EdJUDoKpdn1FoX~rLD6aSi7Wj1xh01g6f1qW27o8Jg9HeRZY5vD9G3NVIRN6B93Fs6KVkAlfD2-LmNg-A8BThhY6lrNyxg9B~690YHBHjeIbU~niTnqwpntfFGnFb8yqHWi85fiLoQ__',
    rating: 5,
  },
  {
    name: 'Bruno',
    feedback: 'Atendimento excelente e produto de alta qualidade!',
    avatar: 'https://s3-alpha-sig.figma.com/img/61f2/8021/8da8de347ca2c5ae773b0358a346a9f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmzibVIXh8xAcPLxXpNwRgmEtElnJ2NYPAzI9em2yYq51veJX2p3iW4r-BG0qE8~F~nVQao5~vh7szIXNA~63WqSjCscuet0p2DIxL-~aEvgGtmUSfA40qk0nQ~5lO-T~wueGIZD~2E0~XqtjgcGXA72ZjNe5ELxU4wbRadJYmbXSljvkXUMfDnmxeWPmxiR4zhFULK6enY-EdJUDoKpdn1FoX~rLD6aSi7Wj1xh01g6f1qW27o8Jg9HeRZY5vD9G3NVIRN6B93Fs6KVkAlfD2-LmNg-A8BThhY6lrNyxg9B~690YHBHjeIbU~niTnqwpntfFGnFb8yqHWi85fiLoQ__',
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <Container fixed>
    <Box sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Avaliações
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box sx={{ maxWidth: 300, mx: 'auto', textAlign: 'center' }}>
              <Avatar
                src={review.avatar}
                alt={review.name}
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                {review.name}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: 'gold' }} />
                ))}
              </Box>
              <Typography variant="body1" color="textSecondary">
                {review.feedback}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default ReviewsSection;