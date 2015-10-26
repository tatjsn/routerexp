import React from 'react';
import { connect } from 'react-redux';

const Page = (props) => {
  return <p className="page">{props.params.pageId} {props.message}</p>
}

export default connect(state => ({ message: state.message }))(Page);
