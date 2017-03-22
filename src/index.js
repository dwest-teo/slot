import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const slotItems = {
  slot1: [
    <g><path d="M232.1 236c0-.2 0-.5-.1-.7V20.6c0-2.2-1.8-4-4-4h-.5l-63 7.4H60.1c-2.4 0-4.3 2.1-4 4.5C58.2 44.3 74.6 96 88 96h48c6.6 0 14.1-12.6 20.2-27.2 44.2 37.1 39.1 109.6 32.9 147.2H52c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h176c1.6 0 3.1-1 3.7-2.4.2-.5.4-1 .4-1.6zM135.5 88h-47c-1.8-1.1-7.3-7.2-14.3-25.4-4.4-11.3-7.8-23-9.4-30.6h94.8c-1.6 7.5-5.1 19.2-9.6 30.6-7.1 18.2-12.7 24.4-14.5 25.4zM186 232H56v-8h131.6c-.6 3.1-1.1 5.7-1.6 8zm8.1 0c3.2-14.7 8.2-43.5 6.8-74.4-.9-20-4.4-37.9-10.4-53.2-7-17.9-17.4-32.5-31.1-43.4l9.9-29.6L224 25v207h-29.9z"/><path d="M60.3 111.7c.2.1.4.2.7.2-6.4 8.4-13 23.1-13 48.1 0 32.3 3.7 42.9 6.1 46.3.7 1.1 2 1.7 3.3 1.7h108.5c1.7 0 3.3-1.1 3.8-2.7 1.5-4.4 2.4-15.8 2.4-45.3 0-23.8-6.4-38.3-12.9-46.9l8.3-7.7c1.3-1.3.4-3.4-1.4-3.4H77s-11.2-2.2-21-6c-4.4-1.7-6.5-3.5-7.4-4.9-1-1.6-3.1-2.3-4.9-1.5C35 93.2 16 104 16 128c0 22.7 8.5 43.3 13.1 52.7 1.3 2.6 4.9 3 6.7.7L39 178c1.1-1.3 1.2-3.2.3-4.6C35.8 167.9 28 152.9 28 128c0-29.2 27.3-18.4 32.3-16.3zM162.6 200H59.8c-1.4-3.7-3.8-13.9-3.8-40 0-26.5 7.8-39.8 13.5-46h79.7c6.1 6 14.7 19.3 14.7 46 .1 20.5-.4 33.9-1.3 40z"/><path d="M147.1 150.9l-12.6 1.6c-.8.1-1.7.1-2.5 0l-21.9-2.7-21.7-2.7c-.8-.1-1.7-.1-2.5 0L70.4 149c-3.7.5-6.4 2.9-6.4 5.7v10c.2 14.1 1.1 22.5 2 27.3h89.3c.3-5.3.6-13.9.6-27.7v-7.7c.1-3.5-4.2-6.3-8.8-5.7zM218 160c0-.6-.4-1-1-1h-6c0-.6 0-1.2-.1-1.9-.2-4.1-.5-8.2-.9-12.1h6c.6 0 1-.4 1-1s-.4-1-1-1h-6.2c-.5-4.8-1.2-9.5-2-14h6.3c.6 0 1-.4 1-1s-.4-1-1-1h-6.6c-.9-4.8-2.1-9.5-3.4-14h6c.6 0 1-.4 1-1s-.4-1-1-1h-6.6c-1.5-4.9-3.2-9.5-5.1-14h5.7c.6 0 1-.4 1-1s-.4-1-1-1h-6.5c-2.2-4.9-4.6-9.6-7.3-14h5.9c.6 0 1-.4 1-1s-.4-1-1-1h-7.1c-3.2-5-6.8-9.7-10.7-14h5.8c.6 0 1-.4 1-1s-.4-1-1-1h-7.7c-2-2.1-4.1-4.1-6.3-6.1-.8-.7-2.1-.7-2.8.2-.7.8-.7 2.1.2 2.8 24.2 21.5 37.5 54.2 39.5 97.4 1.2 25.9-2 50.4-5 66.3-.2 1.1.5 2.1 1.6 2.3h.4c.9 0 1.8-.7 2-1.6.8-4.5 1.7-9.7 2.4-15.4h5.7c.6 0 1-.4 1-1s-.4-1-1-1h-5.4c.6-4.4 1.1-9.1 1.5-14h5.9c.6 0 1-.4 1-1s-.4-1-1-1h-5.7c.4-4.5.6-9.2.8-14h6c.6 0 1-.4 1-1s-.4-1-1-1h-5.9c.1-4.6.1-9.3 0-14h6c.2.1.6-.3.6-.9z"/></g>,
    <g><path d="M168.3 161.2c-.2-.8-.5-1.5-1.1-2l-7.1-7.1h3.9c2.2 0 4-1.8 4-4v-12c0-2.2-1.8-4-4-4h3.1c.6 0 1.2-.1 1.8-.4l5.2-2.6c1.2-.6 2.1-1.8 2.2-3.2l7.4-74.4c.2-2-1.1-3.8-3-4.3l-44.1-11c-.3-.1-.6-.1-1-.1h-15.1c-.3 0-.7 0-1 .1l-44.1 11c-1.9.5-3.2 2.3-3 4.3l7.4 74.4c.1 1.4 1 2.6 2.2 3.2l5.2 2.6c.6.3 1.2.4 1.8.4h3c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h3.9l-7.1 7.1c-.6.6-.9 1.3-1.1 2l-14.8 74c-.5 2.5 1.4 4.8 3.9 4.8h102.4c2.5 0 4.4-2.3 3.9-4.8l-14.8-74zm.2-38.4l-2.4 1.2H146l7.9-75.3 21.4 5.3-6.8 68.8zM120.9 44h14.2l14.9 3.7v.1l-8 76v.2h-28v-.2l-8-76v-.1l14.9-3.7zm-31 80l-2.4-1.2L80.6 54l21.4-5.3 8 75.3H89.9zm2.1 24v-12h72v12H92zm50 12.1l8 71.9h-44l8.7-71.9v-.1l27.3.1c0-.1 0-.1 0 0zm-46.7 3.8l3.9-3.9h11.5l-8.7 72H81.7l13.6-68.1zM154 232v-.5l-8-71.5h10.7l3.9 3.9 13.6 68.1H154zM136 32l2-12.1-10-3.9-10 4 1.9 12zM45.2 66.1c1-1.2 2.8-1.3 4.8-.8l20.9 10.8-2.4-24.3c-.3-1.6-1.5-2.8-3-2.8H57c-.5 0-1.2.4-1.7.2l-8.8-3.5c-1.5-.6-3.1-.2-4.3.9L18 70.2c-1 1.2-1 3.2-.9 4.5l29.8 66.8c.6 1.4 2.1 2.5 4.1 2.5h14c1.9-.2 4.2-1.7 4-4v-5c-.1-1.6-2-3.3-3.5-3.8l-6.7-2.2c-1.6-.5-2.7-2.1-2.7-3.8v-7.8c0-.8-.2-1.6-.7-2.2L48.6 105c-.4-.6-.7-1.4-.7-2.1L48 89c0-.6-.4-1.3-.7-2L41 74c-.3-1.8.2-3.1 1-4l3.2-3.9z"/><path d="M213.6 58.3l-13.4-4.2c-.4-.1-.8-.2-1.2-.2h-8c-2.1 0-3.8 1.6-4 3.6l-3.7 37.2 23.5-29.5c.5-.9 1.3-1.5 2.3-1.8l4.5-1.4c1.9-.4 1.9-3.1 0-3.7z"/></g>,
    <g><path d="M240 88V48c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v40c0 17.7 14.3 32 32 32h8.5c0 .3 0 .6.1 1l23.3 95H24c-4.4 0-8 3.6-8 8v12c0 2.2 1.8 4 4 4h216c2.2 0 4-1.8 4-4v-12c0-4.4-3.6-8-8-8h-55.9l23.8-95c.1-.3.1-.6.1-1h8c17.7 0 32-14.3 32-32zM24 88V48c0-13.2 10.8-24 24-24h160c13.2 0 24 10.8 24 24v40c0 13.2-10.8 24-24 24H48c-13.2 0-24-10.8-24-24zm120 53.4l-10 .6c-3.3 0-6 2.7-6 6s2.7 6 6 6l10 .6v5.4h-32v-24h32v5.4zm26 2.6c.7.3 2 2.4 2 4s-1.3 3.7-2 4l-35.7-2H134c-1.1 0-2-.9-2-2s.9-2 2-2h.2l35.8-2zm-26-16H98v-8h60v8h-14zm88 104H24v-8h208v8zm-63.9-17c-.1.3-.1.6-.1 1H88c0-.3 0-.6-.1-1l-23.3-95H90v12c0 2.2 1.8 4 4 4h10v24c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-5l18 1c3.3 0 6-4.7 6-8s-2.7-8-6-8l-18 1v-5h10c2.2 0 4-1.8 4-4v-12h25.9l-23.8 95z"/><path d="M128 104c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-56c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24z"/><path d="M128 63c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zM137 72c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4c-1.1 0-2 .9-2 2zM113 74h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4c-1.1 0-2 .9-2 2s.9 2 2 2zM118.6 65.5c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-2.8-2.8c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l2.8 2.8zM137.4 78.5c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l2.8 2.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-2.8-2.8zM118.6 78.5l-2.8 2.8c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l2.8-2.8c.8-.8.8-2 0-2.8-.7-.7-2-.7-2.8 0zM128 76c2.2 0 4-1.8 4-4 0-.4-.1-.7-.1-1l8.3-8.3c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-8.3 8.3c-.3-.1-.7-.1-1-.1-2.2 0-4 1.8-4 4-.1 2.1 1.7 3.9 3.9 3.9zM180 80h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4zm0-8h8v4h-8v-4zM204 80h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4zm0-12h8v4h-8v-4zM128 176s-8 7.6-8 12 3.6 8 8 8 8-3.6 8-8-8-12-8-12z"/></g>,
  ],
  slot2: [
    <g><path d="M216 104c0-8.8-7.2-16-16-16-3.7 0-7.2 1.3-9.9 3.5 9.6 4.4 18.4 9.2 25.9 13.7V104zM238.5 125.5c-.4-.3-.8-.6-1.3-1-.9-.7-2-1.5-3.2-2.4-.6-.4-1.2-.9-1.9-1.4-18.5-13.4-61.9-40.7-104-40.7h-.1c-39.3 0-85.3 23.9-105.2 38-7.5 5.3-9 17.4-3.4 23l77.4 93.2c1.5 1.8 3.7 2.8 6.1 2.8h50.5c1.2 0 2.4-.6 3.1-1.5l82.6-104.4c1.4-1.7 1.1-4.2-.6-5.6zM102.9 229l-77.3-93.1c-.2-.2-.3-.4-.5-.5-.8-.8-1.2-2.5-1-4.4.2-2.7 1.5-5.1 3.4-6.4C48.2 109.9 92.1 88 128 88h.1c19.3 0 41.2 6.1 65 18.2 17.4 8.8 31 18.5 37.3 23.1L151.5 229h-48.6z"/><path d="M125.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM130.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM135.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM140.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM107.3 214l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM115.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM110.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM120.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM145.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM104.5 210.7l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM85 187.2l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM87.8 190.5l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.3.2-.8-.1-1.1zM90.6 193.9l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM93.4 197.2l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.3.1-.8-.1-1.1zM73.9 173.8l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.1-.8-.1-1.1zM76.7 177.1l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.1-.4.1-.8-.1-1.1zM79.5 180.5l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.1-.4.1-.8-.1-1.1zM82.2 183.8l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM96.2 200.6l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.1-.4.1-.8-.1-1.1zM99 203.9l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1L99 205c.2-.3.2-.8 0-1.1zM101.7 207.3l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM71.1 170.4l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM65.5 163.7l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM68.3 167l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.3.2-.8-.1-1.1zM62.7 160.3l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.3.2-.8-.1-1.1zM43.2 136.9l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM46 140.2l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM48.8 143.6l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM51.6 146.9l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.2-.8-.1-1.1zM40.5 133.5l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.1-.4.1-.8-.1-1.1zM54.4 150.3l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.4.1-.8-.1-1.1zM57.2 153.6l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.1-.3.1-.8-.1-1.1zM60 157l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1L60 158c.2-.3.2-.7 0-1zM150.1 216h-.3c-.3 0-.6.1-.7.4l-4.1 6.2c-.4.6 0 1.4.7 1.4h.3c.3 0 .6-.1.7-.4l4.1-6.2c.4-.6 0-1.4-.7-1.4zM37.6 130.2l-.2-.2c-.4-.5-1.1-.4-1.4.1l-3.7 5.6c-.2.3-.2.8.1 1.1l.2.2c.4.5 1.1.4 1.4-.1l3.7-5.6c.2-.3.2-.8-.1-1.1z"/></g>,
    <g><path d="M208 129.1v-.9-1.2c-.1-5-.5-8.6-1.2-12.7v-.1-.1-.1c-.4-2.2-.9-4.4-1.4-6.6v-.1-.1c-1.1-4.1-2.5-8-4.2-11.8-1.6-3.6-3.5-7.1-5.6-10.4-2.1-3.2-4.4-6.3-6.9-9.2-2.5-2.9-5.2-5.6-8-8-2.9-2.5-6-4.8-9.2-6.9-3.3-2.1-6.8-4-10.4-5.6-3.8-1.7-7.7-3.1-11.8-4.2h-.1-.1c-2.1-.6-4.3-1-6.5-1.4-4.5-.8-9.1-1.2-13.8-1.2H127.6c-6.4 0-12.6.9-18.5 2.4-29.1 6.7-51.5 29-58.7 57.4-1.5 5.9-2.4 12.1-2.4 18.5v1c0 4.7.4 9.4 1.2 13.9.4 2.2.9 4.4 1.4 6.5v.2c1.1 4.1 2.5 8 4.2 11.8 1.6 3.6 3.5 7.1 5.6 10.4 2.1 3.2 4.4 6.3 6.9 9.2 2.5 2.9 5.2 5.6 8 8 2.9 2.5 6 4.8 9.2 6.9 3.3 2.1 6.8 4 10.4 5.6 3.8 1.7 7.8 3.1 11.8 4.2h.2c2.1.6 4.3 1 6.5 1.4 4.5.8 9.2 1.2 13.9 1.2h1.1c6.4 0 12.6-.9 18.5-2.4 28.4-7.2 50.7-29.5 57.9-57.9 2.3-5.2 3.2-11.4 3.2-17.7zm-12.7 34.2l-31.9 31.9c-3 1.6-6.1 3-9.3 4.2l45.4-45.4c-1.3 3.2-2.7 6.3-4.2 9.3zm5.5-13.5l-51 51c-2.3.7-4.6 1.3-6.9 1.7l59.6-59.6c-.4 2.3-1 4.6-1.7 6.9zm2.3-10.4l-63.7 63.7c-1.9.3-3.9.5-5.8.6l70.1-70.1c-.1 2-.3 3.9-.6 5.8zm-72.4 64.5c-.9 0-1.8.1-2.7.1-.8 0-1.7 0-2.5-.1l78.5-78.5c0 .8.1 1.7.1 2.5 0 .9 0 1.8-.1 2.7l-73.3 73.3zm-12.6-.6l85.2-85.2c.2 1.6.4 3.1.5 4.7l-81 81c-1.6-.1-3.2-.3-4.7-.5zm-6.8-1.2l90.8-90.8c.3 1.4.6 2.9.8 4.3L115.6 203c-1.4-.3-2.9-.6-4.3-.9zm-6.3-1.7l95.4-95.4c.4 1.3.8 2.7 1.2 4L109 201.6c-1.4-.4-2.7-.8-4-1.2zm-5.9-2.1l99.2-99.2c.5 1.2 1 2.5 1.4 3.7l-96.8 96.8c-1.3-.3-2.5-.8-3.8-1.3zm-5.4-2.5L195.8 93.7c.6 1.2 1.1 2.3 1.7 3.5L97.2 197.4c-1.2-.5-2.4-1.1-3.5-1.6zm-5.2-2.9L192.9 88.5c.7 1.1 1.3 2.2 1.9 3.3l-103 103c-1.1-.6-2.2-1.2-3.3-1.9zm-4.8-3.2l106-106c.7 1 1.4 2 2.1 3.1l-105 105c-1.1-.7-2.1-1.4-3.1-2.1zm-4.5-3.5l107-107c.8.9 1.6 1.9 2.3 2.9L82.1 188.5c-1-.7-2-1.5-2.9-2.3zm-4.2-3.8L182.4 75c.9.9 1.7 1.8 2.5 2.7L77.7 184.9c-.9-.8-1.8-1.6-2.7-2.5zm-3.9-4.1L178.3 71.1c.9.8 1.8 1.6 2.7 2.5L73.6 181c-.9-.9-1.7-1.8-2.5-2.7zm-3.6-4.4L173.9 67.5c1 .7 1.9 1.5 2.9 2.3l-107 107c-.8-.9-1.6-1.9-2.3-2.9zm-3.3-4.7l105-105c1 .7 2.1 1.4 3.1 2.1l-106 106c-.7-1-1.4-2-2.1-3.1zm-3-5l103-103c1.1.6 2.2 1.2 3.3 1.9L63.1 167.5c-.7-1.1-1.3-2.2-1.9-3.3zm-2.6-5.4L158.8 58.6c1.2.5 2.4 1.1 3.5 1.7l-102.1 102c-.5-1.1-1.1-2.3-1.6-3.5zm-2.3-5.7l96.8-96.8c1.3.4 2.5.9 3.7 1.4l-99.2 99.2c-.4-1.3-.9-2.5-1.3-3.8zm-1.9-6.1L147 54.4c1.4.3 2.7.7 4 1.2L55.6 151c-.4-1.3-.8-2.6-1.2-4zM52 128c0-.9 0-1.8.1-2.7L125.4 52c.9 0 1.8-.1 2.7-.1.8 0 1.7 0 2.5.1l-78.5 78.5c-.1-.8-.1-1.7-.1-2.5zm8.7-35.3l31.9-31.9c3-1.6 6.1-3 9.3-4.2L56.6 102c1.2-3.2 2.6-6.3 4.1-9.3zm-5.5 13.5l51-51c2.3-.7 4.6-1.3 6.9-1.7l-59.6 59.6c.4-2.3 1-4.6 1.7-6.9zm-2.3 10.4l63.7-63.7c1.9-.3 3.8-.5 5.8-.6l-70.1 70.1c.1-2 .3-3.9.6-5.8zm-.7 16.6l81-81c1.6.1 3.1.3 4.7.5l-85.2 85.2c-.2-1.5-.4-3.1-.5-4.7zm.8 7.2L140.4 53c1.5.2 2.9.5 4.3.8l-90.8 90.8c-.3-1.3-.6-2.8-.9-4.2zm32.7-75.5L64.9 85.7c5.5-8.2 12.6-15.3 20.8-20.8zm84.6 126.2l20.8-20.8c-5.5 8.2-12.6 15.3-20.8 20.8z"/><path d="M128 16C66.1 16 16 66.1 16 128s50.1 112 112 112 112-50.1 112-112S189.9 16 128 16zm0 216c-57.3 0-104-46.7-104-104S70.7 24 128 24s104 46.7 104 104-46.7 104-104 104z"/></g>,
    <g><path d="M195.3 191.8l-14.7-14.6c-.2-.2-.4-.4-.6-.5V160c0-4.4-3.6-8-8-8h-14V98.7c0-1.7 2.1-3.5 2.5-5.1l6.3-27.8C173.1 40.5 154 16 127.9 16 101.8 16 83.2 40.3 89 65.8l6.4 27.8c.4 1.6 1.6 3.7 2.6 5.1V152H84c-4.4 0-8 3.6-8 8v16.7c-.2.1-.4.3-.6.5l-14.7 14.6c-3 3-4.7 7.1-4.7 11.3v26.6c0 5.7 4.6 10.2 10.3 10.2h123.4c5.7 0 10.3-4.6 10.3-10.2v-26.6c0-4.2-1.7-8.3-4.7-11.3zM84 160h88v16H84v-16zm108 69.8c0 1.2-1 2.2-2.3 2.2H66.3c-1.3 0-2.3-1-2.3-2.2v-26.6c0-2.1.9-4.2 2.4-5.7L79.9 184H176.1l13.5 13.5c1.5 1.5 2.4 3.6 2.4 5.7v26.6z"/></g>,
  ],
  slot3: [
    <g><path d="M207.2 48.8C195.9 37.5 180 32 163 32c-28.5 0-61.9 14.7-89.1 41.9-43.7 43.7-55 103.4-25.1 133.3 11.3 11.3 26.9 16.7 44.2 16.7 28.5 0 61.9-14.6 89.1-41.8 43.7-43.8 55-103.4 25.1-133.3zm-30.8 127.6c-24.7 24.7-55.9 39.5-83.4 39.5-15.8 0-29.2-5-38.6-14.4-12.5-12.5-17.1-31.8-12.8-54.3 4.4-23.6 17.9-47.6 38-67.7C104.3 54.8 135.5 40 163 40c16 0 29.2 5 38.6 14.4 12.5 12.5 17.1 31.8 12.8 54.3-4.5 23.7-17.9 47.7-38 67.7z"/><path d="M155 81.8c-4.4 3.1-8.9 6.6-13.5 10.5-.6.5-1.1 1-1.7 1.5l-.9.8-.4.4-.1.1h-.1l-.2.2-.2.2c-.5.5-1.1 1-1.6 1.5-.6.6-1.2 1.3-1.8 1.9-2.3 2.5-4.4 5.2-6.3 8.1-1.9 2.9-3.5 6-4.9 9.1-1.4 3.1-2.5 6.1-3.5 9-1 2.9-2 5.6-3 8-1 2.5-2.1 4.8-3.4 7-1.3 2.2-2.7 4.3-4.3 6.3l-1.2 1.5-.6.7-.3.4-.2.2-.1.1s.2-.1.1 0c-1 1.1-2 2.1-3 3.2s-1.9 1.9-2.8 2.9c-.5.5-.9 1-1.4 1.4-.5.5-1 .9-1.4 1.4-1.9 1.9-3.8 3.7-5.7 5.5-1.9 1.8-3.7 3.5-5.5 5.1-1.8 1.7-3.5 3.3-5.2 4.8C68.1 186 59 194.2 59 194.2c-.6.6-.9 1.5-.5 2.3.5 1 1.7 1.5 2.7 1 0 0 .7-.3 2-1 1.3-.6 3.2-1.6 5.6-2.8 2.4-1.2 5.3-2.8 8.6-4.7 3.3-1.9 7-4 10.9-6.5 2-1.2 4-2.6 6.1-3.9 2.1-1.4 4.2-2.9 6.4-4.4 2.2-1.6 4.5-3.2 6.7-4.9.6-.4 1.1-.9 1.7-1.3.6-.5 1.2-.9 1.7-1.4 1.1-.9 2.4-1.9 3.5-2.9 1.1-.9 2.2-1.9 3.3-2.8.6-.6 1.2-1.2 1.9-1.8.6-.6 1.2-1.2 1.7-1.8 2.3-2.4 4.5-5.1 6.4-8 3.9-5.8 6.5-12.4 8.6-18.1 1-2.9 2-5.6 3-8.1s2.1-4.8 3.3-7.1c1.2-2.2 2.7-4.3 4.2-6.3l1.1-1.4c.5-.5 1-1.1 1.5-1.6l.2-.2-.1.1.1-.1.4-.4.7-.8c.5-.5.9-1 1.4-1.5 3.8-4 7.6-7.8 11.4-11.3 1.9-1.8 3.7-3.5 5.5-5.1 1.8-1.7 3.5-3.3 5.2-4.8 6.8-6.1 12.5-11.2 16.4-14.8 4-3.6 6.3-5.7 6.3-5.7.6-.6.9-1.5.5-2.3-.5-1-1.7-1.5-2.7-1 0 0-2.9 1.3-7.7 3.8-2.4 1.2-5.3 2.8-8.6 4.7-3.3 1.9-7 4-10.9 6.5-2 1.2-4 2.6-6.1 3.9-2 1.1-4.2 2.6-6.4 4.1z"/></g>,
    <g><path d="M182.2 108.8C174.8 98.7 161.8 92 147 92c-4 0-7.9.5-11.6 1.4.7-1.5.5-3.3-.7-4.5-1.4-1.5-3.6-1.6-5.2-.5 1.3-1.5 1.3-3.8-.1-5.3-1.5-1.6-4.1-1.7-5.7-.2-1.6 1.5-1.7 4.1-.2 5.7 1.4 1.5 3.6 1.6 5.2.5-.8.9-1.1 2.1-.9 3.2-.2-.6-.5-1.1-.9-1.6-1.5-1.6-4.1-1.7-5.7-.2-1.6 1.5-1.7 4.1-.2 5.7 1.1 1.2 2.7 1.5 4.1 1-3 1.6-5.8 3.5-8.2 5.7l.6-2.1c6-22 13.8-39 13.9-39.2.1-.3.2-.7.3-1 1.6.3 3.2.4 4.8.4 7.3 0 15-2.6 21.6-7.9 8.7-7 13.2-17.1 12.8-26.6 0-.9-.7-1.7-1.5-1.9-2.3-.6-4.6-.9-7.1-.9-7.3 0-15 2.6-21.6 7.9-5 4-8.5 9-10.6 14.4-.4-4.3-1.8-8.8-4.3-12.9-4.9-8.3-12.9-13.4-21-14.4h-.2c-.8 0-1.6.5-1.9 1.3-3 7.6-2.4 17.1 2.5 25.4 4.4 7.4 11.3 12.3 18.4 13.9-1 2.3-3.6 8.3-6.6 16.5.2-1.2-.1-2.5-1-3.5-1.5-1.6-4.1-1.7-5.7-.2-.9.9-1.3 2-1.2 3.2-.2-.5-.5-1-.9-1.5-1.5-1.6-4.1-1.7-5.7-.2-.6.6-1 1.4-1.2 2.2-1.1-1.4-2.4-2.8-3.7-4.1-8.9-8.7-20.1-13.2-30.8-13.2-2.1 0-4.1.2-6.1.5-.8.1-1.5.8-1.6 1.6-1.9 12.4 2.7 26.3 13.3 36.7 8.9 8.7 20.1 13.2 30.8 13.2 1.2 0 2.4-.1 3.5-.2-1.9 8.4-3.2 16.4-3.8 23.8-.2-2-1.9-3.5-3.9-3.5-2.2 0-4 1.8-4 4 0 2 1.5 3.7 3.4 3.9-2.1.1-3.8 1.8-3.8 4s1.8 4 4 4c1.8 0 3.3-1.2 3.8-2.8-.1 2.9 0 5.8.1 8.6-2.6-3.6-6-6.8-10.1-9.3-.6-.4-1.2-.7-1.8-1 .4.1.8.2 1.3.2 2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4c0 1.3.6 2.5 1.6 3.2-5.1-2.6-10.6-3.9-15.8-3.9-3.9 0-7.6.7-11 2-.8.3-1.4 1.2-1.3 2.1.8 9.6 6.6 19.2 16.3 25.2 6 3.7 12.5 5.5 18.8 5.5 3.1 0 6.1-.4 9-1.3.2.8.4 1.6.7 2.4 14 45.2 41.5 62.5 42.7 63.2.7.4 1.4.6 2.1.6 1.3 0 2.6-.7 3.4-1.9 1.2-1.9.6-4.3-1.3-5.5-.1 0-6.6-4.2-14.7-13.4-7.2-8.2-16.9-22.2-23.7-42.9 3.8 1.5 7.9 2.3 12.2 2.3 4.3 0 8.9-.8 13.3-2.5 10.6-4.1 18-12.5 20.6-21.8.2-.9-.1-1.8-.9-2.3-4.8-3-10.6-4.6-16.7-4.6-4.3 0-8.9.8-13.3 2.5-1.6.6-3.1 1.3-4.5 2.1.3-1.3 0-2.7-1-3.8-1.5-1.6-4.1-1.7-5.7-.2-.2.1-.3.3-.4.5.5-1.4.3-3-.8-4.2-1.5-1.6-4.1-1.7-5.7-.2-1.6 1.5-1.7 4.1-.2 5.7.7.7 1.6 1.1 2.5 1.2-.8.1-1.7.4-2.3 1.1-.8.7-1.2 1.7-1.2 2.7-.6-11.2.7-24 3.7-38.2 7.6 8.3 19.4 13.7 32.6 13.7 14.8 0 27.8-6.7 35.2-16.8.6-.2.6-1.2.1-1.9zm-26.4-58.7c-5.6 4.5-12.4 7-19.1 7-1.1 0-2.2-.1-3.2-.2l7-5.6 6.3 2h.3c.4 0 .8-.3 1-.7.2-.5-.1-1.1-.6-1.3l-5-1.6 4.4-3.5 6.3 2.1h.3c.4 0 .8-.3.9-.7.2-.5-.1-1.1-.6-1.3l-5-1.7 4.3-3.5 6.4 2h.3c.4 0 .8-.3 1-.7.2-.5-.1-1.1-.6-1.3l-5.1-1.6 12.3-9.9c-1 7.8-5.1 15.2-11.6 20.5zm-12.3-15.2c5.6-4.5 12.4-7 19.1-7 1.2 0 2.3.1 3.5.3l-12.4 10-.5-5.3c0-.5-.5-1-1.1-.9-.6 0-1 .5-.9 1.1l.6 6.6-4.4 3.6-.4-5.4c0-.6-.5-1-1.1-.9-.6 0-1 .5-.9 1.1l.5 6.7-4.3 3.5-.5-5.4c0-.5-.5-1-1.1-.9-.6 0-1 .5-.9 1.1l.6 6.7-7 5.6c.5-7.7 4.6-15.2 11.2-20.5zm-20.9.4c3.5 6 4.7 12.9 3.2 19l-4.8-8.1 2.3-4.9c.2-.5 0-1.1-.5-1.3-.5-.2-1.1 0-1.3.5l-1.8 3.7-2-3.4L120 36c.2-.5 0-1.1-.5-1.3-.5-.2-1.1 0-1.3.5l-1.8 3.6-2-3.4 2.3-4.8c.2-.5 0-1.1-.5-1.3-.5-.2-1.1 0-1.3.5l-1.7 3.6-5.7-9.7c6.2 1.4 11.6 5.6 15.1 11.6zm-13.7 8.1c-3.6-6.1-4.7-13.1-3.1-19.3l5.8 9.9-3.7-.2c-.5 0-1 .4-1 1s.4 1 1 1l5 .2 2 3.4-3.6-.2c-.5 0-1 .4-1.1.9 0 .6.4 1 .9 1.1l5 .3 1.9 3.3-3.6-.2c-.5 0-1 .4-1 1s.4 1 1 1l4.9.2 5 8.5c-6.3-1.5-11.8-5.8-15.4-11.9zm18 53c1-.9 1.4-2.3 1.2-3.5.2.6.5 1.1.9 1.6.3.3.7.6 1 .8-1.2.5-2.4 1-3.5 1.5.1-.2.2-.3.4-.4zM147 96c12 0 23.1 4.8 30.2 13h-15.3l3-4.4c.3-.5.2-1.1-.3-1.4-.5-.3-1.1-.2-1.4.3l-3.7 5.6H154l2.9-4.5c.3-.5.2-1.1-.3-1.4-.5-.3-1.1-.2-1.4.3l-3.6 5.5h-5.7l3-4.4c.3-.5.2-1.1-.3-1.4-.5-.3-1.1-.2-1.4.3l-3.7 5.6h-5.7l3-4.4c.3-.5.2-1.1-.3-1.4-.5-.3-1.1-.2-1.4.3l-3.8 5.6h-5.5l3-4.4c.3-.5.2-1.1-.3-1.4-.5-.3-1.1-.2-1.4.3l-3.7 5.6h-10.7C123.9 100.8 135 96 147 96zm-30.9-17.9c.3-.3.6-.7.8-1.1-.7 2-1.4 4.1-2.2 6.3.2-1.2-.1-2.4-1-3.4-.3-.4-.7-.6-1.2-.8 1.2.2 2.6-.1 3.6-1zm-5.7-.2c.3.4.7.6 1.2.8-1-.2-2-.1-2.9.5.7-.8.9-1.8.9-2.8.1.6.4 1.1.8 1.5zm-2.7 2.3c-1.2 1.5-1.2 3.8.2 5.2 1.5 1.6 4.1 1.7 5.7.2.3-.3.6-.7.8-1-1.1 3.4-2.3 7.1-3.4 11-1-5.1-3-10.2-5.9-14.9.8.1 1.7 0 2.6-.5zM67.1 62.7c10 0 20.2 4.4 28 12 8.7 8.5 13.2 19.8 12.4 30.7l-7.7-7.6 1.3-6.7c.1-.5-.3-1.1-.8-1.2-.5-.1-1.1.3-1.2.8l-1 5.4-4-4 1.3-6.6c.1-.5-.2-1.1-.8-1.2-.5-.1-1.1.2-1.2.8l-1.1 5.3-3.9-3.9 1.3-6.6c.1-.5-.3-1.1-.8-1.2-.5-.1-1.1.3-1.2.8l-1 5.3-3.9-3.8 1.2-6.7c.1-.5-.3-1.1-.8-1.2-.5-.1-1.1.3-1.2.8l-1 5.3-4-4 1.2-6.6c.1-.5-.3-1.1-.8-1.2-.5-.1-1.1.3-1.2.8l-1 5.2-10.7-10.5c.8-.1 1.7-.2 2.6-.2zm8.4 32C67 86.3 62.4 75.1 63.1 64.4L73.9 75l-5.2 1.1c-.5.1-.9.6-.8 1.2.1.5.5.8 1 .8h.2l6.5-1.4 3.9 3.9-5.2 1.1c-.5.1-.9.7-.8 1.2.1.5.5.8 1 .8h.2l6.4-1.4 4 4-5.2 1.1c-.5.1-.9.6-.8 1.2.1.5.5.8 1 .8h.2l6.5-1.4 4 4-5.2 1c-.5.1-.9.6-.8 1.2.1.5.5.8 1 .8h.2l6.5-1.3 3.9 3.9-5.1 1.1c-.5.1-.9.6-.8 1.2.1.5.5.8 1 .8h.2l6.4-1.3 7.6 7.5c-.8.1-1.6.1-2.4.1-9.8-.2-20-4.6-27.8-12.3zm23.9 44.2c1.7-.1 3.1-1.2 3.6-2.8-.2 1.9-.3 3.9-.3 5.7-.4-1.5-1.7-2.7-3.3-2.9zm-25.5 2.9c5.7 0 11.5 1.7 16.7 4.9 6.6 4.1 11.3 10.1 13.4 16.8.1.8.3 1.7.4 2.5l-7.8-4.9-.2-6.7c0-.6-.5-1-1-1-.6 0-1 .5-1 1l.1 5.4-4.7-2.9-.2-6.8c0-.6-.5-1-1-1-.6 0-1 .5-1 1l.2 5.4-4.8-3-.2-6.8c0-.6-.5-1-1-1-.6 0-1 .5-1 1l.1 5.5-14-8.7c2.2-.4 4.5-.7 7-.7zm6 21.9c-7.3-4.6-12.4-11.6-14-19.2l13.7 8.5-4.8 2.1c-.5.2-.7.8-.5 1.3.2.4.5.6.9.6.1 0 .3 0 .4-.1l6-2.7 4.7 2.9-4.8 2.2c-.5.2-.7.8-.5 1.3.2.4.5.6.9.6.1 0 .3 0 .4-.1l6-2.7 4.8 3-4.9 2.2c-.5.2-.7.8-.5 1.3.2.4.5.6.9.6.1 0 .3 0 .4-.1l6.1-2.7 7.9 4.9c-2.2.6-4.4.8-6.7.8-5.5.2-11.2-1.5-16.4-4.7zm58.8 6.2c-3.8 1.5-7.8 2.3-11.8 2.3-4.1 0-8.1-.8-11.6-2.4l8.7-3.5 5.2 3.9c.2.1.4.2.6.2.3 0 .6-.1.8-.4.3-.4.2-1.1-.2-1.4l-4.2-3.1 5-2 5.5 4c.2.1.4.2.6.2.3 0 .6-.1.8-.4.3-.4.2-1.1-.2-1.4l-4.5-3.3 5.2-2.1 5.7 4.2c.2.1.4.2.6.2.3 0 .6-.1.8-.4.3-.4.2-1.1-.2-1.4l-4.7-3.5 15.2-6.1c-3 7.3-9.2 13.2-17.3 16.4zm-7.3-18.6c3.8-1.5 7.8-2.3 11.8-2.3 4.3 0 8.5.9 12.1 2.6l-14.8 5.9 1.1-4.7c.1-.5-.2-1.1-.7-1.2-.5-.1-1.1.2-1.2.7l-1.5 6.1-5.3 2.1 1.2-5c.1-.5-.2-1.1-.7-1.2-.5-.1-1.1.2-1.2.7l-1.5 6.3-5.4 2.1 1.3-5.3c.1-.5-.2-1.1-.7-1.2-.5-.1-1.1.2-1.2.7l-1.6 6.7-9.1 3.6c2.8-7.2 9.2-13.4 17.4-16.6zm-13.5-4c-.4 1.1-.3 2.3.2 3.3-.1-.2-.3-.4-.5-.6-.7-.7-1.6-1.1-2.5-1.2.8-.1 1.7-.4 2.3-1.1.2-.1.3-.3.5-.4zm-6.1 8.2c1.5 1.6 4.1 1.7 5.7.2 1.3-1.3 1.6-3.3.7-4.8.1.2.3.4.5.6.6.7 1.4 1 2.3 1.2-3.8 2.9-6.9 6.5-9 10.5-.5-3-.9-6.3-1.1-9.6 0 .6.4 1.3.9 1.9zM147 124c-12 0-23.1-4.8-30.2-13h10.7l3.7 5.6c.2.3.5.4.8.4.2 0 .4-.1.6-.2.5-.3.6-.9.3-1.4l-3-4.4h5.7l3.6 5.5c.2.3.5.5.8.5.2 0 .4-.1.5-.2.5-.3.6-.9.3-1.4l-2.9-4.5h5.5l3.7 5.6c.2.3.5.4.8.4.2 0 .4-.1.6-.2.5-.3.6-.9.3-1.4l-3-4.4h5.5l3.8 5.6c.2.3.5.4.8.4.2 0 .4-.1.6-.2.5-.3.6-.9.3-1.4l-3-4.4h5.7l3.7 5.6c.2.3.5.4.8.4.2 0 .4-.1.6-.2.5-.3.6-.9.3-1.4l-3-4.4h15.3C170.1 119.2 159 124 147 124z"/></g>,
    <g><path d="M200.6 43.2C190.2 35.7 177.1 32 163 32c-29 0-61.8 14.8-89 41.9-41.5 41.5-53.8 97.5-29.3 128.6.8 1 2 1.5 3.2 1.5 1 0 1.9-.4 2.7-1.1.9-.8 1.9-1.7 3-2.8 4.7-4.3 11.3-10.4 19.3-17.8 3.9-3.7 8.2-7.7 12.7-11.9 2.3-2.1 4.5-4.3 6.8-6.6 1.1-1.1 2.3-2.3 3.5-3.4 1.2-1.1 2.2-2.3 3.4-3.4.6-.6 1.1-1.2 1.7-1.7.6-.6 1.2-1.2 1.8-1.9.6-.6 1.1-1.2 1.7-1.8 0-.1.1-.1.1-.2.4-.5.9-1.1 1.3-1.6.5-.6 1-1.2 1.5-1.7.5-.6.9-1.2 1.4-1.8l1.3-1.7c.1-.1.1-.1.1-.2l1.2-1.8c1.7-2.5 3-5.2 4.4-8 1.3-2.9 2.5-5.9 3.8-9.2 2.6-6.6 5.9-14.2 10.8-20.9.6-.8 1.2-1.7 1.8-2.5.8-1.1 2-2.3 2.8-3.4.2-.2.4-.4.5-.6l2.7-2.7 1.9-1.9.1-.1.3-.3.1-.1.3-.2.5-.5 1-.9c1.4-1.2 2.7-2.4 4-3.5 2.7-2.3 5.4-4.4 8-6.5 2.6-2 5.2-4 7.8-5.9 5-3.8 9.9-7.2 14.5-10.3 4.5-3.1 8.7-5.8 12.5-8.2 3.8-2.4 7-4.4 9.8-6.1.5-.3 1-.6 1.4-.8 2.5-1.6 2.6-5.1.2-6.8zM184.9 50c0 .1-.1.1 0 0l-2.1 1.4c-3.2 2.1-6.8 4.4-10.6 7l-.4.3c-4.4 3-9.3 6.4-14.3 10.2-2.6 1.9-5.1 3.9-7.9 6l-.1.1-.6.5c-2.4 1.9-5 4-7.5 6.1-1.3 1.1-2.5 2.2-3.7 3.2l-.5.5-1 .9-.5.4-.1.1-.3.3c-.3.2-.5.4-.6.6l-.1.1-.7.8-1.1 1.1-1 1-1.6 1.6c-.2.2-.4.4-.6.7l-.2.2-.4.4c-.2.2-.3.4-.4.6-.1.2-.6.7-.9 1-.6.6-1.2 1.4-1.8 2.2l-1.4 1.8-.4.6c-5.4 7.3-8.8 15.2-11.8 22.7v.1c-1.3 3.3-2.5 6.2-3.6 8.8-1.3 2.8-2.5 5-3.8 7v.1l-1.1 1.7-1.2 1.6c-.2.3-.4.5-.6.8-.2.3-.4.5-.5.7l-1.2 1.3-.3.3-1 1.2-.2.3L97 148l-1.7 1.8-.4.4-1.3 1.3-1.5 1.5c-.6.6-1.2 1.3-1.8 1.8l-2.7 2.6-.7.7c-.6.6-1.2 1.1-1.7 1.7-1.7 1.7-3.3 3.2-5 4.8l-9.2 8.6-3.5 3.3-19 17.5C30 165.4 43.1 116.2 79.7 79.6 104.4 54.9 136 40 163 40c10.3 0 19.8 2.3 27.7 6.4-1.8 1.1-3.7 2.3-5.8 3.6zM207.7 62c18.5 28.7 5.4 77.9-31.2 114.4-24.7 24.7-55.9 39.5-83.4 39.5-10.4 0-19.9-2.2-27.8-6.4 7.2-4.5 16-10 18.7-11.9l1.1-.7c4.1-2.9 8.8-6.1 13.6-9.7l6-4.5 1.9-1.4.1-.1.8-.7c2.4-1.9 4.8-3.9 7.4-6.1l.9-.8 1.1-1 .1-.1.9-.8 1-.9.9-.8 1-.9.3-.3.1-.1.3-.3.5-.5.2-.2 1-1 1.2-1.2.9-.9.1-.1c.6-.6 1.1-1.2 1.6-1.8.4-.5.8-.9 1.1-1.2l.4-.4.4-.5c.2-.2.3-.4.4-.6l2.4-3.3c1.2-1.6 2.2-3.1 3.1-4.6.2-.3.4-.7.6-1 .6-.9 1-1.7 1.4-2.4.1-.2.2-.5.4-.7 0-.1.1-.1.1-.2.1-.3.3-.5.4-.8.3-.6.7-1.3 1.1-2.1 1.9-3.7 3.4-7.4 4.7-10.6l.1-.3v-.1c2.5-6.2 4.6-11.6 7.4-16l1.2-1.9.1-.1c0-.1.2-.3.3-.5.2-.3.4-.6.6-.8l1-1.4 1.8-2 1.4-1.6.4-.4.8-.9.5-.6c.9-1 1.8-1.9 2.7-2.8l.1-.1c4.3-4.4 8.7-8.6 13.5-13.2l5.9-5.6.6-.6h.1c1.3-1.3 2.7-2.5 4-3.7.7-.7 1.4-1.3 2.1-2l10.9-10 8.7-7.7m.6-10c-1 0-2 .4-2.7 1.1-.9.8-1.9 1.7-3 2.8-2.3 2.2-5.2 4.8-8.4 7.8s-6.9 6.4-10.9 10c-2 1.8-4.1 3.7-6.2 5.8-2.1 2-4.3 4-6.6 6.1-4.5 4.2-9.1 8.7-13.7 13.4-1.2 1.2-2.3 2.4-3.4 3.6l-.8.9-.4.5-.2.2-.1.1-.1.1s0-.1.2-.2l-.1.1c-1.1 1.3-2.2 2.5-3.3 3.8-.1.1-.2.2-.2.3l-1.1 1.6c-.4.6-.8 1.1-1.2 1.7l-1.2 1.9c-3.2 5-5.5 10.7-8.1 17.4-1.4 3.3-2.8 6.9-4.6 10.5-.4.9-1 1.8-1.4 2.7-.5.9-.9 1.8-1.5 2.7-1.1 1.7-2.2 3.5-3.4 5.1-.8 1.1-1.7 2.2-2.5 3.3-.1.2-.3.3-.4.5-1 1-1.9 2.2-2.9 3.2l-2.1 2.1-1 1-.5.5-.3.3-.2.2-.1.1-.1.1c-.7.6-1.3 1.2-1.9 1.7-.6.6-1.3 1.1-1.9 1.7-.7.6-1.4 1.2-2 1.7-2.8 2.4-5.4 4.5-8 6.6-2.7 2-5.2 4-7.8 5.9-5 3.8-9.9 7.2-14.5 10.3-3.5 2.4-17.7 11.3-24.7 15.7-2.1 1.3-.7 5.2 1.1 6.4 10.4 7.3 23.3 10.9 37.3 10.9 28.5 0 61.9-14.6 89.1-41.8 41.5-41.5 53.8-97.5 29.3-128.6-1.1-1.2-2.3-1.8-3.5-1.8z"/></g>,
  ],
};

