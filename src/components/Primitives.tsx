import styled from '@emotion/styled';
import type { ReactNode } from 'react';

// ============================================================================
// CONTENT PRIMITIVES - The "Markdown Philosophy" as Components
// ============================================================================
// These 8-10 components handle 95% of content needs with full type safety,
// theme integration, and React composition power.
// ============================================================================

// ============================================================================
// 1. HEADINGS
// ============================================================================

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  id?: string;  // For anchor links
}

const headingStyles = () => `
  font-family: ${(props: any) => props.theme.fonts.heading};
  color: ${(props: any) => props.theme.colors.text};
  font-weight: 700;
  line-height: 1.2;
  margin-top: ${(props: any) => props.theme.spacing.lg};
  margin-bottom: ${(props: any) => props.theme.spacing.md};
  
  &:first-of-type {
    margin-top: 0;
  }
`;

const H1 = styled.h1`${headingStyles()} font-size: ${props => props.theme.fontSizes.xxxl};`;
const H2 = styled.h2`${headingStyles()} font-size: ${props => props.theme.fontSizes.xxl};`;
const H3 = styled.h3`${headingStyles()} font-size: ${props => props.theme.fontSizes.xl};`;
const H4 = styled.h4`${headingStyles()} font-size: ${props => props.theme.fontSizes.lg};`;
const H5 = styled.h5`${headingStyles()} font-size: ${props => props.theme.fontSizes.base};`;
const H6 = styled.h6`${headingStyles()} font-size: ${props => props.theme.fontSizes.sm};`;

export function Heading({ level, children, id }: HeadingProps) {
  const Component = [H1, H2, H3, H4, H5, H6][level - 1];
  return <Component id={id}>{children}</Component>;
}

// ============================================================================
// 2. PARAGRAPHS & TEXT
// ============================================================================

export const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

interface TextProps {
  variant?: 'body' | 'caption' | 'small';
  children: ReactNode;
}

const textVariants = {
  body: (props: any) => props.theme.fontSizes.base,
  caption: (props: any) => props.theme.fontSizes.sm,
  small: (props: any) => props.theme.fontSizes.xs,
};

export const Text = styled.span<{ variant?: 'body' | 'caption' | 'small' }>`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => textVariants[props.variant || 'body']};
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
`;

// ============================================================================
// 3. LISTS
// ============================================================================

export const List = styled.ul<{ ordered?: boolean }>`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
  padding-left: ${props => props.theme.spacing.lg};
  list-style-type: ${props => props.ordered ? 'decimal' : 'disc'};
  
  &:last-child {
    margin-bottom: 0;
  }
`.withComponent((props: any) => props.ordered ? 'ol' : 'ul');

export const ListItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// ============================================================================
// 4. LINKS
// ============================================================================

export const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
  
  &:hover {
    border-bottom-color: ${props => props.theme.colors.primary};
  }
  
  &:visited {
    color: ${props => props.theme.colors.primary};
  }
`;

// ============================================================================
// 5. INLINE CODE
// ============================================================================

export const Code = styled.code`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.9em;
  background: ${props => props.theme.colors.hover};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.small};
  padding: 0.2em 0.4em;
  color: ${props => props.theme.colors.text};
`;

// ============================================================================
// 6. CODE BLOCKS
// ============================================================================

interface CodeBlockProps {
  language?: string;
  children: string;
  showLineNumbers?: boolean;
}

const CodeBlockContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radii.medium};
  overflow: hidden;
  background: ${props => props.theme.colors.hover};
  border: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CodeBlockHeader = styled.div`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`;

const Pre = styled.pre`
  margin: 0;
  padding: ${props => props.theme.spacing.md};
  overflow-x: auto;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.5;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.hover};
`;

const CodeText = styled.code`
  font-family: ${props => props.theme.fonts.mono};
`;

export function CodeBlock({ language, children, showLineNumbers }: CodeBlockProps) {
  return (
    <CodeBlockContainer>
      {language && <CodeBlockHeader>{language}</CodeBlockHeader>}
      <Pre>
        <CodeText>{children}</CodeText>
      </Pre>
    </CodeBlockContainer>
  );
}

// ============================================================================
// 7. BLOCKQUOTE
// ============================================================================

export const Blockquote = styled.blockquote`
  margin: ${props => props.theme.spacing.lg} 0;
  padding-left: ${props => props.theme.spacing.md};
  border-left: 4px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  font-style: italic;
  
  p {
    margin-bottom: ${props => props.theme.spacing.sm};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// ============================================================================
// 8. CALLOUT (Bonus for docs)
// ============================================================================

interface CalloutProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  children: ReactNode;
}

const calloutColors = {
  info: { bg: '#e3f2fd', border: '#2196f3' },
  success: { bg: '#e8f5e9', border: '#4caf50' },
  warning: { bg: '#fff3e0', border: '#ff9800' },
  error: { bg: '#ffebee', border: '#f44336' },
};

export const Callout = styled.div<{ type?: 'info' | 'success' | 'warning' | 'error' }>`
  margin: ${props => props.theme.spacing.md} 0;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radii.medium};
  border-left: 4px solid ${props => {
    const type = props.type || 'info';
    return calloutColors[type].border;
  }};
  background: ${props => props.theme.colors.hover};
  
  p:last-child {
    margin-bottom: 0;
  }
`;

// ============================================================================
// 9. DIVIDER
// ============================================================================

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.colors.border};
  margin: ${props => props.theme.spacing.lg} 0;
`;

// ============================================================================
// 10. LAYOUT HELPERS
// ============================================================================

interface StackProps {
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
}

export const Stack = styled.div<{ spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[props.spacing || 'md']};
`;

export const Inline = styled.div<{ spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[props.spacing || 'sm']};
  align-items: center;
`;

// ============================================================================
// EXPORTS
// ============================================================================

// Export everything for easy importing
export {
  // Already exported above, just for clarity:
  // Heading, Paragraph, Text, List, ListItem, Link,
  // Code, CodeBlock, Blockquote, Callout, Divider,
  // Stack, Inline
};
