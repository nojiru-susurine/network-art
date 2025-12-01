export const colors = {
  // ブランド
  primary: '#ffb347',   // あたたかいアンバーオレンジ
  secondary: '#ffe66d', // 柔らかいグロウイエロー

  // 状態
  success: '#b8ff6a',   // ライム寄りのハッピーグリーン
  error: '#ff4b4b',     // あざやかなレッド
  warning: '#ffd66b',   // 暖かいハニーイエロー

  // 背景（暗い宇宙の中の暖色グロー）
  background: {
    primary: '#05060a',
    secondary: '#070910',
    tertiary: '#0b0f18',
  },

  // テキスト
  text: {
    primary: '#fefcf5',  // ほんのりクリームがかった白
    secondary: '#e5e7eb',
    tertiary: '#9ca3af',
    inverse: '#05060a',
  },

  // ボーダー
  border: {
    light: '#1f2933',
    medium: '#111827',
    dark: '#020617',
  },

  // Podタイプ (Self=Primary, Pair=Secondary)
  podType: {
    self: '#ffe66d',   // やわらかい黄
    pair: '#ffb347',   // オレンジ
    quad: '#ff7a3c',   // 深いオレンジ
    circle: '#c8ff5a', // ネオン寄りライム（アクセント）
    default: '#f59e0b',// 落ち着いたアンバー
  },

  // コンポーネント
  component: {
    tabBarActive: '#ffb347',
    tabBarInactive: '#6b7280',
    headerText: '#fefcf5',
    subtitleText: '#d1d5db',
    errorText: '#ff4b4b',
  },

  // ユーティリティ
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type Colors = typeof colors;
