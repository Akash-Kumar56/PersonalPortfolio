import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { navLinks } from './Navbar';

function SideBar () {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root position='right' opened={opened} onClose={toggle} size="50vw">
        <Drawer.Overlay style={{ backgroundOpacity: 0.5, blur: 4 }}/>
        <Drawer.Content bg="#0A192F">
          <Drawer.Header bg="#0A192F">
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body className='flex flex-col items-center space-y-5 text-white'>
            {navLinks(toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='bs:hidden' color='white'  opened={opened} onClick={toggle} aria-label="Toggle navigation" />
    </>
  );
}
export default SideBar;