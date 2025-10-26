
import { useState } from 'react'
import { apiChat } from '../lib/api'

export default function Messages(){
  const [input, setInput] = useState('HiveBot, create a 3-step plan to resolve my urgent tasks.')
  const [log, setLog] = useState([])
  const send = async () => {
    if(!input) return
    const msgs = [...log, {role:'user', content:input}]
    setLog(msgs); setInput('')
    const res = await apiChat(msgs, "You are HiveBot, the helpful assistant for HouseHive.ai.")
    setLog([...msgs, {role:'assistant', content:res.reply}])
  }
  return (
    <div className="col">
      <div className="card">
        <div className="h1">HiveBot</div>
        <div className="col">
          <textarea rows={4} value={input} onChange={e=>setInput(e.target.value)} />
          <button className="btn primary" onClick={send}>Send</button>
        </div>
      </div>
      <div className="col">
        {log.map((m,i)=>(
          <div key={i} className="card" style={{background: m.role==='assistant' ? '#fff8e6':'#f7f7f7'}}>
            <div style={{fontWeight:700}}>{m.role==='assistant'?'HiveBot':'You'}</div>
            <div>{m.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
