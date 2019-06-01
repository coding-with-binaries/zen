import { OrderBlueprintAction } from './blueprints/ActionTypes';
import { OrderReceiptAction } from './receipts/ActionTypes';

export type OrderAction = OrderBlueprintAction | OrderReceiptAction;
