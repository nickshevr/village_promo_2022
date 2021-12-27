import React from "react"
import ReactModal from 'react-modal'

import Content from '../components/Content';
import Row from '../components/Row';
import Question from '../components/Question';
import QuestionPopup from '../components/QuestionPopup';
import WinPopup from '../components/WinPopup';
import LoosePopup from '../components/LoosePopup';

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
          {isOpen && <QuestionPopup />}
          <WinPopup />
          <LoosePopup />
      </div>
    )
};

export default IndexPage;
