import React from 'react';
import { connect } from 'react-redux';

const Page = (props) => {
  return <p className="page">{props.params.pageId} {props.message}</p>
}

function select(state) {
  return {
    message: state.message
  }
}
export default connect(select)(Page);
