import { Modal } from "@mantine/core";
import { Image } from "@mantine/core";

const ResumeView = (props: any) => {
  
  return (
    <Modal.Root size="80%" opened={props.opened} onClose={props.close}>
    <Modal.Overlay />
    <Modal.Content className="rounded-3xl">
      <Modal.Header className="bg-[#0A192F] border-blue-500 border-2 border-b-0 rounded-tl-3xl rounded-tr-3xl">
        <Modal.Title className="text-2xl text-white font-bold">Resume</Modal.Title>
        <Modal.CloseButton size="md" iconSize="30px" className="!bg-[#0A192F] !text-red-400"/>
      </Modal.Header>
      <Modal.Body className="bg-[#0A192F] border-blue-500 border-2 border-t-0 rounded-bl-3xl rounded-br-3xl">
      <Image className='rounded-xl shadow-[0_0_5px_0_#6070f2]'
        src={props.image}
        alt={props.image}
      />
      </Modal.Body>
    </Modal.Content>
  </Modal.Root>
  )
}

export default ResumeView;