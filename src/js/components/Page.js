import React from 'react';
import { connect } from 'react-redux';

const Page = (props) => {
  const pageId = props.params.pageId;
  return <p className="page">{pageId} {props.message[pageId]}</p>
}

export default connect(state => ({ message: state.message }))(Page);
