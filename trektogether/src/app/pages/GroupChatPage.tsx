import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Send, Users } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export default function GroupChatPage() {
  const { id } = useParams();
  const [message, setMessage] = useState('');

  const [messages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Alex Kumar',
      avatar: 'https://i.pravatar.cc/150?img=12',
      content: 'Hey everyone! Excited for this trek! 🏔️',
      timestamp: '10:30 AM',
      isCurrentUser: false,
    },
    {
      id: '2',
      sender: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content: 'Me too! Has everyone checked the weather forecast?',
      timestamp: '10:32 AM',
      isCurrentUser: false,
    },
    {
      id: '3',
      sender: 'You',
      avatar: 'https://i.pravatar.cc/150?img=15',
      content: 'Yes! Looks perfect for trekking. Clear skies predicted.',
      timestamp: '10:35 AM',
      isCurrentUser: true,
    },
    {
      id: '4',
      sender: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
      content: 'Great! Don\'t forget to bring extra water and sunscreen.',
      timestamp: '10:40 AM',
      isCurrentUser: false,
    },
  ]);

  const [participants] = useState([
    { name: 'Alex Kumar', avatar: 'https://i.pravatar.cc/150?img=12', status: 'online' },
    { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1', status: 'online' },
    { name: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?img=3', status: 'away' },
    { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=5', status: 'online' },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Add message logic here
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 px-4 sm:px-6 py-4">
        <div className="container mx-auto max-w-7xl">
          <Link
            to={`/trek/${id}`}
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Trek
          </Link>
          <h1 className="text-xl text-stone-900">Group Chat</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="container mx-auto max-w-7xl flex-1 flex">
          {/* Participants Sidebar */}
          <div className="hidden md:block w-64 bg-white border-r border-stone-200 overflow-y-auto">
            <div className="p-4 border-b border-stone-200">
              <div className="flex items-center gap-2 text-stone-700">
                <Users className="w-5 h-5" />
                <span>Participants ({participants.length})</span>
              </div>
            </div>
            <div className="p-2">
              {participants.map((participant, index) => (
                <div key={index} className="flex items-center gap-3 p-3 hover:bg-stone-50 rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src={participant.avatar}
                      alt={participant.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      participant.status === 'online' ? 'bg-emerald-500' : 'bg-stone-400'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-stone-900 truncate">{participant.name}</p>
                    <p className="text-xs text-stone-500">{participant.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {/* Date Separator */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-stone-200"></div>
                <span className="text-xs text-stone-500">Today</span>
                <div className="flex-1 h-px bg-stone-200"></div>
              </div>

              {/* Messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.isCurrentUser ? 'flex-row-reverse' : ''}`}
                >
                  {!msg.isCurrentUser && (
                    <img
                      src={msg.avatar}
                      alt={msg.sender}
                      className="w-8 h-8 rounded-full flex-shrink-0"
                    />
                  )}
                  <div className={`flex flex-col ${msg.isCurrentUser ? 'items-end' : ''}`}>
                    {!msg.isCurrentUser && (
                      <span className="text-xs text-stone-500 mb-1">{msg.sender}</span>
                    )}
                    <div
                      className={`max-w-md px-4 py-2.5 rounded-2xl ${
                        msg.isCurrentUser
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-100 text-stone-900'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                    <span className="text-xs text-stone-400 mt-1">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t border-stone-200 p-4">
              <form onSubmit={handleSend} className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
