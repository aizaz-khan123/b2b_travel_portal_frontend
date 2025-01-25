export type IChatMessage = {
    message: string;
    sendAt: Date;
    fromMe: boolean;
};

export type IChat = {
    id: number;
    image: string;
    name: string;
    messages: IChatMessage[];
    unreads?: number;
};

export type IChatData = {
    chats: IChat[];
};
