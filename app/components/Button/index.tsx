interface NavBtnProps {
  onClick: () => void;
  children: React.ReactNode;
  isSelected: boolean;
}
export function NavBtn({ onClick, children, isSelected }: NavBtnProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
export function CategoryBtn({ onClick, children, isSelected }: NavBtnProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClick}>
        {children} ({0})
      </button>
    </li>
  );
}
