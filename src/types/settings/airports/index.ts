export type IAirport = {
    id: number;
    uuid: string;
    name: string;
    municipality: string;
    iso_country: string;
    iata_code: string;
    created_at: Date;
    updated_at: Date;
};

export type IAirportsResponse = {
    status: boolean;
    code: number;
    message: string;
    data: {
        current_page: number;
        data: IAirport[];
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