import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import laravelIcon from '@iconify/icons-logos/laravel';
import jqueryIcon from '@iconify/icons-logos/jquery';

const Text = () => (
  <>
    {/*I’m currently working as a {' '}*/}
    {/*<span className="font-bold text-gray-800">web developer</span>.\*/}
    I enjoy building web apps using
    <HighlightedTextIcon
      as="a"
      href="https://laravel.com"
      className="mx-2"
      icon={<Icon icon={laravelIcon} />}
    >
      Laravel
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={jqueryIcon} />}
    >
      JQuery
    </HighlightedTextIcon>
    . I'm also working as a freelance <span className="font-bold text-gray-800">fullstack developer</span>.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
