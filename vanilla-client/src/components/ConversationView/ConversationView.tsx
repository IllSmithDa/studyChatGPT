import { useSelector } from "react-redux"
import { Conversation } from "../../_interface/interface"
import './ConversationView.scss';

interface ConversationState {
  conversation: {
    conversationData: Conversation[]
  }
}

export default function ConversationView() {
  const conversation = useSelector((state: ConversationState) => state.conversation.conversationData)

  const renderConversation = conversation?.map((item) => (
    <div
      key={item.id}
      className="conversation-list"
    >
      <div>
        <p style={{ textAlign: 'left'}}>{item.response}</p>
      </div>
      <div>
        <p style={{ textAlign: 'right'}}>{item.prompt}</p>
      </div>
    </div>
  ))


  return (
    <div id="conversation-container">
      {renderConversation}
    </div>
  )
}