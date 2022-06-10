interface ISales {
  productName: string;
  infos: {
    saleDate: string;
    warrantyPeriod: number;
  };
}

class SalesRepository {
  private sales: ISales[] = [];

  create({ productName, infos }: ISales): void {
    this.sales.push({ productName, infos });
  }

  list(): ISales[] {
    return this.sales;
  }
}

export default SalesRepository;
