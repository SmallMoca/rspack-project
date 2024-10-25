import React from 'react';
import { Route } from 'react-router-dom';

export default function TableEdit() {
  return (
    <Route
      path="/feature/table/:id/edit"
      element={<div>detail edit page</div>}
    />
  );
}
