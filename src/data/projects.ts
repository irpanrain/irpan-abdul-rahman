import { ProjectCardDataProps } from "components/molecules/ProjectCard/types";

const projects: ProjectCardDataProps[] = [
  {
    title: 'CI Acoder Boilerplate',
    description: 'CodeIgniter 4 Application Starter Boilerplate',
    type: 'github',
    url: 'https://github.com/irpanrain/ci-acoder-boilerplate/tree/development-v0',
  },
  {
    title: 'Acoder Spring Boot Template / Boilerplate',
    description:
      'Spring Boot API Boilerplate with the basic spring scurity and authentication',
    type: 'github',
    url: 'https://github.com/irpanrain/acoder_spring_boot_template',
  },
  {
    title: 'Nest Blog',
    description:
      'Create blog using NestJs API and ReactJs for Frontend',
    type: 'github',
    url: 'https://github.com/irpanrain/nest-blog',
  },
];

export default projects;
