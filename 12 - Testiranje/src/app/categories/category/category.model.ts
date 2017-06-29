import { ProductSummaryModel } from "../../products/product-summary/product-summary.model";

export class CategoryModel{
     id: number;
     name: string;
     productList: Array<ProductSummaryModel>;
}