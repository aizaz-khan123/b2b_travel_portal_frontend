export type IAirlineMargin = {
    id: number;
    uuid: string;
    sales_channel: string;
    region: string;
    margin: string;
    margin_type: string;
    sale_start_continue: Date;
    sale_end_continue: Date;
    travel_start_continue: Date;
    travel_end_continue: Date;
    rbds: string;
    is_apply_on_gross: boolean;
    status: boolean;
    remarks: string;
    airline:{
        name:string;
    };
};