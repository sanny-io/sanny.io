import type { GetStaticProps } from 'next'
import type { Experience, History, Image, Info, Navigation, Project, Section } from '../types'

import React from 'react'
import graphql from '../graphql'

import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import AgileSection from '../components/AgileSection'
import DesignSection from '../components/DesignSection'
import ProjectSection from '../components/ProjectSection'
import HistorySection from '../components/HistorySection'
import ContactSection from '../components/ContactSection'

import homeQuery from '../queries/home.graphql'

type Props = {
  navigation: Navigation[],
  hero: Info,
  about: string,
  experience: Experience[],
  agile: Section,
  design: Section & { image: Image },
  projects: Project[],
  history: History[],
  contact: Info,
}

export default function Home({
  navigation,
  hero,
  about,
  experience,
  agile,
  design,
  projects,
  history,
  contact
}: Props) {

  return (
    <main>
      <NavBar>{navigation}</NavBar>
      <HeroSection {...hero} />
      <AboutSection>{about}</AboutSection>
      <ExperienceSection>{experience}</ExperienceSection>
      <AgileSection {...agile} />
      <DesignSection {...design} />
      <ProjectSection>{projects}</ProjectSection>
      <HistorySection>{history}</HistorySection>
      <ContactSection {...contact} />
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const data = await graphql.request<{
    navigation: Navigation[],
    info: Info,
    experience: Experience[],
    agile: Section,
    design: Section & { image: Image },
    projects: Project[],
    history: History[],
  }>(homeQuery)

  return {
    props: {
      hero: data.info,
      navigation: data.navigation,
      about: data.info.about,
      experience: data.experience,
      agile: data.agile,
      design: data.design,
      projects: data.projects,
      history: data.history,
      contact: data.info,
    }
  }
}