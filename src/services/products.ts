export interface ProductProps {
  id?: number;
  image: string;
  name: string;
  next: string;
  available: boolean;
  rating: number;
}

export async function getProducts(): Promise<ProductProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/3226806/pexels-photo-3226806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Mini Cooper 2020",
          next: "11/07",
          available: true,
          rating: 5,
        },
        {
          id: 2,
          image:
            "https://images.pexels.com/photos/3226806/pexels-photo-3226806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Mini Cooper 2020",
          next: "11/07",
          available: true,
          rating: 5,
        },
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/3226806/pexels-photo-3226806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Mini Cooper 2020",
          next: "11/07",
          available: true,
          rating: 5,
        },
        {
          id: 4,
          image:
            "https://images.pexels.com/photos/3226806/pexels-photo-3226806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Mini Cooper 2020",
          next: "11/07",
          available: true,
          rating: 5,
        },
        {
          id: 5,
          image:
            "https://images.pexels.com/photos/3226806/pexels-photo-3226806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Mini Cooper 2020",
          next: "11/07",
          available: true,
          rating: 4,
        },
        {
          id: 6,
          image:
            "https://images.pexels.com/photos/3226806/pexels-photo-3226806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Mini Cooper 2020",
          next: "11/07",
          available: false,
          rating: 3,
        },
      ]);
    }, 3000);
  });
}
