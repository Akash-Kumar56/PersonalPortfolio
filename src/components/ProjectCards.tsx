import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import FullProject from './FullProject';
import { useDisclosure } from '@mantine/hooks';

const ProjectCards = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className='w-[30%] xl-mx:w-[44%] bs-mx:w-[58%] md-mx:w-[60%] sm-mx:w-[75%] xs-mx:w-[85%]' data-aos="fade-up" data-aos-duration="1000">
    <Card onClick={open} className=' bg-transparent cursor-pointer hover:scale-105 transition transform duration-300 hover:shadow-[0_0_10px_1px_#6070f2] border-2' shadow="lg" radius="lg" withBorder>
    <Card.Section className='p-4'>
      <Image className='rounded-lg shadow-[0_0_5px_0_#6070f2]'
        src={props.image}
        height={160}
        alt={props.image}
      />
    </Card.Section>

    <Group justify="space-between" mt="md" mb="xs">
      <Text className='text-2xl !font-bold text-white ' fw={500}>{props.title}</Text>
      <Badge color="red">{props.live}</Badge>
    </Group>
    <Group justify="space-start" mt="md" mb="xs">
      {props.technologies.map((tech:string, index:number)=> index<3 &&<Badge key={index} variant='light' color="white">{tech}</Badge>)}
    </Group>

    <Text className='text-justify' lineClamp={5} size="sm" c="dimmed">
      {props.desc}
    </Text>

    <Button onClick={open} color="blue" fullWidth mt="md" variant='outline' radius="md">
      Show More
    </Button>
  </Card>
  <FullProject opened={opened} close={close} title={props.title}
            desc={props.desc}
            image={props.image}
            live={props.live}
            link={props.link}
            github={props.github}
            technologies={props.technologies}/>
  </div>
  )
}

export default ProjectCards;