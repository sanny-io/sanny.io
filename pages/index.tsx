import type { GetStaticProps } from 'next'
import type { Experience, History, Image, Info, Navigation, Project, Section } from '../types'

import React from 'react'
import { GraphQLClient } from 'graphql-request'

import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import AgileSection from '../components/AgileSection'
import DesignSection from '../components/DesignSection'
import ProjectSection from '../components/ProjectSection'
import HistorySection from '../components/HistorySection'
import ContactSection from '../components/ContactSection'

import query from '../query.graphql'

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
      {/* <NavBar>{navBar}</NavBar>
      <Experience>{experience}</Experience>
      <Design>{design}</Design>
      <Projects>{projects}</Projects>
      <History>{history}</History>*/}
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
  const graphql = new GraphQLClient(process.env.NEXT_PUBLIC_DATOCMS_URL as string, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_KEY}`
    }
  })

  const data = await graphql.request<{
    navigation: Navigation[],
    info: Info,
    experience: Experience[],
    agile: Section,
    design: Section & { image: Image },
    projects: Project[],
    history: History[],
  }>(query)

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