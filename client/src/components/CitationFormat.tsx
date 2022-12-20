/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Avatar, Grid, Link, Typography } from '@mui/material';
import ICitation from '../util/types/citation';

type CitationFormatProps = ICitation;

export default function CitationProp(props: CitationFormatProps) {
  const discretionColor = (discretion: string) => {
    if (discretion === 'Mandatory/Automatic') {
      return 'red';
    }
    if (discretion === 'Discretionary') {
      return 'green';
    }
    if (discretion === 'Varies') {
      return 'lightyellow';
    }
    return 'gray';
  };

  const sections = [
    { content: props.title, size: 4 },
    {
      content: '',
      size: 1,
      color: discretionColor(props.discretion),
    },
    { content: props.jurisdiction, size: 1 },
    { content: props.offense_type, size: 1.5 },
    { content: props.keywords, size: 1.5 },
    { content: props.duration, size: 1 },
    { content: props.relevant_subsections, size: 1, link: props.citation_url },
  ];
  return (
    <Grid
      item
      container
      xs={11.5}
      border="#B7C8BA"
      justifyContent="center"
      borderTop={1}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.47)',
        padding: 1,
      }}
    >
      {sections.map((item) => (
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={item.size}
        >
          {item.link ? (
            <Link href={item.link} underline="hover">
              {item.content}
            </Link>
          ) : (
            <Typography textAlign="center">{item.content}</Typography>
          )}
          {item.color ? <Avatar sx={{ bgcolor: item.color }}> </Avatar> : null}
        </Grid>
      ))}
    </Grid>
  );
}

export const sizes = [4, 1, 1, 1.5, 1.5, 1, 1];
