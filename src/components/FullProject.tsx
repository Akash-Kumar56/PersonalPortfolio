import { Badge, Button, Group, Modal,Text } from "@mantine/core";
import { Image } from "@mantine/core";

const FullProject = (props: any) => {
  
  return (
    <Modal.Root size="95%" className="" opened={props.opened} onClose={props.close}>
    <Modal.Overlay />
    <Modal.Content className="rounded-3xl">
      <Modal.Header className="bg-[#0A192F] border-blue-500 border-2 border-b-0 rounded-tl-3xl rounded-tr-3xl">
        <Modal.Title className="text-2xl text-white font-bold">{props.title}</Modal.Title>
        <Modal.CloseButton size="md" iconSize="30px" className="!bg-[#0A192F] !text-red-400"/>
      </Modal.Header>
      <Modal.Body className="bg-[#0A192F] border-blue-500 border-2 border-t-0 rounded-bl-3xl rounded-br-3xl">
      <Image className='rounded-xl shadow-[0_0_5px_0_#6070f2]'
        src={props.image}
        alt={props.image}
      />
      <Group justify="space-start" mt="md" mb="xs">
      {props.technologies.map((tech:string, index:number)=><Badge key={index} variant='light' color="white">{tech}</Badge>)}
    </Group>
    <Text className='text-justify text-xl sm-mx:text-sm' size="sm" c="dimmed">
      {props.desc}
    </Text>
    <Group justify="space-around" mt="md" mb="xs">
    <a className="w-[40%]"><Button  color="blue" fullWidth mt="md" radius="md" >
      View Code
    </Button></a>
    <a className="w-[40%]"><Button  color="blue" fullWidth variant="outline" mt="md" radius="md">
      View Live App
    </Button></a>
    </Group>
      </Modal.Body>
    </Modal.Content>
  </Modal.Root>
  )
}

export default FullProject;