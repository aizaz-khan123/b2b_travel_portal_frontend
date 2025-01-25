import { type ApexGrid as ApexGridType, type ApexStroke as ApexStrokeType } from "apexcharts";

declare module "filepond-plugin-image-preview";
declare module "nice-select2";

declare module "apexcharts" {
    type ApexGrid = ApexGridType & {
        strokeDashArray?: number | number[];
    };

    type ApexStroke = ApexStrokeType & {
        dashArray: number | number[];
    };
}
