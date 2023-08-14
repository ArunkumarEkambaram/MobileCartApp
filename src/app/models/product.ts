export class Product {
  public id: number = 0;
  public productName: string = "";
  public description?: string;
  public imageUrl?: string;
  public productType?: string;
  public manufacturer?: string;
  public price: number = 0;
  public rating: number = 0;
  public addedDate: Date = new Date();
}
