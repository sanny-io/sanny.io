import React from 'react'
import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import { request } from '../datocms'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
// import Experience from '../components/Experience'
import Agile from '../components/Agile'
import Design from '../components/Design'
import Projects from '../components/Projects'
// import History from '../components/History'
import Contact from '../components/Contact'

import { readContent, readContentDirectoryAsData } from '../util'
import { Experience, History, Info, Navigation, Project, Section } from '../types'

const query = `
{
  info {
    name
    title
    headshot {
      url
      width
      height
      blur: responsiveImage {
        url: base64
      }
    }
    github
    linkedin
    email
    about
  }
  experience: allExperiences {
    name
    description
    icon
  }
  agile {
    content
  }
  design {
    content
  }
  projects: allProjects {
    name
    url
    sourceUrl
    blurb
    description
    tags
    image {
      url
      width
      height
      blur: responsiveImage {
        url: base64
      }
    }
  }
  history: allHistories {
    name
    title
    description
    url
    startDate
    endDate
  }
}
`

type Props = {
  navigation: Navigation[],
  // hero: HeroProps,
  hero: Info,
  // about: string,
  // experience: ExperienceItemProps[],
  // agile: string,
  // design: string,
  // projects: ProjectItemProps[],
  // history: HistoryItemProps[],
  // contact: ContactProps,
}

export default function Home({
  navigation,
  hero,
  // about,
  // experience,
  // agile,
  // design,
  // projects,
  // history,
  // contact
}: Props) {

  return (
    <main>
      {/* <NavBar>{navBar}</NavBar>
      <Hero {...hero} />
      <About>{about}</About>
      <Experience>{experience}</Experience>
      <Agile>{agile}</Agile>
      <Design>{design}</Design>
      <Projects>{projects}</Projects>
      <History>{history}</History>
      <Contact {...contact} /> */}
      <NavBar>{navigation}</NavBar>
      <Hero {...hero} />
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
    }
  }
}