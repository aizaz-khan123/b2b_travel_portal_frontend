export type IBranch = {
    id: number;
    uuid: string;
    name: string;
    address: string;
    city: string;
    status: string;
    user_id: number;
    created_at: Date;
    updated_at: Date;
    branch_agencies_count: number;
    branch_employees_count: number;
    branch_manager: {
        id: number,
        uuid: string;
        name: string;
        email: String;
        phone_number: string;
        status: string;
        address: string;
    }
}