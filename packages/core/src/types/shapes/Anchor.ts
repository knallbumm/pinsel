export type Anchor =
  | 'CENTER'
  | 'TOP-LEFT'
  | 'BOTTOM-LEFT'
  | 'TOP-RIGHT'
  | 'BOTTOM-RIGHT'
  | {
      x: number;
      y: number;
    };
