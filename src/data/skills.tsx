import React from 'react';
import { Icon } from '@iconify/react';
import laravelIcon from '@iconify/icons-logos/laravel';
import codeigniterIcon from '@iconify/icons-logos/codeigniter';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import jqueryIcon from '@iconify/icons-logos/jquery';
import springIcon from '@iconify/icons-logos/spring' 
import angularIcon from '@iconify/icons-logos/angular-icon'
import vueJsIcon from '@iconify/icons-logos/vue'
import reactJsIcon from '@iconify/icons-logos/react'

const skills = [
  <a href="http://jquery.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={jqueryIcon} />
  </a>,
  <a href="https://vuejs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={vueJsIcon} />
  </a>,
  <a href="https://angular.io" className="focus:outline-none">
    <Icon className="text-5xl" icon={angularIcon} />
  </a>,
  <a href="https://reactjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={reactJsIcon} />
  </a>,
  <a href="https://getbootstrap.com" className="focus:outline-none">
    <Icon className="text-6xl" icon={bootstrapIcon} />
  </a>,
  <a href="https://codeigniter.com" className="focus:outline-none">
    <Icon className="text-6xl" icon={codeigniterIcon} />
  </a>,
  <a href="https://laravel.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={laravelIcon} />
  </a>,
  <a href="https://spring.io" className="focus:outline-none">
    <Icon className="text-5xl" icon={springIcon} />
  </a>
];

export default skills;
