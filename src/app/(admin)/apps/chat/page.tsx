import type { Metadata } from "next";

import { getChatData } from "@/actions/apps/chat";
import { IChatData } from "@/types/apps/chat";

import { ChatApp } from "./ChatApp";
import { ChatProvider } from "./use-chat";

export const metadata: Metadata = {
    title: "Chat",
};

const ChatPage = async () => {
    let chats: IChatData | null = null;

    const rChats = await getChatData();
    if (rChats.status === "success") {
        chats = rChats.data;
    }
    return (
        <>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-9">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Chat</h3>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                {chats && (
                    <ChatProvider data={chats}>
                        <ChatApp />
                    </ChatProvider>
                )}
            </div>
        </>
    );
};

export default ChatPage;
