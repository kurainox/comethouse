export default function GoogleIcon({
  name,
  filled = false,
  weight = 400,
  size = 24,
  className = "",
  padding,
  margin,
  color,
  background,
  rounded
}) {
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={{
        fontVariationSettings: `
            "FILL" ${filled ? 1 : 0},
            "wght" ${weight},
            "GRAD" ${0},
            "opsz" ${size},
        `,
        fontSize: size,
        padding: padding || 0,
        margin: margin || 0,
        color: color || "var(--md-sys-color-secondary)",
        background: background || "transparent",
        borderRadius: rounded ? rounded : 0,
      }}
    >
      {name}
    </span>
  );
}
