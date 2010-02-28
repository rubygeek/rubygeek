CREATE DATABASE `links` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci;
USE links;

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `id` int(11) NOT NULL auto_increment,
  `link` varchar(250) collate latin1_general_ci NOT NULL default '',
  `description` text collate latin1_general_ci,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=7 ;
