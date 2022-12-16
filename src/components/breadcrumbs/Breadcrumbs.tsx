import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function LastActiveBreadcrumbs() {
  const breadcrumbs = useBreadcrumbs();
  //TODO: Make breadcrumbs clickable

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
      </Breadcrumbs>
    </div>
  );
}
