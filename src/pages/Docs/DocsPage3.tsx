import styled from '@emotion/styled';
import {
  Heading,
  Paragraph,
  Text,
  Divider,
  Stack,
  Box,
  Container,
  Flex,
  Inline,
} from '../../components/Primitives';

const DemoBox = styled(Box)`
  border: 2px dashed ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.medium};
  background: ${props => props.theme.colors.hover};
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
`;

export function DocsPage3() {
  return (
    <Container size="lg" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Stack spacing="xl">
        <div>
          <Heading level={1}>🎨 Layout Components Test</Heading>
          <Paragraph>
            <Text variant="caption">
              Testing Box, Container, and Flex components with various props and spacing tokens
            </Text>
          </Paragraph>
        </div>

        <Divider />

        {/* BOX COMPONENT TESTS */}
        <section>
          <Heading level={2}>Box Component</Heading>
          <Paragraph>Universal container with padding and margin props.</Paragraph>

          <Stack spacing="lg">
            <div>
              <Heading level={3}>Padding Variants</Heading>
              <Stack spacing="md">
                <Box p="xs" bg="rgba(0,0,0,0.05)">
                  <DemoBox>p="xs"</DemoBox>
                </Box>
                <Box p="sm" bg="rgba(0,0,0,0.05)">
                  <DemoBox>p="sm"</DemoBox>
                </Box>
                <Box p="md" bg="rgba(0,0,0,0.05)">
                  <DemoBox>p="md"</DemoBox>
                </Box>
                <Box p="lg" bg="rgba(0,0,0,0.05)">
                  <DemoBox>p="lg"</DemoBox>
                </Box>
                <Box p="xl" bg="rgba(0,0,0,0.05)">
                  <DemoBox>p="xl"</DemoBox>
                </Box>
              </Stack>
            </div>

            <div>
              <Heading level={3}>Padding Directions</Heading>
              <Stack spacing="md">
                <Box px="lg" py="sm" bg="rgba(0,0,0,0.05)">
                  <DemoBox>px="lg" py="sm"</DemoBox>
                </Box>
                <Box px="sm" py="lg" bg="rgba(0,0,0,0.05)">
                  <DemoBox>px="sm" py="lg"</DemoBox>
                </Box>
              </Stack>
            </div>

            <div>
              <Heading level={3}>With Margin</Heading>
              <Box m="lg" bg="rgba(0,0,0,0.05)">
                <DemoBox>m="lg"</DemoBox>
              </Box>
            </div>
          </Stack>
        </section>

        <Divider />

        {/* CONTAINER COMPONENT TESTS */}
        <section>
          <Heading level={2}>Container Component</Heading>
          <Paragraph>Centered container with max-width constraint.</Paragraph>

          <Stack spacing="lg">
            <div>
              <Heading level={3}>Size Variants</Heading>
              <Stack spacing="md">
                <div>
                  <Text variant="small">size="sm" (640px)</Text>
                  <Container size="sm">
                    <DemoBox>Container sm</DemoBox>
                  </Container>
                </div>
                <div>
                  <Text variant="small">size="md" (800px)</Text>
                  <Container size="md">
                    <DemoBox>Container md</DemoBox>
                  </Container>
                </div>
                <div>
                  <Text variant="small">size="lg" (1000px) - default</Text>
                  <Container size="lg">
                    <DemoBox>Container lg</DemoBox>
                  </Container>
                </div>
                <div>
                  <Text variant="small">size="xl" (1200px)</Text>
                  <Container size="xl">
                    <DemoBox>Container xl</DemoBox>
                  </Container>
                </div>
                <div>
                  <Text variant="small">size="full" (100%)</Text>
                  <Container size="full">
                    <DemoBox>Container full</DemoBox>
                  </Container>
                </div>
              </Stack>
            </div>
          </Stack>
        </section>

        <Divider />

        {/* FLEX COMPONENT TESTS */}
        <section>
          <Heading level={2}>Flex Component</Heading>
          <Paragraph>Explicit flexbox control with justify, align, and direction props.</Paragraph>

          <Stack spacing="lg">
            <div>
              <Heading level={3}>Justify Content</Heading>
              <Stack spacing="md">
                <div>
                  <Text variant="small">justify="start"</Text>
                  <Flex justify="start" gap="sm">
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">justify="center"</Text>
                  <Flex justify="center" gap="sm">
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">justify="end"</Text>
                  <Flex justify="end" gap="sm">
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">justify="between"</Text>
                  <Flex justify="between" gap="sm">
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">justify="around"</Text>
                  <Flex justify="around" gap="sm">
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Flex>
                </div>
              </Stack>
            </div>

            <div>
              <Heading level={3}>Align Items</Heading>
              <Stack spacing="md">
                <div>
                  <Text variant="small">align="start"</Text>
                  <Flex align="start" gap="sm">
                    <DemoBox style={{ height: '40px' }}>Short</DemoBox>
                    <DemoBox style={{ height: '80px' }}>Tall</DemoBox>
                    <DemoBox style={{ height: '60px' }}>Medium</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">align="center"</Text>
                  <Flex align="center" gap="sm">
                    <DemoBox style={{ height: '40px' }}>Short</DemoBox>
                    <DemoBox style={{ height: '80px' }}>Tall</DemoBox>
                    <DemoBox style={{ height: '60px' }}>Medium</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">align="end"</Text>
                  <Flex align="end" gap="sm">
                    <DemoBox style={{ height: '40px' }}>Short</DemoBox>
                    <DemoBox style={{ height: '80px' }}>Tall</DemoBox>
                    <DemoBox style={{ height: '60px' }}>Medium</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">align="stretch"</Text>
                  <Flex align="stretch" gap="sm" style={{ minHeight: '100px' }}>
                    <DemoBox style={{ flex: 1 }}>Stretch</DemoBox>
                    <DemoBox style={{ flex: 1 }}>Stretch</DemoBox>
                    <DemoBox style={{ flex: 1 }}>Stretch</DemoBox>
                  </Flex>
                </div>
              </Stack>
            </div>

            <div>
              <Heading level={3}>Direction</Heading>
              <Stack spacing="md">
                <div>
                  <Text variant="small">direction="row" (default)</Text>
                  <Flex direction="row" gap="sm">
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">direction="column"</Text>
                  <Flex direction="column" gap="sm">
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Flex>
                </div>
              </Stack>
            </div>

            <div>
              <Heading level={3}>Wrap</Heading>
              <Stack spacing="md">
                <div>
                  <Text variant="small">wrap=true</Text>
                  <Flex wrap={true} gap="sm">
                    <DemoBox style={{ minWidth: '200px' }}>Item 1</DemoBox>
                    <DemoBox style={{ minWidth: '200px' }}>Item 2</DemoBox>
                    <DemoBox style={{ minWidth: '200px' }}>Item 3</DemoBox>
                    <DemoBox style={{ minWidth: '200px' }}>Item 4</DemoBox>
                  </Flex>
                </div>
              </Stack>
            </div>

            <div>
              <Heading level={3}>Gap Variants</Heading>
              <Stack spacing="md">
                <div>
                  <Text variant="small">gap="xs"</Text>
                  <Flex gap="xs">
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">gap="sm"</Text>
                  <Flex gap="sm">
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">gap="md"</Text>
                  <Flex gap="md">
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">gap="lg"</Text>
                  <Flex gap="lg">
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                  </Flex>
                </div>
                <div>
                  <Text variant="small">gap="xl"</Text>
                  <Flex gap="xl">
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                    <DemoBox>Item</DemoBox>
                  </Flex>
                </div>
              </Stack>
            </div>
          </Stack>
        </section>

        <Divider />

        {/* COMPARISON */}
        <section>
          <Heading level={2}>Stack vs Inline vs Flex</Heading>
          <Paragraph>Different ways to arrange content.</Paragraph>

          <Stack spacing="lg">
            <div>
              <Heading level={3}>Stack (vertical)</Heading>
              <Stack spacing="sm">
                <DemoBox>Item 1</DemoBox>
                <DemoBox>Item 2</DemoBox>
                <DemoBox>Item 3</DemoBox>
              </Stack>
            </div>

            <div>
              <Heading level={3}>Inline (horizontal with wrap)</Heading>
              <Inline spacing="sm">
                <DemoBox>Item 1</DemoBox>
                <DemoBox>Item 2</DemoBox>
                <DemoBox>Item 3</DemoBox>
              </Inline>
            </div>

            <div>
              <Heading level={3}>Flex (explicit control)</Heading>
              <Flex justify="between" gap="sm">
                <DemoBox style={{ flex: 1 }}>Item 1</DemoBox>
                <DemoBox style={{ flex: 1 }}>Item 2</DemoBox>
                <DemoBox style={{ flex: 1 }}>Item 3</DemoBox>
              </Flex>
            </div>
          </Stack>
        </section>
      </Stack>
    </Container>
    );
  }
