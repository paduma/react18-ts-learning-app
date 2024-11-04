import { ReactNode } from "react";

interface Props {
  color: string;
  children: ReactNode;
  onClick: () => void;
}

function Button({ color, children, onClick }: Props) {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button