import React from 'react';
import { Icon } from '@iconify/react';
import laravelIcon from '@iconify/icons-logos/laravel';
import codeigniterIcon from '@iconify/icons-logos/codeigniter';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import jqueryIcon from '@iconify/icons-logos/jquery';

const skills = [
  <a href="http://jquery.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={jqueryIcon} />
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
];

export default skills;
