export default function CustomIcon({
  children,
  className,
  icon,
  size,
  color,
  background,
}) {
  return (
    <div
      style={{ backgroundColor: background, padding: "8px", borderRadius: "10px" }}
    >
      <svg width={size} height={size}>
        <path d={icon} fill={color}></path>
      </svg>
    </div>
  );
}
//# sourceMappingURL=custom_icon.component.jsx.map
