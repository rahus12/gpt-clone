import React from 'react'
import './chatPage.css'
import NewPrompt from '../../components/newPrompt/newPrompt';

function ChatPage() {
  

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Bot test message</div>
          <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minima sunt voluptatibus sapiente eaque quibusdam asperiores sequi iusto similique ipsam dolor vitae, suscipit recusandae nihil minus earum accusamus soluta quo.</div>
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi temporibus possimus explicabo sed sit, fugiat omnis, corporis ipsam, iusto id nulla nemo! Exercitationem fuga vitae inventore rerum quam unde sunt.</div>
          <div className="message user">User test message</div> 
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Bot test message</div>         
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Bot test message</div>
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Bot test message</div>
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Bot test message</div>
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Bot test message</div>
          <div className="message">Bot test message</div>
          <div className="message user">User test message</div>
          <div className="message">Last test message</div>
          {/* this below new prompt is done so that the entire page doesnt reload?? */}
          <NewPrompt />
          
        </div>
      </div>
    </div>
  )
}

export default ChatPage