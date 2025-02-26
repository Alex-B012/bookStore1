import headerBg from "../assets/images/headerbg.jpg";

interface Categories {
  id: number;
  categoryName: string;
}

interface Images {
  id: number;
  imgUrl: string;
}

export const categories: Categories[] = [
  { id: 1, categoryName: "Arts" },
  { id: 2, categoryName: "Biography" },
  { id: 3, categoryName: "Cooking" },
  { id: 4, categoryName: "Fantasy" },
  { id: 5, categoryName: "Health" },
  { id: 6, categoryName: "History" },
  { id: 7, categoryName: "Law" },
  { id: 8, categoryName: "Literature" },
  { id: 9, categoryName: "Mathematics" },
  { id: 10, categoryName: "Philosophy" },
  { id: 11, categoryName: "Religion" },
  { id: 12, categoryName: "Romance" },
  { id: 13, categoryName: "Science Fiction" },
  { id: 14, categoryName: "Technology" },
];

export const images: Images[] = [{ id: 1, imgUrl: headerBg }];
