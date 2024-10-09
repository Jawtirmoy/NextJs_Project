import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"], // Only use the supported weights
  subsets: ["latin"], // Include other settings as needed
});
