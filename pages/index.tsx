import React from 'react'
import { GetStaticProps } from 'next'
import { request } from '../datocms'

import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import AgileSection from '../components/AgileSection'
import DesignSection from '../components/DesignSection'
import ProjectSection from '../components/ProjectSection'
import HistorySection from '../components/HistorySection'
import ContactSection from '../components/ContactSection'

import { Experience, History, Info, Navigation, Project, Section } from '../types'

import query from '../query.graphql'

type Props = {
  navigation: Navigation[],
  // hero: HeroProps,
  hero: Info,
  about: string,
  experience: Experience[],
  // agile: string,
  // design: string,
  // projects: ProjectItemProps[],
  // history: HistoryItemProps[],
  contact: Info,
}

export default function Home({
  navigation,
  hero,
  about,
  experience,
  // agile,
  // design,
  // projects,
  // history,
  contact
}: Props) {

  return (
    <main>
      {/* <NavBar>{navBar}</NavBar>
      <Experience>{experience}</Experience>
      <Agile>{agile}</Agile>
      <Design>{design}</Design>
      <Projects>{projects}</Projects>
      <History>{history}</History>*/}
      <NavBar>{navigation}</NavBar>
      <HeroSection {...hero} />
      <AboutSection>{about}</AboutSection>
      <ExperienceSection>{experience}</ExperienceSection>
      {/* <AgileSection>{agile}</AgileSection> */}
      <ContactSection {...contact} />
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const data = await request<{
    navigation: Navigation[],
    info: Info,
    experience: Experience[],
    agile: Section,
    design: Section,
    projects: Project[],
    history: History[],
  }>(query)

  return {
    props: {
      hero: data.info,
      navigation: data.navigation,
      about: data.info.about,
      experience: data.experience,
      // agile: data.agile,
      contact: data.info,
    }
  }
}