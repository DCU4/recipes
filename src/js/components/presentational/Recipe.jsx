import React, { Component } from 'react';

export const Recipe = (props) => {

  return (
    <div class="recipe">
      <h2>{props.title}</h2>
      <p>{props.recipe}</p>
      <p>{props.time}</p>
    </div>

  );
}