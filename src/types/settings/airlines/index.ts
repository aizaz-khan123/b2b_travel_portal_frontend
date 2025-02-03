export type IAirline = {
    id: number;
    uuid: string;
    name: string;
    thumbnail: string;
    iata_code: string;
    status: boolean;
    issuing_pcc: string;
    reserving_pcc: string;
    tour_code: string;
    country: object;
    preferred_connector: [];
    created_at: Date;
    updated_at: Date;
};

export type IAirlinesResponse = {
    status: boolean;
    code: number;
    message: string;
    data: {
        current_page: number;
        data: IAirline[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
};