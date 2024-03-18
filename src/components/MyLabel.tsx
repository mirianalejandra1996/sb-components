import "./MyLabel.css";

interface Props {

  /**
   * Text label Uppercase or Lowercase
   */
  allCaps?: boolean;
  /**
   * Label color text
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

 /**
   * Label custom color text
   */
  fontColor?: string;

  /**
   * Text to display
   */
  label: string;
  /**
   * Label Size
   */
  size?: "normal" | "h1" | "h2" | "h3";
}

/**
 * ! Todas son opcionales
 * 
 * allCaps: boolean
 * color: "text-primary" | "text-secondary" | "text-tertiary"
 * fontColor: string, texto del span
 */

export const MyLabel = ({ size = "normal", color = "text-primary" ,label, allCaps = false, fontColor = '' }: Props) => {
  return <span className={`label ${color} ${size} ${allCaps && 'uppercase'}`} style={{ color: fontColor}}>{label}</span>;
};