const SlotItem = (reel, position) => slotItems[`slot${reel}`][position];

const Slot = ({ reel, position }) => (
  <div className="reel">
    <svg viewBox="0 0 256 256">
      {SlotItem(reel, position)}
    </svg>
  </div>
);

Slot.propTypes = {
  reel: PropTypes.number,
  position: PropTypes.number,
};

const Reels = ({ positions }) => (
  <div className="reels">
    <Slot reel={1} position={positions[0]} />
    <Slot reel={2} position={positions[1]} />
    <Slot reel={3} position={positions[2]} />
  </div>
);

Reels.propTypes = {
  positions: PropTypes.array,
};

const SpinButton = ({ handler }) => (
  <div className="spin-button">
    <button onClick={() => handler()}>Spin Reels</button>
  </div>
);

SpinButton.propTypes = {
  handler: PropTypes.func,
};

const Message = ({ winMessage }) => (
  <div>
    <span>{winMessage}</span>
  </div>
);

Message.propTypes = {
  winMessage: PropTypes.string,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: [],
    }

    this.randomizeSlotPosition = this.randomizeSlotPosition.bind(this);
    this.randomizeReels = this.randomizeReels.bind(this);
    this.spinReels = this.spinReels.bind(this);
    this.selectWinMessage = this.selectWinMessage.bind(this);
  }

  randomizeSlotPosition() {
    return Math.floor(Math.random() * 3);
  }

  randomizeReels() {
    return [
      this.randomizeSlotPosition(),
      this.randomizeSlotPosition(),
      this.randomizeSlotPosition(),
    ];
  }

  spinReels() {
    let count = 0;
    let currentState = this.randomizeReels();
    const finalState = this.randomizeReels();

    const spin = () => {
      let nextState = currentState;
      let hasChanged = false;

      for (let i = 0; i < 3; i++) {
        if (count < 9 || currentState[i] !== finalState[i]) {
          nextState[i] = (currentState[i] + 1) % 3;
          hasChanged = true;
          console.log('spinning');
        }

        if (count >= 9) {
          console.log('stop spinning');
        }
      }

      this.setState({
        positions: nextState,
        isFinal: !hasChanged,
      });

      if (!hasChanged) {
        return;
      }

      currentState = this.state.positions;
      setTimeout(spin, 100);
      count++;
    }

    spin();
  }

  selectWinMessage(position) {
    const messages = [
      'You won a cup of coffee',
      'You won a cup of tea',
      'You won an espresso',
    ];

    return messages[position];
  }

  componentDidMount() {
    this.setState({ positions: this.randomizeReels() });
  }

  render() {
    const pos = this.state.positions;
    const isWin = (pos[0] === pos[1]) && (pos[1] === pos[2]);

    let winMsg = '';

    if (isWin && this.state.isFinal) {
      winMsg = this.selectWinMessage(pos[0]);
    }

    return (
      <div className="App">
        <section className="machine">
          <Reels positions={pos} />
          <SpinButton handler={this.spinReels} />
          <Message winMessage={winMsg} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
