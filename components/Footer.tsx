import React from "react";
import { PortfolioData } from "@/types/portfolio";

interface FooterProps {
  footer: PortfolioData["footer"];
}

export const Footer: React.FC<FooterProps> = ({ footer }) => {
  return (
    <footer
      className="bg-brand-dark text-white border-t-2 border-brand-dark py-12"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-yellow text-brand-dark font-display font-black text-xl rounded-xl border-2 border-white flex items-center justify-center shadow-brutal-sm">
            T2
          </div>
          <div>
            <h4 className="font-display font-black text-lg">{footer.title}</h4>
            <p className="text-xs text-gray-400 font-mono-code">{footer.subtitle}</p>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs sm:text-sm text-gray-300 font-medium">
            Made with passion, coffee &amp; code by{" "}
            <span className="text-brand-yellow font-bold">{footer.dedication}</span>.
          </p>
          <p className="text-[11px] text-gray-500 font-mono-code mt-1">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
