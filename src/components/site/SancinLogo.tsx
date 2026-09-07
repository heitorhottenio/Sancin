import React from "react";
import logoImg from "@/assets/logo.png";

interface SancinLogoProps {
  className?: string;
  heightClass?: string;
}

export const SancinLogo: React.FC<SancinLogoProps> = ({
  className = "",
  heightClass = "h-20 sm:h-24",
}) => {
  const [imgSrc, setImgSrc] = React.useState<string>(logoImg);
  const [imgError, setImgError] = React.useState(false);

  const handleError = () => {
    // If bundled logo path fails, try public /logo.png before fallback typography
    if (imgSrc !== "/logo.png") {
      setImgSrc("/logo.png");
    } else {
      setImgError(true);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!imgError ? (
        <img
          src={imgSrc}
          alt="Sancin Beauty"
          className={`${heightClass} w-auto object-contain mix-blend-multiply transition-opacity hover:opacity-95`}
          onError={handleError}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <span className="font-display text-2xl font-light tracking-[0.15em] text-primary sm:text-3xl">
            SANCIN <em className="italic text-accent">BEAUTY</em>
          </span>
        </div>
      )}
    </div>
  );
};
