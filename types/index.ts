import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CardProps {
  title: string;
  img: string;
  content: string;
  button?: string;
}

export interface ImagePartnersProps {
  img: string;
  url: string;
  alt: string;
}

export interface ProductCardProps {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

export interface TableProps {
  tableData: TableItem[];
  column: string[];
}
export interface TableItem {
  oilboom: string;
  description: string;
  pdf?: string;
  project?: string;
}

export interface DownloadProps {
  pdfPath: string;
}

export interface VideoProps {
  videoSrc: string;
  title: string;
  subtitle: string;
}
