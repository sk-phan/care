import { Document, Model } from 'mongoose';
import { BaseItemType } from "../types/item.type";
export interface IItem extends Document, BaseItemType {
}
declare const Item: Model<IItem>;
export default Item;
