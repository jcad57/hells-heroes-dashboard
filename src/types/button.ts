export interface ButtonProps {
    children: React.ReactNode;
    btnType: string;
    link?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}
