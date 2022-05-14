import React from 'react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import { Icon } from '@iconify/react';
import laravelIcon from '@iconify/icons-logos/laravel';
import jqueryIcon from '@iconify/icons-logos/jquery';

const Text = () => (
  <>
    {/*Saat ini saya sedang bekerja sebagai{' '}*/}
    {/*<span className="font-bold text-gray-800">web developer</span>{' '}. */}
    {/* saya sangat suka menggunakan
    <HighlightedTextIcon
      as="a"
      href="https://tailwindcss.com"
      className="mx-2"
      icon={<Icon icon={laravelIcon} />}
    >
      Laravel
    </HighlightedTextIcon>{' '}
    dan{' '}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={jqueryIcon} />}
    >
      JQuery
    </HighlightedTextIcon> untuk membuat web apps
    . Saya juga seorang freelance fullstack developer. */}
    Pengembang Full Stack berkualifikasi baik yang akrab dengan berbagai utilitas 
    dan bahasa pemrograman. Memiliki pengetahuan tentang persyaratan pengembangan backend 
    dan frontend. Pemain tim kolaboratif dengan kemampuan teknis yang sangat baik 
    menawarkan 3 tahun pengalaman terkait.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
