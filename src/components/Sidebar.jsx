import React from 'react';
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/eu.jpg";
import MeuArquivoPDF from './curriculo.pdf';
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = MeuArquivoPDF;
    link.download = 'curriculo.pdf';
    link.click();
  };

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Willian Santos" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn" onClick={handleDownloadPDF}>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
