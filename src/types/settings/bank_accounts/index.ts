export type IBankAccount = {
    id: number;
    uuid: string;
    account_number: string;
    account_holder_name: string;
    bank_name: string;
    status: boolean;
    bank_address: string;
    contact_number: string;
    bank_logo: string;
    created_at: Date;
    updated_at: Date;
    iban: string;
};

export type IBankAccountsResponse = {
    status: boolean;
    code: number;
    message: string;
    data: {
        current_page: number;
        data: IBankAccount[];
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