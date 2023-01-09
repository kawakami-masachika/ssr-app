// 支払いに関するモデル
export type Payment = {
  id: number
  price: number
  itemName?: string
  category: string // Note code値にする
  purchaseData: Date
  createdAt: Date
  updatedAt: Date
};


type Category = {
  code: string;
  name: string;
};