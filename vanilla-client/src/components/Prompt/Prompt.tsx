import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Conversation } from '../../_interface/interface';
import axios from '../../api/axios';
import './Prompt.scss';
import { updateConversation } from '../../_reducers/conversationSlice';

export default function Prompt() {
    const [currentPrompt, setCurrentPrompt] = useState<string>('');
    const [errMsg, setError] = useState<string>('');
    const dispatch = useDispatch();

  const submitPrompt = () => {

    if (currentPrompt.length <= 0 ) {
      setError('Prompt cannot be empty');
      return;
    }
    axios({
      method: 'POST',
      url: '/completions',
      data: {
        model: 'text-davinci-003',
        prompt: currentPrompt,
        max_tokens: 100
      }
    })
      .then((res) => {
        const data = res.data;
        console.log(data); 
        const convItem: Conversation = {
          prompt: currentPrompt,
          response: res.data.choices[0].text,
          id: res.data.id
        } 
        dispatch(updateConversation(convItem));
        setCurrentPrompt('');
        const inputDom = document.getElementById('prompt-query');
        const scrollDom = document.getElementById('conversation-container');
        if (inputDom) {
          inputDom.focus();
        }
        if (scrollDom) {
          setTimeout(() => {
            scrollDom.scrollIntoView(false);
          }, 0)
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
  }
  return (
    <div className='prompt-section'>
      <h2>Enter a Prompt</h2>
      <div>
        <input
          id="prompt-query"
          onChange={(evt: {target: {value: React.SetStateAction<string> }}) => {
            // console.log(evt.target.value);
            if (errMsg.length > 0) setError('');
            setCurrentPrompt(evt.target.value);
          }}
          value={currentPrompt}
        />
        <button onClick={() => {
          submitPrompt();
        }}>
          Submit
        </button>
      </div>
      {
        errMsg.length > 0 ? 
        <p style={{ color: 'red', textAlign: 'center' }}>Error: {errMsg}</p>:
        <></>
      }
    </div>
  );
}
