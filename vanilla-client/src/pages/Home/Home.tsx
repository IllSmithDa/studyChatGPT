import { useEffect, useState, useId } from 'react';
import { Input } from '@mui/material';
import axios from '../../api/axios';
import './Home.scss';
import Prompt from '../../components/Prompt/Prompt';
import ConversationView from '../../components/ConversationView/ConversationView';

export default function Home() {
  return (
    <div className='home-container'>
      <h3>Lightning  Prompts</h3>
      <ConversationView />
      <Prompt />
    </div>
  )
}