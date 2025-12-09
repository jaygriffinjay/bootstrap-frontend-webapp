import { useTheme } from './theme/theme';
import styled from '@emotion/styled';
import * as Slider from '@radix-ui/react-slider';

// Styled components using the theme
const Container = styled.div`
  padding: ${props => props.theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Card = styled.div`
  background: ${props => props.theme.colors.hover};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.medium};
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.md};
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.radii.medium};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.base};
  font-family: ${props => props.theme.fonts.body};
  cursor: pointer;
  margin-right: ${props => props.theme.spacing.sm};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.9;
    box-shadow: ${props => props.theme.shadows.md};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

const ControlGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
`;

const SliderTrack = styled(Slider.Track)`
  background: ${props => props.theme.colors.border};
  position: relative;
  flex-grow: 1;
  height: 4px;
  border-radius: ${props => props.theme.radii.full};
`;

const SliderRange = styled(Slider.Range)`
  background: ${props => props.theme.colors.primary};
  position: absolute;
  height: 100%;
  border-radius: ${props => props.theme.radii.full};
`;

const SliderThumb = styled(Slider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.full};
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const CodeBlock = styled.pre`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.small};
  padding: ${props => props.theme.spacing.md};
  overflow-x: auto;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
`;

function App() {
  const { config, theme, updateConfig } = useTheme();

  return (
    <Container>
      <Title>🎨 Theme Playground</Title>
      
      <Card>
        <h2>Theme Controls</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
          Move the sliders to see the theme update in real-time!
        </p>
        
        {/* Border Radius Control */}
        <ControlGroup>
          <Label>Border Radius: {config.radiusScale}px</Label>
          <SliderRoot
            value={[Math.min(config.radiusScale, 100)]}
            onValueChange={([v]) => updateConfig({ radiusScale: v })}
            min={0}
            max={100}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
          <div style={{ marginTop: '8px' }}>
            <Button onClick={() => updateConfig({ radiusScale: 0 })}>
              Square (0)
            </Button>
            <Button onClick={() => updateConfig({ radiusScale: 8 })}>
              Rounded (8)
            </Button>
            <Button onClick={() => updateConfig({ radiusScale: 9999 })}>
              Full Pill (9999)
            </Button>
          </div>
        </ControlGroup>
        
        {/* Primary Hue Control */}
        <ControlGroup>
          <Label>Primary Color Hue: {config.primaryHue}°</Label>
          <SliderRoot
            value={[config.primaryHue]}
            onValueChange={([v]) => updateConfig({ primaryHue: v })}
            min={0}
            max={360}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Spacing Control */}
        <ControlGroup>
          <Label>Spacing Unit: {config.spacingUnit}px</Label>
          <SliderRoot
            value={[config.spacingUnit]}
            onValueChange={([v]) => updateConfig({ spacingUnit: v })}
            min={2}
            max={12}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Font Size Control */}
        <ControlGroup>
          <Label>Base Font Size: {config.baseFontSize}px</Label>
          <SliderRoot
            value={[config.baseFontSize]}
            onValueChange={([v]) => updateConfig({ baseFontSize: v })}
            min={12}
            max={20}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Shadow Intensity Control */}
        <ControlGroup>
          <Label>Shadow Intensity: {(config.shadowIntensity * 100).toFixed(0)}%</Label>
          <SliderRoot
            value={[config.shadowIntensity * 100]}
            onValueChange={([v]) => updateConfig({ shadowIntensity: v / 100 })}
            min={0}
            max={100}
            step={5}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Color Pickers */}
        <ControlGroup>
          <Label>Background Color</Label>
          <input 
            type="color" 
            value={config.backgroundColor}
            onChange={(e) => updateConfig({ backgroundColor: e.target.value })}
            style={{ 
              width: '100%', 
              height: '40px', 
              cursor: 'pointer',
              border: '1px solid ' + theme.colors.border,
              borderRadius: theme.radii.small,
            }}
          />
        </ControlGroup>
        
        <ControlGroup>
          <Label>Text Color</Label>
          <input 
            type="color" 
            value={config.textColor}
            onChange={(e) => updateConfig({ textColor: e.target.value })}
            style={{ 
              width: '100%', 
              height: '40px', 
              cursor: 'pointer',
              border: '1px solid ' + theme.colors.border,
              borderRadius: theme.radii.small,
            }}
          />
        </ControlGroup>
        
        <ControlGroup>
          <Label>Shadow Color</Label>
          <input 
            type="color" 
            value={config.shadowColor}
            onChange={(e) => updateConfig({ shadowColor: e.target.value })}
            style={{ 
              width: '100%', 
              height: '40px', 
              cursor: 'pointer',
              border: '1px solid ' + theme.colors.border,
              borderRadius: theme.radii.small,
            }}
          />
        </ControlGroup>
      </Card>
      
      <Card>
        <h2>Component Examples</h2>
        <p style={{ marginBottom: '1rem' }}>
          These components automatically use theme values (with shadows!):
        </p>
        <Button onClick={() => alert('Button clicked!')}>Primary Button</Button>
        <Button onClick={() => alert('Another button!')}>Another Button</Button>
        
        <div style={{ marginTop: theme.spacing.lg }}>
          <h3 style={{ marginBottom: theme.spacing.sm }}>Shadow Examples:</h3>
          <div style={{ 
            padding: theme.spacing.md, 
            background: theme.colors.hover,
            borderRadius: theme.radii.medium,
            boxShadow: theme.shadows.sm,
            marginBottom: theme.spacing.sm,
          }}>
            Small Shadow (sm)
          </div>
          <div style={{ 
            padding: theme.spacing.md, 
            background: theme.colors.hover,
            borderRadius: theme.radii.medium,
            boxShadow: theme.shadows.md,
            marginBottom: theme.spacing.sm,
          }}>
            Medium Shadow (md)
          </div>
          <div style={{ 
            padding: theme.spacing.md, 
            background: theme.colors.hover,
            borderRadius: theme.radii.medium,
            boxShadow: theme.shadows.lg,
          }}>
            Large Shadow (lg)
          </div>
        </div>
      </Card>
      
      <Card>
        <h2>Current Theme Values</h2>
        <CodeBlock>{JSON.stringify(theme, null, 2)}</CodeBlock>
      </Card>
    </Container>
  );
}

export default App;