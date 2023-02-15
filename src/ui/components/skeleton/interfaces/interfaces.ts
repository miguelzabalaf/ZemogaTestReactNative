export enum SkeletonSize {
  Small = 10,
  Medium = 16,
  Large = 24,
}

export interface SkeletonProps {
  width: string | number;
  size: SkeletonSize;
}
