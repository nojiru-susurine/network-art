/**
 * Mimoza App - Final Color Theme v2
 * Teal Lagoon: 配色シフト版（Self=Teal, Pair=Blue）
 */

export const colors = {
  // ブランド
  primary: '#14b8a6',
  secondary: '#3b82f6',

  // 状態
  success: '#10b981',
  error: '#ef4444',
  warning: '#eab308',

  // 背景
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
  },

  // テキスト
  text: {
    primary: '#1f2937',
    secondary: '#4b5563',
    tertiary: '#9ca3af',
    inverse: '#ffffff',
  },

  // ボーダー
  border: {
    light: '#f3f4f6',
    medium: '#e5e7eb',
    dark: '#d1d5db',
  },

  // Podタイプ (Self=Primary, Pair=Secondary)
  podType: {
    self: '#14b8a6',
    pair: '#3b82f6',
    quad: '#8b5cf6',
    circle: '#f97316',
    default: '#6b7280',
  },

  // コンポーネント
  component: {
    tabBarActive: '#14b8a6',
    tabBarInactive: '#9ca3af',
    headerText: '#1f2937',
    subtitleText: '#6b7280',
    errorText: '#dc2626',
  },

  // ユーティリティ
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type Colors = typeof colors;
