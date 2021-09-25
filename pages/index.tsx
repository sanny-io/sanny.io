import React from 'react'
import grayMatter from 'gray-matter'
import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import NavBar from '../components/NavBar'
import Hero, { HeroProps } from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Agile from '../components/Agile'
import Design from '../components/Design'
import Projects from '../components/Projects'
import History from '../components/History'
import Contact, { ContactProps } from '../components/Contact'

import { NavBarItemProps } from '../components/NavBar/NavBarItem'
import { ExperienceItemProps } from '../components/Experience/ExperienceItem'
import { ProjectItemProps } from '../components/Projects/ProjectItem'
import { HistoryItemProps } from '../components/History/HistoryItem'

import navBarMd from '../content/navbar.md'
import infoMd from '../content/info.md'
import aboutMd from '../content/about.md'
import experienceMd from '../content/experience.md'
import agileMd from '../content/agile.md'
import designMd from '../content/design.md'
import projectsMd from '../content/projects.md'
import historyMd from '../content/history.md'

export type HomeProps = {
  navBar: NavBarItemProps[],
  hero: HeroProps,
  about: string,
  experience: ExperienceItemProps[],
  agile: string,
  design: string,
  projects: ProjectItemProps[],
  history: HistoryItemProps[],
  contact: ContactProps,
}

export default function Home({
  navBar,
  hero,
  about,
  experience,
  agile,
  design,
  projects,
  history,
  contact
}: HomeProps) {

  return (
    <main>
      <NavBar>{navBar}</NavBar>
      <Hero {...hero} />
      <About>{about}</About>
      <Experience>{experience}</Experience>
      <Agile>{agile}</Agile>
      <Design>{design}</Design>
      <Projects>{projects}</Projects>
      <History>{history}</History>
      <Contact {...contact} />
    </main>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const { data: info } = grayMatter(infoMd)
  const { data: navBar } = grayMatter(navBarMd)
  const { content: about } = grayMatter(aboutMd)
  const { data: experience } = grayMatter(experienceMd)
  const { content: agile } = grayMatter(agileMd)
  const { content: design } = grayMatter(designMd)
  const { data: projects } = grayMatter(projectsMd)
  const { data: history } = grayMatter(historyMd)

  const plaiceholders = await Promise.all(projects.map((project: ProjectItemProps) => {
    return getPlaiceholder(project.image)
  }))

  // @ts-ignore
  plaiceholders.forEach((plaiceholder, index) => {
    // @ts-ignore
    projects[index].plaiceholder = plaiceholder.base64
  })

  return {
    props: {
      navBar: navBar as NavBarItemProps[],
      hero: info as HeroProps,
      about,
      experience: experience as ExperienceItemProps[],
      agile,
      design,
      projects: projects as ProjectItemProps[],
      history: history as HistoryItemProps[],
      contact: info as ContactProps,
    }
  }
}