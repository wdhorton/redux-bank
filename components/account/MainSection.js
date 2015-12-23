import React from 'react';
import Buttons from './Buttons';
import TransactionTableContainer from '../../containers/TransactionTableContainer';

export default (props) => {
  return (
    <section>
      <main className="ui page grid">
        <div className="row">
          <div className="center aligned starter column">
            <h1 className="ui header">Transactions</h1>
          </div>
        </div>
        <div className="row">
          <div className="center aligned starter column">
            <Buttons />
          </div>
        </div>
        <div className="row">
          <div className="center aligned starter column">
            <TransactionTableContainer id={props.params.id} />
          </div>
        </div>
      </main>
    </section>
  );
};
