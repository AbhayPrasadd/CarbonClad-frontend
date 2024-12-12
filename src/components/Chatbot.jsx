import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Load the Dialogflow script
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="carbon_mitra"
      agent-id="4abe2d0b-0384-4e08-8048-747892180b53"
      language-code="en"
    ></df-messenger>
  );
};

export default Chatbot;
