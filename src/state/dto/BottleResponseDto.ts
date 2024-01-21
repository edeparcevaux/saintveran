import { ApiResponseDto } from "../rest.types";

export interface BottleResponseDto extends ApiResponseDto {
  name: string;
  tag?: string[];
  year: string;
  img: string;
  description: string;
  quantity: number;
  price: number;
}
