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
import {useSelector} from "react-redux";

ReactModal.setAppElement('#___gatsby')

const IndexPage = () => {
    const rows = [];

    for (let i = 0; i < COUNT * COUNT; i += COUNT) {
        rows.push(Array(COUNT).fill(null));
    }

    const currentQuestionId = useSelector((state) => state.question.currentQuestion);
    //const dispatch = useDispatch();
    const isOpen = currentQuestionId !== null;

    return (
      <div id='main'>
          {!isOpen && <Content>
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
          </Content>
          }
          {
              !isOpen && <div style={{'marginTop': '20px'}}>
                  <RestartButton />
              </div>
          }
          {isOpen && <QuestionPopup />}
      </div>
    )
};

export default IndexPage;
