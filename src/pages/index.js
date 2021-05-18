import React from "react"
import ReactModal from 'react-modal'

import Content from '../components/Content';
import Row from '../components/Row';
import Question from '../components/Question';
import QuestionPopup from '../components/QuestionPopup';
import WinPopup from '../components/WinPopup';
import Background from '../components/Background';

import RestartButton from '../containers/restartButton';

import './styles.css'

import {COUNT} from '../constants';

ReactModal.setAppElement('#___gatsby')

const IndexPage = () => {
    const rows = [];

    for (let i = 0; i < COUNT * COUNT; i += COUNT) {
        rows.push(Array(COUNT).fill(null));
    }

    return (
      <div id='main'>
          <Background />
          <Content>
              {
                  rows.map((data, i) =>
                      <Row key={i}>
                          {
                              data.map((_, j) => (
                                    <Question key={`${i}_${j}`} id={`${i}_${j}`}/>
                                  )
                              )
                          }
                      </Row>
                  )
              }
            <div style={{'marginTop': '20px'}}>
                <RestartButton />  
            </div>
          </Content>
          <QuestionPopup />
          <WinPopup />
      </div>
    )
};

export default IndexPage;
