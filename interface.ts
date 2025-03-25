export interface cgItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    id: string
  }
  
export interface cgJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: cgItem[]
  }
