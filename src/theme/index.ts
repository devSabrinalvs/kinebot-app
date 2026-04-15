export const colors = {
  // Escala de cinza
  white: '#FFFFFF',
  grey50: '#F8F8F8',
  grey100: '#F0F0F0',
  grey150: '#E6E6E6',
  grey300: '#8C8C8C',
  grey400: '#505050',
  grey500: '#262626',

  // Escala de azul
  blue100: '#E6EAF8',
  blue500: '#002FBB',

  // Escala de risco
  risk: {
    acceptable: '#17A93B',
    moderate: '#FFB40A',
    high: '#F2751C',
    veryHigh: '#D13342',
    critical: '#7828C8',
  },

  // Gradientes
  gradients: {
    header: ['#FFFFFF', '#EFF2FF'] as string[],
  },
};

export const typography = {
  // Headings
  headingSmall: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 32,
    letterSpacing: -0.1,
    color: colors.grey500,
  },

  // Labels
  labelMediumSemibold: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  labelMediumRegular: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
    letterSpacing: -0.08,
  },
  labelSmallSemibold: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 16,
  },
  labelSmallRegular: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 16,
    letterSpacing: -0.07,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 100,
};

export const shadows = {
  card: {
    shadowColor: '#D9D9D9',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    shadowColor: '#D9D9D9',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
  },
};
