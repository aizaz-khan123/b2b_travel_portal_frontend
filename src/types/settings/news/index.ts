export type INews = {
    id: number;
    uuid: string;
    title: string;
    description: string;
    image: string;
    news_url: string;
    is_feature: boolean;
    created_at: Date;
    updated_at: Date;
}