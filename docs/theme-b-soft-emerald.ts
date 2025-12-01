export const themeSoftEmerald = {
  name: 'Soft Emerald',
  description: 'エメラルドグリーンをベースに、柔らかいピンクをアクセントに。成長と温かみを両立。',

  // ブランド
  primary: '#10b981',
  secondary: '#f472b6',

  // 状態
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',

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

  // Podタイプ
  podType: {
    self: '#10b981',
    pair: '#3b82f6',
    quad: '#f472b6',
    circle: '#8b5cf6',
    default: '#6b7280',
  },

  // コンポーネント
  tabBarActive: '#10b981',
  tabBarInactive: '#9ca3af',
  headerText: '#1f2937',
  subtitleText: '#6b7280',
  errorText: '#dc2626',

  // ユーティリティ
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ThemeSoftEmerald = typeof themeSoftEmerald;
