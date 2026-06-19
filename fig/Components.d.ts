// Components.d.ts — the complete catalog of the 17 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Button) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button" (node 0:41)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  style2?: "primary" | "secondary" | "tertiary" | "link";
  small?: boolean;
  iconPosition?: "no icon" | "leading" | "trailing" | "only";
  alternate?: boolean;
  /** Text content; defaults to "Button". */
  text1?: string;
}

// figma layer: "call" (node 0:218)
export interface CallProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "chevron_right" (node 0:193)
export interface ChevronRightProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "communities" (node 0:206)
export interface CommunitiesProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Company Logo" (node 0:11)
export interface CompanyLogoProps {
  className?: string;
  style?: React.CSSProperties;
  alternate?: boolean;
}

// figma layer: "docs" (node 0:204)
export interface DocsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Facebook" (node 0:290)
export interface FacebookProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "finance" (node 0:200)
export interface FinanceProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Início • Desktop" (node 0:594)
export interface InCioDesktopProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Instagram" (node 0:292)
export interface InstagramProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "LinkedIn" (node 0:296)
export interface LinkedInProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "location_on" (node 0:220)
export interface LocationOnProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "mail" (node 0:213)
export interface MailProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Relume" (node 0:32)
export interface RelumeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Text input" (node 0:237)
export interface TextInputProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "right icon" | "two icons" | "left icon" | "input with dropdown" | "website input";
  alternate?: boolean;
  /** Text content; defaults to "Placeholder". */
  text1?: string;
  /** Text content; defaults to "Placeholder". */
  text2?: string;
}

// figma layer: "X" (node 0:294)
export interface XProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Youtube" (node 0:298)
export interface YoutubeProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Button: React.FC<ButtonProps>;
declare const Call: React.FC<CallProps>;
declare const ChevronRight: React.FC<ChevronRightProps>;
declare const Communities: React.FC<CommunitiesProps>;
declare const CompanyLogo: React.FC<CompanyLogoProps>;
declare const Docs: React.FC<DocsProps>;
declare const Facebook: React.FC<FacebookProps>;
declare const Finance: React.FC<FinanceProps>;
declare const InCioDesktop: React.FC<InCioDesktopProps>;
declare const Instagram: React.FC<InstagramProps>;
declare const LinkedIn: React.FC<LinkedInProps>;
declare const LocationOn: React.FC<LocationOnProps>;
declare const Mail: React.FC<MailProps>;
declare const Relume: React.FC<RelumeProps>;
declare const TextInput: React.FC<TextInputProps>;
declare const X: React.FC<XProps>;
declare const Youtube: React.FC<YoutubeProps>;
declare global {
  interface Window {
    Button: React.FC<ButtonProps>;
    Call: React.FC<CallProps>;
    ChevronRight: React.FC<ChevronRightProps>;
    Communities: React.FC<CommunitiesProps>;
    CompanyLogo: React.FC<CompanyLogoProps>;
    Docs: React.FC<DocsProps>;
    Facebook: React.FC<FacebookProps>;
    Finance: React.FC<FinanceProps>;
    InCioDesktop: React.FC<InCioDesktopProps>;
    Instagram: React.FC<InstagramProps>;
    LinkedIn: React.FC<LinkedInProps>;
    LocationOn: React.FC<LocationOnProps>;
    Mail: React.FC<MailProps>;
    Relume: React.FC<RelumeProps>;
    TextInput: React.FC<TextInputProps>;
    X: React.FC<XProps>;
    Youtube: React.FC<YoutubeProps>;
  }
}
