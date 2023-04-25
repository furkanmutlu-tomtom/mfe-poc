import React from 'react'
import Component from '.';

const Container = ({ styles, children }) => {
  return (
    <div style={styles}>
        Container
        <br />
        {children.map((child, index) => {
            const { type, props } = child;
            return Component(type, {key: index, ...props})
        })}
    </div>
  )
}

export default Container
