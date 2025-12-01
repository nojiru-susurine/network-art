export const themeCoralTeal = {
  name: 'Coral & Teal',
  description: 'コーラルの温かみとティールの信頼感を組み合わせ。親しみやすく、落ち着いた印象。',

  // ブランド
  primary: '#f97068',
  secondary: '#0d9488',

  // 状態
  success: '#10b981',
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
    self: '#f97068',
    pair: '#0d9488',
    quad: '#6366f1',
    circle: '#f59e0b',
    default: '#6b7280',
  },

  // コンポーネント
  tabBarActive: '#f97068',
  tabBarInactive: '#9ca3af',
  headerText: '#1f2937',
  subtitleText: '#6b7280',
  errorText: '#dc2626',

  // ユーティリティ
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ThemeCoralTeal = typeof themeCoralTeal;
