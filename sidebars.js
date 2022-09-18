/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Docs'
    },
    {
      type: 'doc',
      id: 'about-it',
      label: 'About it'
    },
    {
      type: 'category',
      label: 'Coding Problems',
      items: [
        'coding-problem/index', 
        'coding-problem/2022-09-08-easy']
    }
  ],
  
};

module.exports = sidebars;
