import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log(messages);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smootj" });
    });
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length === 0 && (
        <p className="text-center  ">Start conversation by sending a message</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
