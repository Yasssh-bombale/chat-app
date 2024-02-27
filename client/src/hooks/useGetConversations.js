import { useEffect, useState } from "react";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversationUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/user/getallusers");
        const data = await res.json();

        if (!res.ok) {
          setLoading(false);
        }
        if (res.ok) {
          if (data) {
            setConversations(data);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getConversationUsers();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
