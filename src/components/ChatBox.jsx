import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/chatbox.module.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); // Clear input field

    try {
      const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY; // Store API key in .env
      const API_URL = "https://api.deepseek.com/v1/chat/completions";

      const response = await axios.post(
        API_URL,
        {
          model: "deepseek-chat", // DeepSeek's chat model
          messages: [{ role: "user", content: input }],
          temperature: 0.7,
          max_tokens: 200,
        },
        {
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Extract AI response
      const botResponse = response.data.choices?.[0]?.message?.content || "I'm not sure, can you rephrase?";
      const botMessage = { sender: "bot", text: botResponse };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Error: Unable to process request." }]);
    }
  };

  return (
    <div className={styles.chatboxContainer}>
      <div className={styles.chatboxHeader}>Chatbot</div>

      <div className={styles.chatboxMessages}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className={styles.chatboxInputContainer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.chatboxInput}
        />
        <button onClick={sendMessage} className={styles.chatboxSendButton}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
